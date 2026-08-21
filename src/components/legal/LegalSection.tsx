type LegalSectionProps = {
  number: string;
  title: string;
  id?: string;
  children: React.ReactNode;
};

export function LegalSection({
  number,
  title,
  id,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="grid gap-8 border-b border-border py-12 sm:py-16 lg:grid-cols-[220px_1fr] lg:py-20"
    >
      <div>
        <span className="font-mono text-xs text-muted">{number}</span>

        <h2 className="mt-3 text-xl font-medium tracking-[-0.025em]">
          {title}
        </h2>
      </div>

      <div className="max-w-3xl space-y-5 text-base leading-7 text-muted-light">
        {children}
      </div>
    </section>
  );
}
