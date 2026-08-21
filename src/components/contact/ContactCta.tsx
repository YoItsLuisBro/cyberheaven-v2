import { company } from "@/data/company";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ContactCta() {
  return (
    <section className="border-t border-border py-24 sm:py-32 lg:py-40">
      <Container>
        <Eyebrow>03 // Start A Conversation</Eyebrow>

        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Have something
            <br />
            worth discussing?
          </h2>

          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-muted-light">
              Send us a message and tell us what&apos;s on your mind.
            </p>

            <div className="mt-8">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex h-11 items-center justify-center bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
              >
                Email Cyber Heaven
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
