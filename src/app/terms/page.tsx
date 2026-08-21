import type { Metadata } from "next";

import { company } from "@/data/company";

import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Use",

  description: "Terms governing use of the Cyber Heaven website.",

  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal // Terms"
      title="Terms of Use"
      intro="These Terms govern access to and use of the Cyber Heaven company website at cyberheaven.app."
      lastUpdated="August 21, 2026"
    >
      <LegalSection number="01" title="Use of the Website" id="use">
        <p>
          These Terms of Use govern your access to and use of cyberheaven.app.
        </p>

        <p>
          By accessing or using the website, you agree to comply with these
          Terms and applicable law.
        </p>

        <p>
          If you do not agree with these Terms, you should not use the website.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Cyber Heaven Products" id="products">
        <p>
          The website may contain information about software, applications,
          services, prototypes, or other products developed or planned by Cyber
          Heaven.
        </p>

        <p>
          Product descriptions, screenshots, features, release dates,
          availability, platform support, pricing, and other information may
          change as products are developed and updated.
        </p>

        <p>
          Individual Cyber Heaven products may be governed by separate terms,
          licenses, privacy policies, or other agreements.
        </p>
      </LegalSection>

      <LegalSection
        number="03"
        title="Intellectual Property"
        id="intellectual-property"
      >
        <p>
          Unless otherwise indicated, the website and its contents are owned by
          or licensed to Cyber Heaven LLC.
        </p>

        <p>
          This includes, where applicable, software, source code, product names,
          branding, logos, graphics, designs, layouts, text, images, videos,
          documentation, and other materials.
        </p>

        <p>
          You may view and use the website for lawful personal and informational
          purposes. These Terms do not transfer ownership of Cyber Heaven
          intellectual property to you.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Acceptable Use" id="acceptable-use">
        <p>
          You agree not to misuse the website or attempt to interfere with its
          normal operation.
        </p>

        <p>You may not knowingly:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            Use the website for unlawful, fraudulent, or abusive purposes.
          </li>

          <li>
            Attempt to gain unauthorized access to systems, accounts,
            infrastructure, or data.
          </li>

          <li>Introduce malware or other intentionally harmful code.</li>

          <li>
            Interfere with the availability, integrity, or security of the
            website.
          </li>

          <li>Misrepresent an affiliation with Cyber Heaven.</li>

          <li>
            Use Cyber Heaven branding in a manner that falsely suggests
            endorsement or authorization.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="05" title="Third-Party Services" id="third-parties">
        <p>
          The website may link to third-party websites, application stores,
          services, repositories, platforms, or other resources.
        </p>

        <p>
          Cyber Heaven does not control third-party services and is not
          responsible for their content, availability, security, or privacy
          practices.
        </p>

        <p>
          Your use of a third-party service is subject to the terms and policies
          provided by that third party.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Feedback" id="feedback">
        <p>
          Cyber Heaven welcomes product feedback, ideas, bug reports, and
          suggestions.
        </p>

        <p>
          Unless Cyber Heaven agrees otherwise in writing, feedback submitted
          voluntarily should not contain confidential or proprietary information
          that you expect Cyber Heaven to keep confidential.
        </p>

        <p>
          Cyber Heaven may consider and use non-confidential feedback to
          develop, improve, or modify its products and services without an
          obligation to compensate the person providing the feedback.
        </p>
      </LegalSection>

      <LegalSection number="07" title="No Warranties" id="warranties">
        <p>
          The website is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis to the fullest extent permitted by applicable
          law.
        </p>

        <p>
          Cyber Heaven does not guarantee that the website will always be
          available, uninterrupted, error-free, secure, or free from harmful
          components.
        </p>

        <p>
          Information presented on the website may contain errors or become
          outdated, particularly where it describes products that are still
          under development.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Limitation of Liability" id="liability">
        <p>
          To the fullest extent permitted by applicable law, Cyber Heaven LLC
          and its owners, employees, contractors, and affiliates will not be
          liable for indirect, incidental, special, consequential, or punitive
          damages arising from or relating to your use of, or inability to use,
          this website.
        </p>

        <p>
          Some jurisdictions do not permit certain limitations of liability, so
          some of these limitations may not apply to you.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Changes to the Website" id="changes">
        <p>
          Cyber Heaven may modify, suspend, remove, or discontinue website
          content, features, product information, or other parts of the website
          at any time.
        </p>

        <p>
          Cyber Heaven may also update these Terms. The date at the top of this
          page identifies the most recent version.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Governing Law" id="governing-law">
        <p>
          These Terms are governed by the laws of the State of Florida and
          applicable United States federal law, without regard to
          conflict-of-law principles, except where applicable law requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Contact" id="contact">
        <p>Questions regarding these Terms may be directed to:</p>

        <div>
          <p className="text-foreground">{company.name}</p>

          <p>{company.location}</p>

          <a
            href={`mailto:${company.email}`}
            className="mt-2 inline-flex border-b border-border text-foreground transition-colors hover:border-foreground"
          >
            {company.email}
          </a>
        </div>
      </LegalSection>
    </LegalPage>
  );
}
