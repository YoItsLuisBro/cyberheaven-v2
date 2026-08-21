import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <section className="flex min-h-[70vh] flex-col justify-center py-24">
          <Eyebrow>Independent Software Company</Eyebrow>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl xl:text-9xl">
            Software built
            <br />
            with purpose.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-light sm:text-xl">
            Cyber Heaven builds focused software for productivity, finance,
            business, and developers.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/products">Explore Products</Button>

            <Button href="/company" variant="secondary">
              About Cyber Heaven
            </Button>
          </div>
        </section>
      </Container>

      <Section>
        <Container>
          <Eyebrow>Typography</Eyebrow>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm text-muted">Display</p>

              <p className="mt-3 text-5xl font-medium tracking-[-0.04em]">
                Cyber Heaven
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">Monospace</p>

              <p className="mt-3 font-mono text-lg">BUILD // SHIP // ITERATE</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Interface</Eyebrow>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#">Primary</Button>

            <Button href="#" variant="secondary">
              Secondary
            </Button>

            <Button href="#" variant="ghost">
              Ghost
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Surfaces</Eyebrow>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ColorCard name="Background" className="bg-background" />

            <ColorCard name="Surface" className="bg-surface" />

            <ColorCard
              name="Foreground"
              className="bg-inverse text-inverse-foreground"
            />

            <ColorCard name="Muted" className="bg-muted text-background" />
          </div>
        </Container>
      </Section>
    </main>
  );
}

function ColorCard({ name, className }: { name: string; className: string }) {
  return (
    <div
      className={`flex h-36 items-end border border-border p-5 ${className}`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em]">
        {name}
      </span>
    </div>
  );
}
