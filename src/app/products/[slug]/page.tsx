import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { getProductBySlug } from "@/lib/products";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <section className="min-h-[75vh] py-20 sm:py-28 lg:py-32">
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow>{product.category}</Eyebrow>

          <span className="text-muted">/</span>

          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {product.status}
          </span>
        </div>

        <h1 className="mt-8 text-6xl font-medium tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          {product.name}
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-light">
          {product.tagline}
        </p>

        <div className="mt-16 grid gap-10 border-t border-border pt-8 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Overview
            </span>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-muted-light">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.platforms.map((platform) => (
                <span
                  key={platform}
                  className="border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
