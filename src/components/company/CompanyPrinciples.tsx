import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const principles = [
  {
    number: "01",
    title: "Purpose before features",
    description:
      "Products should solve a clear problem before they accumulate features.",
  },
  {
    number: "02",
    title: "Clarity over complexity",
    description:
      "The interface should help people understand what to do next without requiring explanation.",
  },
  {
    number: "03",
    title: "Details matter",
    description:
      "Typography, spacing, motion, performance, and interaction all contribute to whether software feels good to use.",
  },
  {
    number: "04",
    title: "Ship and improve",
    description:
      "Useful software gets better through real use, iteration, and continuous refinement.",
  },
];

export function CompanyPrinciples() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>03 // Principles</Eyebrow>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              How we approach software.
            </h2>
          </div>

          <span className="font-mono text-xs text-muted">04</span>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="min-h-[280px] bg-background p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-muted">
                {principle.number}
              </span>

              <div className="mt-20">
                <h3 className="text-2xl font-medium tracking-[-0.035em]">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
