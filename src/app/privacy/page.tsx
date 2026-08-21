import type { Metadata } from "next";

import { company } from "@/data/company";

import { LegalPage } from "@/components/legal/LegalPage";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy",

  description: "Privacy Policy for the Cyber Heaven website.",

  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal // Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Cyber Heaven LLC handles information when you visit cyberheaven.app or contact us through the website."
      lastUpdated="August 21, 2026"
    >
      <LegalSection number="01" title="Scope" id="scope">
        <p>
          This Privacy Policy applies to the Cyber Heaven company website
          located at cyberheaven.app.
        </p>

        <p>
          Cyber Heaven products may have separate privacy policies when their
          features, platforms, or data practices differ from those of this
          website.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Information We Handle" id="information">
        <p>
          Cyber Heaven does not currently require accounts, registrations, or
          payment information to use this website.
        </p>

        <p>
          If you contact Cyber Heaven by email, we may receive information that
          you voluntarily provide, including your name, email address, message
          contents, attachments, and other information included in your
          communication.
        </p>

        <p>
          Our hosting and infrastructure providers may automatically process
          technical information necessary to deliver, operate, secure, and
          diagnose the website. This may include information such as:
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>IP address</li>
          <li>Browser or device information</li>
          <li>Requested pages and URLs</li>
          <li>Request timestamps</li>
          <li>Referring pages</li>
          <li>Server and diagnostic logs</li>
          <li>Approximate location derived from an IP address</li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="How Information Is Used" id="use">
        <p>Information associated with this website may be used to:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Operate and maintain the website.</li>
          <li>Respond to questions, feedback, and support requests.</li>
          <li>Protect the website against abuse or security threats.</li>
          <li>Diagnose technical problems.</li>
          <li>Improve Cyber Heaven products and services.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection number="04" title="Cookies & Analytics" id="cookies">
        <p>
          Cyber Heaven does not currently use this website for behavioral
          advertising or third-party advertising tracking.
        </p>

        <p>
          The website may rely on technical infrastructure, security mechanisms,
          or hosting services that process request and device information as
          necessary to provide the site.
        </p>

        <p>
          If Cyber Heaven introduces additional analytics, advertising
          technologies, or other tracking technologies that materially change
          these practices, this Privacy Policy will be updated as appropriate.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Service Providers" id="providers">
        <p>
          Cyber Heaven may rely on third-party service providers to operate the
          website and communicate with visitors.
        </p>

        <p>
          The website is currently hosted using Vercel. Hosting providers may
          process technical information associated with requests made to the
          website as part of providing infrastructure, security, diagnostics,
          and related services.
        </p>

        <p>
          Email communications may also be processed by the email providers used
          by Cyber Heaven and by the sender.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Disclosure" id="disclosure">
        <p>
          Cyber Heaven may disclose information to service providers when
          reasonably necessary to operate the website or conduct business.
        </p>

        <p>
          Information may also be disclosed when Cyber Heaven reasonably
          believes disclosure is necessary to comply with applicable law, legal
          process, enforce agreements, protect rights or property, investigate
          abuse, or protect the security of Cyber Heaven, its products, or
          others.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Data Retention" id="retention">
        <p>
          Cyber Heaven retains information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy, including
          responding to communications, maintaining business records, resolving
          disputes, protecting the website, and satisfying legal obligations.
        </p>

        <p>
          Technical logs maintained by infrastructure providers may be subject
          to those providers&apos; own retention periods and configuration
          settings.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Security" id="security">
        <p>
          Cyber Heaven takes reasonable steps intended to protect information
          associated with the website. However, no method of transmission,
          storage, or internet-based system can be guaranteed to be completely
          secure.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Your Privacy Rights" id="rights">
        <p>
          Depending on where you live, applicable law may provide rights
          relating to personal information, including rights to request access,
          correction, deletion, or other actions.
        </p>

        <p>
          You may contact Cyber Heaven regarding a privacy request at{" "}
          <a
            href={`mailto:${company.email}`}
            className="border-b border-border text-foreground transition-colors hover:border-foreground"
          >
            {company.email}
          </a>
          .
        </p>

        <p>
          Cyber Heaven may need to verify a request before taking action when
          verification is appropriate or legally required.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Children" id="children">
        <p>
          The Cyber Heaven company website is not directed to children under 13,
          and Cyber Heaven does not knowingly use this website to solicit
          personal information from children under 13.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Changes" id="changes">
        <p>
          Cyber Heaven may update this Privacy Policy when its website,
          products, service providers, or legal obligations change.
        </p>

        <p>
          The date shown at the top of this page identifies when this Privacy
          Policy was most recently updated.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Contact" id="contact">
        <p>
          Questions about this Privacy Policy or Cyber Heaven&apos;s privacy
          practices may be sent to:
        </p>

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
