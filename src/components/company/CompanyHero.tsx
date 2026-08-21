import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CompanyHero() {
  return (
    <Container>
      <section className="py-20 sm:py-28 lg:py-32">
        <Eyebrow>Cyber Heaven // Company</Eyebrow>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Useful software,
            <br />
            thoughtfully built.
          </h1>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-xl leading-8 text-muted-light">
              Cyber Heaven is an independent software company focused on
              building clear, focused products around real problems.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Independent Software Company
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Build // Ship // Iterate
          </span>
        </div>
      </section>
    </Container>
  );
}
