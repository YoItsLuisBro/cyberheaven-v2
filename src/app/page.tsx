import { BuildAreas } from "@/components/home/BuildAreas";
import { CompanyStatement } from "@/components/home/CompanyStatement";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { LabsPreview } from "@/components/home/LabsPreview";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProducts />
      <BuildAreas />
      <LabsPreview />
      <CompanyStatement />
      <FinalCta />
    </>
  );
}
