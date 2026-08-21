import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-border py-20 sm:py-24 lg:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
