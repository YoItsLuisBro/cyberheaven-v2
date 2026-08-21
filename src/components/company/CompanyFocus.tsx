import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const focusAreas = [
  {
    number: "01",
    title: "Personal software",
    description:
      "Tools that help people better manage their time, attention, money, and everyday responsibilities.",
  },
  {
    number: "02",
    title: "Business software",
    description:
      "Focused products that improve real operational workflows without adding unnecessary process.",
  },
  {
    number: "03",
    title: "Developer software",
    description:
      "Tools for building, learning, understanding, and working with software more effectively.",
  },
];

export function CompanyFocus() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>02 // What We Build</Eyebrow>

          <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            Software with a reason to exist.
          </h2>
        </div>

        <div className="border-t border-border">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="grid gap-4 border-b border-border py-8 sm:grid-cols-[60px_1fr_1.5fr]"
            >
              <span className="font-mono text-xs text-muted">
                {area.number}
              </span>

              <span className="text-xl font-medium tracking-[-0.025em]">
                {area.title}
              </span>

              <p className="max-w-xl text-sm leading-6 text-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
