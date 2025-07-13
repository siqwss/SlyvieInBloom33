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
  return (
    <footer className="bg-brand-primary text-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-cream rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-primary rounded-full relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cream rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-brand-cream rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-serif font-semibold">
                Slyvie in bloom
              </span>
            </div>
            <p className="text-brand-cream/80">
              Handcrafted crochet pieces made with love and care. Each item is
              unique and created to bring warmth to your home.
            </p>
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
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Baby Items
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Home Decor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brand-cream/80 hover:text-brand-cream transition-colors"
                >
                  Toys
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
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
          <p className="text-brand-cream/80 text-sm">
            © 2024 Slyvie in bloom. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
            >
              Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
