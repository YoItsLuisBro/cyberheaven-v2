export type ProductCategory =
  | "Finance"
  | "Productivity"
  | "Business"
  | "Developer Tools";

export type ProductStatus = "Available" | "In Development" | "Planned";

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  platforms: string[];
  featured: boolean;
};
