import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.shop": "Shop",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.wishlist": "Wishlist",
    "nav.cart": "Shopping cart",
    "header.brand": "Slyvie in bloom",

    // Hero section
    "hero.title": "Handcrafted with",
    "hero.subtitle": "Love & Care",
    "hero.description":
      "Discover our collection of beautiful, handmade crochet pieces. Each item is crafted with premium materials and attention to detail that brings warmth to your home.",
    "hero.shop": "Shop Now",
    "hero.learn": "Learn More",

    // Featured section
    "featured.title": "Featured Collection",
    "featured.subtitle":
      "Handpicked pieces from our latest collection, each one unique and made with love",
    "featured.viewAll": "View All Products",
    "featured.addToCart": "Add to Cart",

    // Features
    "features.handmade.title": "Handmade with Love",
    "features.handmade.desc":
      "Every piece is carefully crafted by hand with attention to detail and premium materials.",
    "features.delivery.title": "Fast Delivery",
    "features.delivery.desc":
      "Quick and secure delivery across Saudi Arabia with tracking included.",
    "features.quality.title": "Premium Quality",
    "features.quality.desc":
      "Using only the finest materials to ensure durability and beauty.",

    // Cart
    "cart.title": "Shopping Cart",
    "cart.empty": "Your cart is empty",
    "cart.emptyDesc": "Start shopping to add items to your cart",
    "cart.continue": "Continue Shopping",
    "cart.viewCart": "View Cart",
    "cart.items": "items in cart",
    "cart.orderSummary": "Order Summary",
    "cart.items": "Items",
    "cart.shipping": "Shipping",
    "cart.free": "Free",
    "cart.total": "Total",
    "cart.checkout": "Proceed to Checkout",

    // Product
    "product.sar": "SAR",

    // Footer
    "footer.description":
      "Handcrafted crochet pieces made with love and care. Each item is unique and created to bring warmth to your home.",
    "footer.quickLinks": "Quick Links",
    "footer.categories": "Categories",
    "footer.contact": "Contact Info",
    "footer.copyright": "© 2024 Slyvie in bloom. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.returns": "Return Policy",

    // Categories
    "category.baby": "Baby",
    "category.decor": "Decor",
    "category.accessories": "Accessories",
    "category.toys": "Toys",
    "category.babyItems": "Baby Items",
    "category.homeDecor": "Home Decor",

    // Products
    "product.babyBlanket": "Handmade Baby Blanket",
    "product.babyBlanket.desc": "Soft cotton baby blanket in pastel colors",
    "product.flowerBouquet": "Crochet Flower Bouquet",
    "product.flowerBouquet.desc": "Beautiful never-wilting flower arrangement",
    "product.winterScarf": "Cozy Winter Scarf",
    "product.winterScarf.desc": "Warm wool blend scarf in autumn colors",
    "product.amigurumiBear": "Amigurumi Bear",
    "product.amigurumiBear.desc": "Adorable stuffed bear toy for children",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.shop": "المتجر",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.wishlist": "المفضلة",
    "nav.cart": "سلة التسوق",
    "header.brand": "سيلفي إن بلووم",

    // Hero section
    "hero.title": "مصنوعة يدوياً بـ",
    "hero.subtitle": "حب واهتمام",
    "hero.description":
      "اكتشفي مجموعتنا من قطع الكروشيه الجميلة المصنوعة يدوياً. كل قطعة مصنوعة من مواد عالية الجودة وبعناية فائقة لتضفي الدفء على منزلك.",
    "hero.shop": "تسوقي الآن",
    "hero.learn": "اعرفي أكثر",

    // Featured section
    "featured.title": "المجموعة المميزة",
    "featured.subtitle":
      "قطع مختارة بعناية من أحدث مجموعاتنا، كل واحدة فريدة ومصنوعة بحب",
    "featured.viewAll": "عرض جميع المنتجات",
    "featured.addToCart": "أضيفي للسلة",

    // Features
    "features.handmade.title": "صنع يدوي بحب",
    "features.handmade.desc":
      "كل قطعة مصنوعة بعناية يدوياً مع الاهتمام بالتفاصيل والمواد الفاخرة.",
    "features.delivery.title": "توصيل سريع",
    "features.delivery.desc":
      "توصيل سريع وآمن في جميع أنحاء المملكة العربية السعودية مع إمكانية التتبع.",
    "features.quality.title": "جودة عالية",
    "features.quality.desc": "نستخدم فقط أجود المواد لضمان المتانة والجمال.",

    // Cart
    "cart.title": "سلة التسوق",
    "cart.empty": "سلة التسوق فارغة",
    "cart.emptyDesc": "ابدئي التسوق لإضافة منتجات للسلة",
    "cart.continue": "متابعة التسوق",
    "cart.viewCart": "عرض السلة",
    "cart.items": "منتجات في السلة",
    "cart.orderSummary": "ملخص الطلب",
    "cart.items": "المنتجات",
    "cart.shipping": "الشحن",
    "cart.free": "مجان��",
    "cart.total": "المجموع",
    "cart.checkout": "إتمام الطلب",

    // Product
    "product.sar": "ريال",

    // Footer
    "footer.description":
      "قطع كروشيه مصنوعة يدوياً بحب واهتمام. كل قطعة فريدة ومصممة لتضفي الدفء على منزلك.",
    "footer.quickLinks": "روابط سريعة",
    "footer.categories": "الفئات",
    "footer.contact": "معلومات التواصل",
    "footer.copyright": "© ٢٠٢٤ سيلفي إن بلووم. جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.returns": "سياسة الاستبدال",

    // Categories
    "category.baby": "للأطفال",
    "category.decor": "ديكور",
    "category.accessories": "اكسسوارات",
    "category.toys": "ألعاب",
    "category.babyItems": "منتجات الأطفال",
    "category.homeDecor": "ديكور المنزل",

    // Products
    "product.babyBlanket": "بطانية طفل مصنوعة يدوياً",
    "product.babyBlanket.desc": "بطانية قطنية ناعمة للأطفال بألوان هادئة",
    "product.flowerBouquet": "باقة ورود كروشيه",
    "product.flowerBouquet.desc": "باقة ورود جميلة لا تذبل أبداً",
    "product.winterScarf": "وشاح شتوي دافئ",
    "product.winterScarf.desc": "وشاح دافئ من مزيج الصوف بألوان الخريف",
    "product.amigurumiBear": "دب أميجورومي",
    "product.amigurumiBear.desc": "دب محشو رائع للأطفال",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
