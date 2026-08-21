import Link from "next/link";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex min-h-[420px] flex-col border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-hover hover:bg-surface-hover sm:p-8"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {product.category}
        </span>

        {typeof index === "number" && (
          <span className="font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="mt-auto">
        <div className="mb-6 flex flex-wrap gap-2">
          {product.platforms.map((platform) => (
            <span
              key={platform}
              className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
            >
              {platform}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
          {product.name}
        </h3>

        <p className="mt-3 text-base text-muted-light">{product.tagline}</p>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {product.status}
          </span>

          <span className="text-lg text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
