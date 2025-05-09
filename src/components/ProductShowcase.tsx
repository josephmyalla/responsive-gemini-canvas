
import React from "react";
import { ChevronRight } from "lucide-react";

const ProductCard = ({ 
  image, 
  name 
}: { 
  image: string; 
  name: string;
}) => {
  return (
    <div className="product-card group">
      <div className="aspect-[4/3] mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-muted py-3 px-4 text-center">
        <h3 className="text-sm tracking-wider">{name}</h3>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-16" id="products">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard
            image="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            name="Modern Oak Cabinet"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            name="Minimalist Shelf"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80"
            name="Designer Sideboard"
          />
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
