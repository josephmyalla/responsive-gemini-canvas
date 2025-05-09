
import React, { useState } from "react";
import { Menu, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center border border-muted/50 rounded-full">
              <img 
                src="/lovable-uploads/52276e52-ae94-4b0a-b05d-d79a8994703f.png" 
                alt="TDONUNDA Logo" 
                className="w-10 h-auto opacity-0"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.className = "hidden";
                  e.currentTarget.parentElement!.innerHTML = `<div class="text-2xl font-playfair text-foreground">T</div>`;
                }}
              />
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-xs tracking-wider text-muted-foreground">Casto Ora</span>
            <ChevronRight className="h-3 w-3 text-muted-foreground ml-2" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="nav-link">Miomie</a>
          <a href="#products" className="nav-link">Aagru nouses</a>
          <a href="#about" className="nav-link">Abou uit</a>
          <a href="#features" className="nav-link">Maurts</a>
          <a href="#testimonials" className="nav-link">Abouuis</a>
          <a href="#contact" className="nav-link">Cntuis</a>
          <a href="#blog" className="nav-link">Sigietus</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-20 right-0 left-0 bg-background border-b border-muted z-50 animate-fade-in py-4">
            <div className="container-custom flex flex-col space-y-4">
              <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Miomie</a>
              <a href="#products" className="nav-link" onClick={() => setIsOpen(false)}>Aagru nouses</a>
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Abou uit</a>
              <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Maurts</a>
              <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Abouuis</a>
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Cntuis</a>
              <a href="#blog" className="nav-link" onClick={() => setIsOpen(false)}>Sigietus</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
