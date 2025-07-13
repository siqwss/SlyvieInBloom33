import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { useCart, Product } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";

// This will be replaced with dynamic data based on language
const getProducts = (t: (key: string) => string): Product[] => [
  {
    id: "1",
    name: t("product.babyBlanket"),
    price: 150,
    image: "/placeholder.svg",
    description: t("product.babyBlanket.desc"),
    category: t("category.baby"),
  },
  {
    id: "2",
    name: t("product.flowerBouquet"),
    price: 85,
    image: "/placeholder.svg",
    description: t("product.flowerBouquet.desc"),
    category: t("category.decor"),
  },
  {
    id: "3",
    name: t("product.winterScarf"),
    price: 120,
    image: "/placeholder.svg",
    description: t("product.winterScarf.desc"),
    category: t("category.accessories"),
  },
  {
    id: "4",
    name: t("product.amigurumiBear"),
    price: 95,
    image: "/placeholder.svg",
    description: t("product.amigurumiBear.desc"),
    category: t("category.toys"),
  },
];

export default function Index() {
  const { addItem } = useCart();
  const { t, isRTL } = useLanguage();
  const featuredProducts = getProducts(t);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream to-brand-cream/80">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}
            >
              <div
                className={`flex items-center justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"} mb-6`}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F13e11346f6ee4de6b150f7304f4e7aca%2Fd6d5745669d541e0b6da8b0f22033c5a?format=webp&width=800"
                  alt="Slyvie in bloom logo"
                  className={`w-12 h-12 object-contain ${isRTL ? "ml-4" : "mr-4"}`}
                />
                <span className="text-2xl font-serif text-brand-primary font-semibold">
                  {t("header.brand")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-brand-primary mb-6 leading-tight">
                {t("hero.title")}
                <span className="block text-brand-primary font-bold">
                  {t("hero.subtitle")}
                </span>
              </h1>
              <p
                className={`text-lg text-brand-primary/80 mb-8 max-w-xl mx-auto ${isRTL ? "lg:mr-0" : "lg:mx-0"}`}
              >
                {t("hero.description")}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-dark text-brand-cream px-8 py-6 text-lg"
                >
                  <Link to="/shop">{t("hero.shop")}</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/about">{t("hero.learn")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-brand-primary/10 rounded-3xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Beautiful crochet work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-primary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-light rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto">
              {t("featured.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-brand-primary/10 bg-white"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-brand-primary text-brand-cream">
                      {product.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white text-brand-primary"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg text-brand-primary mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-brand-primary/70 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-brand-primary">
                      {product.price} {t("product.sar")}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-brand-primary text-brand-primary"
                        />
                      ))}
                      <span className="text-sm text-brand-primary/70 ml-2">
                        (24)
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    onClick={() => addItem(product)}
                    className="w-full bg-brand-primary hover:bg-brand-dark text-brand-cream"
                  >
                    <ShoppingBag
                      className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                    />
                    {t("featured.addToCart")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream px-8 py-6"
            >
              <Link to="/shop">{t("featured.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-brand-cream" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Handmade with Love
              </h3>
              <p className="text-brand-primary/70">
                Every piece is carefully crafted by hand with attention to
                detail and premium materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-brand-cream" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Fast Delivery
              </h3>
              <p className="text-brand-primary/70">
                Quick and secure delivery across Saudi Arabia with tracking
                included.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-brand-cream" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Premium Quality
              </h3>
              <p className="text-brand-primary/70">
                Using only the finest materials to ensure durability and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
