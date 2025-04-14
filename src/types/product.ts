
export type ProductCategory = 
  | "electronics"
  | "clothing"
  | "home"
  | "books"
  | "toys";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
  dateAdded: string;
  specs?: Record<string, string>;
}
