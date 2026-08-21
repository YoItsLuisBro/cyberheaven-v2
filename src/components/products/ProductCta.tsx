import Link from "next/link";

import type { Product } from "@/types/product";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ProductCtaProps = {
  product: Product;
};

export function ProductCta({ product }: ProductCtaProps) {
  const hasLinks = product.links && product.links.length > 0;

  return (
    <section className="border-t border-border py-24 sm:py-32 lg:py-40">
      <Container>
        <Eyebrow>03 // {product.name}</Eyebrow>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {hasLinks ? "Ready when you are." : "Currently in the works."}
          </h2>

          <div className="flex flex-col justify-end">
            {!hasLinks && (
              <p className="max-w-md text-base leading-7 text-muted-light">
                {product.name} is currently {product.status.toLowerCase()}. More
                information will be added as the product gets closer to release.
              </p>
            )}

            <Link
              href="/products"
              className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium"
            >
              Explore all products
              <span className="text-muted">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
