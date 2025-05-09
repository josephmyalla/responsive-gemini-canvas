
import React from "react";
import { ChevronRight } from "lucide-react";

const FeaturedProduct = () => {
  return (
    <section className="py-16 bg-secondary" id="featured">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Product Image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" 
                  alt="Featured cabinet design" 
                  className="w-full h-auto object-cover mb-4"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" 
                  alt="Wooden shelving unit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" 
                  alt="Modern sideboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Featured Product Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Brunswick</h2>
            <h3 className="text-xl font-playfair mb-6">Mid-Century Display Cabinet</h3>
            
            <p className="text-sm text-muted-foreground mb-6">
              The Brunswick display cabinet combines form and function with its elegant design and practical storage solutions. Featuring solid oak construction with a natural finish, this piece showcases both your items and exceptional craftsmanship.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              With adjustable shelving and soft-close doors, this versatile cabinet works beautifully in living rooms, dining areas, or as a statement piece in any space. The contrasting metal hardware adds a contemporary touch to its timeless design.
            </p>
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center text-xs">
                <span>Oak</span>
                <span className="mx-2 text-muted-foreground">/</span>
                <span>Hand Finished</span>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary">View Details</button>
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
