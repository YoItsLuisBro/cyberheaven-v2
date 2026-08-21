import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HomeHero() {
  return (
    <Container>
      <section className="flex min-h-[calc(100svh-5rem)] flex-col justify-between py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <Eyebrow>Independent Software Company</Eyebrow>

          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted sm:block">
            Florida // USA
          </span>
        </div>

        <div className="py-24 sm:py-32">
          <h1 className="max-w-6xl text-5xl font-medium leading-[0.93] tracking-[-0.055em] sm:text-7xl lg:text-8xl xl:text-[8rem]">
            Software built
            <br />
            with purpose.
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div />

            <div>
              <p className="max-w-xl text-lg leading-8 text-muted-light sm:text-xl">
                Cyber Heaven builds focused software for productivity, finance,
                business, and developers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/products">Explore Products</Button>

                <Button href="/company" variant="secondary">
                  About Cyber Heaven
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Build // Ship // Iterate
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Scroll ↓
          </span>
        </div>
      </section>
    </Container>
  );
}
