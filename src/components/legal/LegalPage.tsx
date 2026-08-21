import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <>
      <Container>
        <section className="py-20 sm:py-28 lg:py-32">
          <Eyebrow>{eyebrow}</Eyebrow>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <h1 className="text-5xl font-medium tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              {title}
            </h1>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-muted-light">
                {intro}
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Cyber Heaven LLC
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Last Updated // {lastUpdated}
            </span>
          </div>
        </section>
      </Container>

      <Container>
        <div className="border-t border-border">{children}</div>
      </Container>
    </>
  );
}
