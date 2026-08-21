import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CompanyCta() {
  return (
    <section className="border-t border-border py-24 sm:py-32 lg:py-40">
      <Container>
        <Eyebrow>04 // Contact</Eyebrow>

        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Have something
            <br />
            worth building?
          </h2>

          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-muted-light">
              Questions, partnerships, product feedback, or something else? Get
              in touch with Cyber Heaven.
            </p>

            <div className="mt-8">
              <Button href="/contact">Contact Cyber Heaven</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
