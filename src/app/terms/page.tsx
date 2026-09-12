import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to using the Surge AI website and engaging our services.",
  alternates: { canonical: "/terms/" },
};

// TODO: have this reviewed by a legal professional for your jurisdiction before launch.
export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="12 September 2026">
      <p>
        These terms govern your use of {site.url} and set out the general basis on which {site.name} provides services. Specific
        projects are governed by a written proposal or agreement, which takes precedence over these terms where they differ.
      </p>

      <h2>Use of the website</h2>
      <p>
        You may browse and use this website for lawful purposes. You must not attempt to gain unauthorised access to any part of
        it, introduce malicious code, or use automated tools to scrape content beyond what search engines ordinarily do.
      </p>

      <h2>Content and intellectual property</h2>
      <p>
        All content on this website, including text, design, graphics and code, belongs to {site.name} or its licensors. Client
        names, logos and project descriptions are shown with permission or as factual references and remain the property of their
        owners.
      </p>

      <h2>Enquiries, audits and proposals</h2>
      <ul>
        <li>Free audits and initial calls are provided without obligation on either side.</li>
        <li>A proposal becomes binding only when accepted in writing and, where applicable, an initial payment has been received.</li>
        <li>Prices, timelines and scope are those stated in the accepted proposal.</li>
      </ul>

      <h2>Services</h2>
      <ul>
        <li>We deliver services with reasonable skill and care and within the agreed timeline, subject to timely input from you.</li>
        <li>Delays caused by late feedback, content or approvals may extend the timeline accordingly.</li>
        <li>On full payment, you own the deliverables created for you, excluding third-party materials and our pre-existing tools.</li>
        <li>We may reference completed work in our portfolio unless you ask us not to in writing.</li>
      </ul>

      <h2>Payments</h2>
      <p>
        Invoices are payable within the period stated on them. We may pause work on overdue accounts. Third-party costs such as
        hosting, domains, software subscriptions and advertising spend are payable by you unless stated otherwise.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for indirect or consequential loss, and our total
        liability for any project is limited to the fees paid for that project. Nothing in these terms limits liability that cannot
        be limited by law.
      </p>

      <h2>Third-party links and services</h2>
      <p>
        The website may link to or embed third-party services such as booking, messaging and review platforms. Their terms and
        privacy policies apply to your use of those services.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the website after changes means you accept the updated terms.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">{site.email}</a>.
      </p>
    </LegalPage>
  );
}
