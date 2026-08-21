import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function CompanyPage() {
  return (
    <Container>
      <section className="min-h-[60vh] py-24 sm:py-32">
        <Eyebrow>Cyber Heaven</Eyebrow>

        <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] sm:text-7xl">
          Company
        </h1>
      </section>
    </Container>
  );
}
