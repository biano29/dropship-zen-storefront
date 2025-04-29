
import React from "react";

interface ReviewStarsProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showRating?: boolean;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ 
  rating, 
  size = "md", 
  showRating = false 
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  const starSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
  };
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className={`text-yellow-400 ${starSize[size]}`}>★</span>
        ))}
        
        {/* Half star */}
        {halfStar && (
          <span className={`text-yellow-400 ${starSize[size]}`} style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', overflow: 'hidden', width: '50%' }}>★</span>
            <span style={{ color: '#d1d5db' }}>★</span>
          </span>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className={`text-gray-300 ${starSize[size]}`}>★</span>
        ))}
      </div>
      
      {showRating && <span className="ml-1 text-gray-600 text-sm">{rating.toFixed(1)}</span>}
    </div>
  );
};

export default ReviewStars;
