import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Surge AI collects, uses and protects your personal data.",
  alternates: { canonical: "/privacy/" },
};

// TODO: have this reviewed by a legal professional for your jurisdiction before launch.
export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="12 September 2026">
      <p>
        This policy explains what personal data {site.name} (&quot;we&quot;, &quot;us&quot;) collects when you use {site.url}, why we
        collect it and how you can exercise your rights.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Information you give us</strong> when you submit a contact, audit or newsletter form: name, email address, company,
          website and the details of your enquiry.
        </li>
        <li>
          <strong>Usage data</strong> collected by analytics (if enabled), such as pages visited, approximate location, device and
          browser type. This data is aggregated and not used to identify you.
        </li>
        <li>
          <strong>Communications</strong> you send us by email or WhatsApp.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and prepare proposals or audits you request.</li>
        <li>To send the newsletter you subscribed to. You can unsubscribe at any time using the link in every email.</li>
        <li>To understand how the website is used so we can improve it.</li>
        <li>To meet legal obligations and protect our rights.</li>
      </ul>

      <h2>Legal basis</h2>
      <p>
        We process enquiry data to take steps at your request before entering a contract, newsletter data on the basis of your
        consent, and analytics data on the basis of our legitimate interest in improving the website.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use trusted service providers to run the website and deliver forms and email, including form delivery, calendar booking,
        messaging and analytics providers. They process data on our instructions only. We never sell your personal data.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiry data is kept for as long as needed to handle your request and for up to two years afterwards, unless a project
        follows. Newsletter data is kept until you unsubscribe. Analytics data is retained per the provider&apos;s default settings.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal data,
        to object to processing, and to data portability. To exercise any of these rights, email{" "}
        <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
          {site.email}
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>
        The website uses only strictly necessary cookies and, where enabled, analytics cookies. You can block cookies in your
        browser settings without affecting the core function of the site.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">{site.email}</a>.
      </p>
    </LegalPage>
  );
}
