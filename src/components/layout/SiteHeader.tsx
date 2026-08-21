"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Wordmark />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNavigation.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "text-sm transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground transition-opacity duration-200 hover:opacity-60"
            >
              Contact →
            </Link>
          </div>

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-end md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 top-1 block h-px w-6 bg-foreground transition-all duration-200",
                  menuOpen && "top-2 rotate-45",
                )}
              />

              <span
                className={cn(
                  "absolute bottom-1 left-0 block h-px w-6 bg-foreground transition-all duration-200",
                  menuOpen && "bottom-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-border transition-[max-height,border-color] duration-300 md:hidden",
          menuOpen
            ? "max-h-[500px] border-t"
            : "max-h-0 border-t border-transparent",
        )}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="flex flex-col py-6">
            {mainNavigation.map((item, index) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between border-b border-border py-5",
                    "text-2xl font-medium tracking-[-0.03em]",
                    active
                      ? "text-foreground"
                      : "text-muted-light transition-colors hover:text-foreground",
                  )}
                >
                  <span>{item.label}</span>

                  <span className="font-mono text-xs text-muted">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex h-12 items-center justify-center bg-white text-sm font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Contact Cyber Heaven
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
