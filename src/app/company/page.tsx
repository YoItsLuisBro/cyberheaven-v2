import type { Metadata } from "next";

import { CompanyAbout } from "@/components/company/CompanyAbout";
import { CompanyCta } from "@/components/company/CompanyCta";
import { CompanyFocus } from "@/components/company/CompanyFocus";
import { CompanyHero } from "@/components/company/CompanyHero";
import { CompanyPrinciples } from "@/components/company/CompanyPrinciples";

export const metadata: Metadata = {
  title: "Company",

  description:
    "Learn more about Cyber Heaven and how we approach building focused software products.",

  alternates: {
    canonical: "/company",
  },

  openGraph: {
    title: "Company | Cyber Heaven",
    description:
      "Learn more about Cyber Heaven and how we approach building focused software products.",
    url: "/company",
  },
};

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <CompanyAbout />
      <CompanyFocus />
      <CompanyPrinciples />
      <CompanyCta />
    </>
  );
}
