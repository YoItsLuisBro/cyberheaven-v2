import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { getProductBySlug } from "@/lib/products";

import { ProductCta } from "@/components/products/ProductCta";
import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductPreview } from "@/components/products/ProductPreview";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

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
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductPreview product={product} />
      <ProductCta product={product} />
    </>
  );
}
