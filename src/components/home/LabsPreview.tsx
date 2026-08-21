import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function LabsPreview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>03 // Cyber Heaven Labs</Eyebrow>

            <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Not every idea needs to become a product.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-muted-light">
              Labs is where we experiment with developer tools, interfaces,
              prototypes, open-source projects, and ideas that may become
              something bigger.
            </p>

            <Link
              href="/labs"
              className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium"
            >
              Explore Cyber Heaven Labs
              <span className="text-muted">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
