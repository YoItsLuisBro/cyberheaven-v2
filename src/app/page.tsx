import type { Metadata } from "next";
import { BuildAreas } from "@/components/home/BuildAreas";
import { CompanyStatement } from "@/components/home/CompanyStatement";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProducts />
      <BuildAreas />
      <CompanyStatement />
      <FinalCta />
    </>
  );
}
