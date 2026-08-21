import type { Metadata } from "next";

import { products } from "@/data/products";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Products",

  description: "Explore software products built by Cyber Heaven.",

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title: "Products | Cyber Heaven",
    description: "Explore software products built by Cyber Heaven.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Container>
        <section className="py-20 sm:py-28 lg:py-32">
          <Eyebrow>Cyber Heaven // Products</Eyebrow>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Software built
              <br />
              to be useful.
            </h1>

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-muted-light">
                Focused products for productivity, finance, business, and
                developer-built without unnecessary complexity.
              </p>
            </div>
          </div>
        </section>
      </Container>

      <section className="border-t border-border py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="flex items-center justify-between">
            <Eyebrow>All Products</Eyebrow>

            <span className="font-mono text-xs text-muted">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
