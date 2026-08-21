import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const reasons = [
  {
    number: "01",
    title: "General inquiries",
    description:
      "Questions about Cyber Heaven, the company, or what we're building.",
  },
  {
    number: "02",
    title: "Product feedback",
    description:
      "Ideas, suggestions, bug reports, or feedback about a Cyber Heaven product.",
  },
  {
    number: "03",
    title: "Partnerships",
    description:
      "Business opportunities, integrations, collaborations, or partnership ideas.",
  },
  {
    number: "04",
    title: "Support",
    description: "Questions or problems related to using one of our products.",
  },
];

export function ContactReasons() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>01 // Get In Touch</Eyebrow>

            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              What can we help with?
            </h2>
          </div>

          <div className="border-t border-border">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="grid gap-4 border-b border-border py-8 sm:grid-cols-[60px_1fr_1.5fr]"
              >
                <span className="font-mono text-xs text-muted">
                  {reason.number}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {reason.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
