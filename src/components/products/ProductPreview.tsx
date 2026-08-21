import type { Product } from "@/types/product";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

type ProductPreviewProps = {
  product: Product;
};

export function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>02 // Product</Eyebrow>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              {product.name} in action.
            </h2>
          </div>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
            Preview
          </span>
        </div>

        <div className="mt-12 flex aspect-[16/10] min-h-[320px] items-center justify-center border border-border bg-surface">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {product.name}
            </p>

            <p className="mt-3 text-sm text-muted">
              Product imagery coming soon
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
