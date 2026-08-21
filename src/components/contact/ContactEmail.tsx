import { company } from "@/data/company";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function ContactEmail() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <Eyebrow>02 // Email</Eyebrow>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-[1.2] tracking-[-0.035em] sm:text-3xl lg:text-4xl">
              The simplest way to reach Cyber Heaven is by email.
            </p>

            <a
              href={`mailto:${company.email}`}
              className="mt-10 inline-flex border-b border-border pb-2 text-2xl font-medium tracking-[-0.035em] transition-colors hover:border-foreground sm:text-3xl"
            >
              {company.email}
            </a>

            <p className="mt-5 max-w-lg text-sm leading-6 text-muted">
              Include the product name in your message when your question
              relates to a specific Cyber Heaven product.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
