
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">TDONUNDA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Modern furniture for modern living spaces. Quality craftsmanship with timeless design.
            </p>
            <p className="text-xs text-muted-foreground">© 2025 TDONUNDA. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cabinets</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sideboards</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tables</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chairs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lighting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Materials</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Showrooms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trade Program</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
