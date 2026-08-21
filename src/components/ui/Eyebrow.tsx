import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase",
        "tracking-[0.18em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
