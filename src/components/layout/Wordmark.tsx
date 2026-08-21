import Link from "next/link";

export function Wordmark() {
  return (
    <Link
      href="/"
      aria-label="Cyber Heaven home"
      className="inline-flex items-center gap-2"
    >
      <span className="text-sm font-semibold tracking-[-0.02em]">
        CYBER HEAVEN
      </span>
    </Link>
  );
}
