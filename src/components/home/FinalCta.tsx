import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FinalCta() {
  return (
    <section className="border-t border-border py-24 sm:py-32 lg:py-40">
      <Container>
        <Eyebrow>05 // Cyber Heaven</Eyebrow>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            See what
            <br />
            we&apos;re building.
          </h2>

          <Button href="/products">Explore Products</Button>
        </div>
      </Container>
    </section>
  );
}
