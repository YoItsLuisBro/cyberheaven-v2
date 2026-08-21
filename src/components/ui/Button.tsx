import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-muted-light",

  secondary:
    "border border-border bg-transparent text-foreground hover:border-border-hover hover:bg-surface",

  ghost: "bg-transparent text-muted-light hover:text-foreground",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center px-5",
        "text-sm font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-foreground",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
