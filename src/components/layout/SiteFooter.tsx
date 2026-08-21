import Link from "next/link";

import { legalNavigation, mainNavigation } from "@/data/navigation";
import { company } from "@/data/company";

import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="grid gap-16 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div className="lg:col-span-2">
            <Wordmark />

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Focused software for productivity, finance, business, and
              developers.
            </p>

            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-flex text-sm text-muted-light transition-colors hover:text-foreground"
            >
              {company.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Explore
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-light transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="text-sm text-muted-light transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Legal
            </p>

            <nav
              aria-label="Legal navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {legalNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-light transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Build // Ship // Iterate
          </p>
        </div>
      </Container>
    </footer>
  );
}
