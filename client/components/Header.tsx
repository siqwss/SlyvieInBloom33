import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Badge } from "./ui/badge";

export function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/80 border-b border-brand-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-brand-cream rounded-full relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-primary rounded-full"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-brand-primary rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-serif text-brand-primary font-semibold">
              Slyvie in bloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-brand-primary hover:text-brand-dark"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
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
                  <span className="sr-only">Shopping cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-brand-cream">
                <SheetHeader>
                  <SheetTitle className="text-brand-primary">
                    Shopping Cart
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {totalItems === 0 ? (
                    <p className="text-muted-foreground">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-brand-primary">
                        {totalItems} items in cart
                      </p>
                      <Button className="w-full bg-brand-primary hover:bg-brand-dark text-brand-cream">
                        View Cart
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
