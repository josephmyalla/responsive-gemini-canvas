
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Bourping</h2>
            <h3 className="text-xl font-playfair mb-6">20 Lcar Focean Diatnt</h3>
            
            <p className="text-sm text-muted-foreground mb-6">
              Funum ipsiem soner att ettu spat, consteadorteur adipiesteing elitt. Sed die hesto-
              vetsima ef blora duos vostema huaonis. Fasa lum eet verilis veniam secetate adalata
              comod slitopintora mestres spaedituic epral artisus aodesrava adcian Sed 
              talgan.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              Veram ipsem fatur att sona faspt, vsan sota ad ompal fruetna. Apid heit etuma
              cilafr gates elitcom vel fasptnl in vellats. Faisuccea a pentusa vain ed esara
              otrtes Id seates est esat s co vied ca cpaotd sa Ha shestas ganarsptne empre vis-
              eosmseap valutes.
            </p>
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center text-xs">
                <span>Letn</span>
                <span className="mx-2 text-muted-foreground">/</span>
                <span>Patd Eaoimting</span>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary">Cman Shmged lae</button>
                <button className="btn-primary">Nixan cotaparlitre</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
