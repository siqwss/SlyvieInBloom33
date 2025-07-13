import React from "react";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-cream py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-serif text-brand-primary mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-brand-primary/70 mb-8 max-w-2xl mx-auto">
          Get in touch with us for custom orders, questions, or just to say
          hello!
        </p>
        <Button
          className="bg-brand-primary hover:bg-brand-dark text-brand-cream"
          onClick={() => window.history.back()}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
