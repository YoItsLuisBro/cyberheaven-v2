import type { Metadata } from "next";

import { ContactCta } from "@/components/contact/ContactCta";
import { ContactEmail } from "@/components/contact/ContactEmail";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactReasons } from "@/components/contact/ContactReasons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cyber Heaven for product questions, feedback, support, partnerships, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactReasons />
      <ContactEmail />
      <ContactCta />
    </>
  );
}
