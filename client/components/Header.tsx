import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Heart, Globe } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

export function Header() {
  const { totalItems } = useCart();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.shop"), href: "/shop" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/80 border-b border-brand-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F13e11346f6ee4de6b150f7304f4e7aca%2Fd6d5745669d541e0b6da8b0f22033c5a?format=webp&width=800"
              alt="Slyvie in bloom logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-serif text-brand-primary font-semibold">
              {t("header.brand")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center ${isRTL ? "space-x-reverse space-x-8" : "space-x-8"}`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-brand-primary hover:text-brand-dark transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div
            className={`flex items-center ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"}`}
          >
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-brand-primary hover:text-brand-dark"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-brand-cream border-brand-primary/20">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-brand-primary/10" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ar")}
                  className={language === "ar" ? "bg-brand-primary/10" : ""}
                >
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-brand-primary hover:text-brand-dark"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">{t("nav.wishlist")}</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-brand-primary hover:text-brand-dark"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 bg-brand-primary text-brand-cream text-xs flex items-center justify-center">
                      {totalItems}
                    </Badge>
                  )}
                  <span className="sr-only">{t("nav.cart")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-brand-cream">
                <SheetHeader>
                  <SheetTitle className="text-brand-primary">
                    {t("cart.title")}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {totalItems === 0 ? (
                    <p className="text-muted-foreground">{t("cart.empty")}</p>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-brand-primary">
                        {totalItems} {t("cart.itemsInCart")}
                      </p>
                      <Button
                        asChild
                        className="w-full bg-brand-primary hover:bg-brand-dark text-brand-cream"
                      >
                        <Link to="/cart">{t("cart.viewCart")}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile menu trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-brand-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-primary/10">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-brand-primary hover:text-brand-dark transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
