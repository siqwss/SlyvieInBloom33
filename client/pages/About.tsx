import React from "react";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-brand-cream py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-serif text-brand-primary mb-8">
          About Slyvie in bloom
        </h1>
        <p className="text-lg text-brand-primary/70 mb-8 max-w-2xl mx-auto">
          Learn about our story, our passion for crochet, and our commitment to
          creating beautiful handmade pieces.
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
