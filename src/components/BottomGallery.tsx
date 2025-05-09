
import React from "react";

const BottomGallery = () => {
  return (
    <section className="py-16 bg-secondary" id="gallery">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Wooden bookshelf cabinet" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Modern white and wood cabinet" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomGallery;
