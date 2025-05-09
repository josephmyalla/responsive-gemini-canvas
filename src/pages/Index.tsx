
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturedProduct from "@/components/FeaturedProduct";
import BottomGallery from "@/components/BottomGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <FeaturedProduct />
      <BottomGallery />
      <Footer />
    </div>
  );
};

export default Index;
