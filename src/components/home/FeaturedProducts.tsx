import Link from "next/link";

import { getFeaturedProducts } from "@/lib/products";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductCard } from "@/components/products/ProductCard";
import { Section } from "@/components/ui/Section";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>01 // Products</Eyebrow>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Built to be useful.
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm text-muted-light transition-colors hover:text-foreground"
          >
            View all products →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
