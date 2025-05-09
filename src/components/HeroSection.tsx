
import React from "react";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24" id="home">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Left Column - Text */}
          <div className="lg:col-span-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">Furniture</h1>
            <h2 className="text-xl font-playfair mb-4">Modern Living Solutions</h2>
            
            <p className="text-sm text-muted-foreground mb-8">
              Discover our collection of handcrafted, sustainable furniture designed for modern living spaces. Each piece is carefully crafted with attention to detail, ensuring both aesthetic appeal and functional durability for your home.
            </p>
            
            <button className="btn-primary">Explore Collection</button>
            
            <div className="mt-16">
              <h3 className="mb-4 text-sm uppercase tracking-wider">Available Finishes</h3>
              
              <div className="flex items-center space-x-4">
                <button className="w-7 h-7 rounded-full border border-muted/50 flex items-center justify-center">
                  <span className="sr-only">Select white</span>
                  <div className="w-3 h-3 rounded-full bg-foreground"></div>
                </button>
                <button className="w-7 h-7 rounded-full border border-muted/50 flex items-center justify-center">
                  <span className="sr-only">Select black</span>
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </button>
                <button className="w-7 h-7 rounded-full border border-muted/50 flex items-center justify-center">
                  <span className="sr-only">Select wood</span>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </button>
                <span className="text-xs border border-muted/50 px-2 py-1">$80</span>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Text */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Heritage</h2>
            <h3 className="text-xl font-playfair mb-4">Crafted Quality</h3>
            
            <p className="text-sm text-muted-foreground mb-6">
              We combine traditional craftsmanship with modern design principles to create timeless pieces.
            </p>
            
            <p className="text-sm text-muted-foreground mb-6">
              Each item is made from sustainably sourced materials, ensuring both environmental responsibility and lasting quality for generations to come.
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase">Rating</span>
              <div className="flex">
                {"★★★★☆".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Modern white cabinet with wooden legs" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
