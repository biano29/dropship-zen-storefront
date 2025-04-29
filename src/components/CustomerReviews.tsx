
import React from "react";
import ReviewStars from "./ReviewStars";

interface Review {
  id: string;
  customerName: string;
  avatar?: string;
  date: string;
  rating: number;
  comment: string;
}

interface CustomerReviewsProps {
  reviews: Review[];
  productName: string;
  averageRating: number;
  totalReviews: number;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviews,
  productName,
  averageRating,
  totalReviews,
}) => {
  return (
    <section className="py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Avaliações de Clientes</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Avaliações para {productName}</h3>
            
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold mr-2">{averageRating.toFixed(1)}</span>
              <div>
                <ReviewStars rating={averageRating} size="lg" />
                <p className="text-sm text-gray-500 mt-1">{totalReviews} avaliações</p>
              </div>
            </div>
            
            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = reviews.filter(r => Math.floor(r.rating) === star).length;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                
                return (
                  <div key={star} className="flex items-center">
                    <span className="text-sm w-8">{star} ★</span>
                    <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-shop-blue rounded-full" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm w-10 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Reviews List */}
        <div className="lg:w-2/3">
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      {review.avatar ? (
                        <img 
                          src={review.avatar} 
                          alt={review.customerName} 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-shop-blue text-white flex items-center justify-center mr-3">
                          {review.customerName.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium">{review.customerName}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <ReviewStars rating={review.rating} />
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">Ainda não há avaliações para este produto.</p>
              <p className="text-gray-500 mt-2">Seja o primeiro a avaliar!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
