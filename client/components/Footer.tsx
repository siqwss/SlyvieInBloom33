import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-brand-primary text-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div
              className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F13e11346f6ee4de6b150f7304f4e7aca%2Fd6d5745669d541e0b6da8b0f22033c5a?format=webp&width=800"
                alt="Slyvie in bloom logo"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span className="text-xl font-serif font-semibold">
                {t("header.brand")}
              </span>
            </div>
            <p className="text-brand-cream/80">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-brand-cream/80 hover:text-brand-cream transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("nav.shop")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.categories")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("category.babyItems")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("category.homeDecor")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("category.accessories")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  {t("category.toys")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-cream/80" />
                <span className="text-brand-cream/80">
                  hello@slyviebloom.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-cream/80" />
                <span className="text-brand-cream/80">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-cream/80" />
                <span className="text-brand-cream/80">
                  Riyadh, Saudi Arabia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-cream/80 text-sm">{t("footer.copyright")}</p>
          <div
            className={`flex mt-4 md:mt-0 ${isRTL ? "space-x-reverse space-x-6" : "space-x-6"}`}
          >
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              {t("footer.terms")}
            </a>
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              {t("footer.returns")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
