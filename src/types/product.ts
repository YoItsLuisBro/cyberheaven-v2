export type ProductCategory =
  | "Finance"
  | "Productivity"
  | "Business"
  | "Developer Tools";

export type ProductStatus = "Available" | "In Development" | "Planned";

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;

  category: ProductCategory;
  status: ProductStatus;

  platforms: string[];

  featured: boolean;

  features: ProductFeature[];

  links?: ProductLink[];
};
