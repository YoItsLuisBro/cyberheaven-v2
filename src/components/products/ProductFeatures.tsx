import type { Product } from "@/types/product";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

type ProductFeaturesProps = {
  product: Product;
};

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>01 // Eyebrow</Eyebrow>

            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              Focus on what matters.
            </h2>
          </div>

          <div className="border-t border-border">
            {product.features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid gap-4 border-b border-border py-8 sm:grid-cols-[60px_1fr_1.5fr]"
              >
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {feature.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
