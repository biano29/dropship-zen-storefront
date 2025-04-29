
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  link: string;
}

interface BannerProps {
  items: BannerItem[];
}

const Banner: React.FC<BannerProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate banners
  useEffect(() => {
    if (items.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!items.length) return null;

  return (
    <div className="relative overflow-hidden h-[400px] md:h-[500px] bg-gray-100">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`banner-slide absolute inset-0 flex items-center ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%), url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{item.title}</h2>
              <p className="text-lg text-gray-200 mb-6">{item.subtitle}</p>
              <Button asChild className="bg-shop-blue hover:bg-shop-light-blue text-white px-8 py-3 rounded-md text-lg font-medium">
                <Link to={item.link}>{item.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      {items.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner;
