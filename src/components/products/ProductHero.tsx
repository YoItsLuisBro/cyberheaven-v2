import Link from "next/link";

import type { Product } from "@/types/product";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <Container>
      <section className="py-12 sm:py-16 lg:py-20">
        <Link
          href="/products"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All products
        </Link>

        <div className="mt-20 sm:mt-28">
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow>{product.category}</Eyebrow>

            <span className="text-muted">/</span>

            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {product.status}
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <h1 className="text-6xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-8xl lg:text-9xl">
              {product.name}
            </h1>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-2xl font-medium leading-9 tracking-[-0.025em]">
                {product.tagline}
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-light">
                {product.description}
              </p>

              {product.links && product.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {product.links.map((link) =>
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center justify-center bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex h-11 items-center justify-center bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-border pt-6 sm:grid-cols-3">
          <ProductMeta label="Status" value={product.status} />

          <ProductMeta label="Category" value={product.category} />

          <ProductMeta
            label="Platforms"
            value={product.platforms.join(" / ")}
          />
        </div>
      </section>
    </Container>
  );
}

function ProductMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>

      <p className="mt-2 text-sm text-muted-light">{value}</p>
    </div>
  );
}
