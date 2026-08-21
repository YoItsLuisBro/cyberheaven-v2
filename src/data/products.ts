import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    name: "Due.",
    slug: "due",
    tagline: "Personal finance without the clutter.",
    description:
      "A focused personal finance experience built to make income, expenses, and financial awareness simple.",
    category: "Finance",
    status: "In Development",
    platforms: ["iPhone", "iPad"],
    featured: true,
  },
  {
    name: "Shadow Buddy",
    slug: "shadow-buddy",
    tagline: "Focus without distraction.",
    description:
      "A minimal focus timer designed around deliberate work sessions, meaningful breaks, and simple progress tracking.",
    category: "Productivity",
    status: "In Development",
    platforms: ["iPhone", "iPad"],
    featured: true,
  },
  {
    name: "FieldProof",
    slug: "fieldproof",
    tagline: "Documentation built for the field.",
    description:
      "A mobile-first tool for capturing organized, reliable field documentation without unnecessary complexity.",
    category: "Business",
    status: "Planned",
    platforms: ["Android"],
    featured: true,
  },
];
