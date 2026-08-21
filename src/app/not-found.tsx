import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <Container>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <Eyebrow>404 // Not Found</Eyebrow>

        <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          Nothing here.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-light">
          The page you&apos;re looking for doesn&apos;t exist, may have moved,
          or is not longer available.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Back to Cyber Heaven
          </Link>

          <Link
            href="/products"
            className="inline-flex h-11 items-center text-sm text-muted-light transition-colors hover:text-foreground"
          >
            Explore Products →
          </Link>
        </div>
      </section>
    </Container>
  );
}
