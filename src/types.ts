
// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage: number;
  image: string;
  images?: string[];
  category: string;
  stock: number;
  rating: number;
  reviewCount: number;
  slug: string;
  features?: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
}

// Order Types
export interface OrderSummary {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
