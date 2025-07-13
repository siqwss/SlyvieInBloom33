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
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-brand-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-brand-primary/30 mx-auto mb-6" />
            <h1 className="text-3xl font-serif text-brand-primary mb-4">
              Your cart is empty
            </h1>
            <p className="text-brand-primary/70 mb-8">
              Start shopping to add items to your cart
            </p>
            <Button
              asChild
              className="bg-brand-primary hover:bg-brand-dark text-brand-cream"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif text-brand-primary mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-brand-primary/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-brand-primary">
                            {item.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-brand-primary/10 text-brand-primary"
                          >
                            {item.category}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-brand-primary/70 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 border-brand-primary/20"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium text-brand-primary">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 border-brand-primary/20"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-lg font-semibold text-brand-primary">
                          {item.price * item.quantity} SAR
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-brand-primary/10 sticky top-24">
              <CardHeader>
                <CardTitle className="text-brand-primary">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-brand-primary/70">
                    Items ({totalItems})
                  </span>
                  <span className="text-brand-primary">{totalPrice} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-primary/70">Shipping</span>
                  <span className="text-brand-primary">Free</span>
                </div>
                <div className="border-t border-brand-primary/10 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span className="text-brand-primary">Total</span>
                    <span className="text-brand-primary text-lg">
                      {totalPrice} SAR
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full bg-brand-primary hover:bg-brand-dark text-brand-cream">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream"
                  asChild
                >
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
