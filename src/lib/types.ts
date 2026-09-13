export type ProductBadge = "Bestseller" | "New" | "Trending" | "20% OFF" | "15% OFF";

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  quantity: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  badge?: ProductBadge;
  image: string;
  inStock: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  available: boolean;
  image: string;
  experience: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavItem {
  href: string;
  label: string;
  icon: string;
}
