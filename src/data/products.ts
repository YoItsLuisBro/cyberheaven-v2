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

    features: [
      {
        title: "Income & expenses",
        description:
          "Record money coming in and going out through a focused, straightforward workflow.",
      },
      {
        title: "Financial overview",
        description:
          "Understand your activity without being buried underneath unnecessary dashboards and complexity.",
      },
      {
        title: "Built for mobile",
        description:
          "Designed around quick interactions and information that is useful at a glance.",
      },
    ],
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

    features: [
      {
        title: "Focused sessions",
        description:
          "Run deliberate work sessions without adding unnecessary friction or visual noise.",
      },
      {
        title: "Intentional breaks",
        description:
          "Move naturally between focused work and recovery periods.",
      },
      {
        title: "Simple progress",
        description:
          "Track completed sessions and focused time without turning productivity into another job.",
      },
    ],
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

    features: [
      {
        title: "Structured capture",
        description:
          "Record field information through a consistent workflow instead of scattered notes and files.",
      },
      {
        title: "Mobile-first workflow",
        description:
          "Designed around work happening away from a traditional desk.",
      },
      {
        title: "Organized records",
        description:
          "Keep documentation easier to review, understand, and reference later.",
      },
    ],
  },
];
