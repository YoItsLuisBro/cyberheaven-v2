import { products } from "@/data/products";

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
