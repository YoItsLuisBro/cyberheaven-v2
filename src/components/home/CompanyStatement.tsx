import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function CompanyStatement() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <Eyebrow>04 // Company</Eyebrow>

          <div>
            <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Cyber Heaven is an independent software company focused on turning
              useful ideas into focused, thoughtfully designed products.
            </p>

            <Link
              href="/company"
              className="mt-10 inline-flex items-center gap-3 text-sm font-medium"
            >
              More about Cyber Heaven
              <span className="text-muted">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
