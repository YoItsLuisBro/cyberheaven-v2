import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function CompanyAbout() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <Eyebrow>01 // What We Believe</Eyebrow>

          <div>
            <p className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Good software should make something easier, clearer, faster, or
              more enjoyable.
            </p>

            <div className="mt-12 grid gap-8 text-base leading-7 text-muted-light sm:grid-cols-2">
              <p>
                Cyber Heaven focuses on products with a clear purpose. Every
                feature should earn its place, and complexity should exist only
                when it solves a meaningful problem.
              </p>

              <p>
                We care about the details that shape the entire experience: how
                quickly something loads, how an interaction feels, how clearly
                information is presented, and how easily a product can be
                understood.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
