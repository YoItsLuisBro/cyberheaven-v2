import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const areas = [
  {
    number: "01",
    name: "Productivity",
    description:
      "Software that removes friction and helps people focus on the work that matters.",
  },
  {
    number: "02",
    name: "Finance",
    description:
      "Clear financial tools designed around understanding rather than complexity.",
  },
  {
    number: "03",
    name: "Business",
    description:
      "Practical software for real operational problems and everyday workflows.",
  },
  {
    number: "04",
    name: "Developer Tools",
    description:
      "Tools that make software development, learning, and experimentation easier.",
  },
];

export function BuildAreas() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>02 // What We Build</Eyebrow>

            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              Focused software.
              <br />
              No filler.
            </h2>
          </div>

          <div className="border-t border-border">
            {areas.map((area) => (
              <div
                key={area.number}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[60px_1fr_1.5fr] sm:items-start"
              >
                <span className="font-mono text-xs text-muted">
                  {area.number}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {area.name}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
