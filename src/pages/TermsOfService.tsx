import LegalLayout from '@/components/LegalLayout';

const lastUpdated = 'July 18, 2026';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={lastUpdated}>
      <section>
        <h2 className="text-2xl font-bold text-foreground">1. Acceptance of these terms</h2>
        <p className="mt-3">
          These Terms of Service (“Terms”) form an agreement between you and Zeptra, an Indian-registered entity. By accessing or using Zeptra, creating an organisation, accepting an invitation, or clicking to accept these Terms, you agree to them. If you use Zeptra for an organisation, you confirm that you have authority to bind that organisation and that “you” includes it. If you do not agree, do not use the service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">2. The service</h2>
        <p className="mt-3">
          Zeptra is a cloud-based expense management software-as-a-service platform for small and medium businesses and growing teams. It helps organisations create workspaces, invite users, submit and store expense records and receipts, configure approval workflows, review expenses, and access reports or exports. We may improve, update, or change features while maintaining the core purpose of the service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">3. Accounts and organisation administration</h2>
        <p className="mt-3">
          An account may create one organisation workspace unless Zeptra agrees otherwise. You must provide accurate information, maintain the security of your credentials, and promptly update information that changes. The organisation administrator is responsible for invited users, role assignments, approval workflows, activity within the organisation, and ensuring that it has a lawful basis to provide any personal data entered into Zeptra.
        </p>
        <p className="mt-3">
          You must not share credentials, create accounts using another person’s identity, or allow unauthorised access. Notify us promptly if you suspect unauthorised use.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">4. Acceptable use</h2>
        <p className="mt-3">You will use Zeptra only lawfully and in accordance with these Terms. You must not:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>attempt unauthorised access, interfere with security controls, probe the service, or introduce malware;</li>
          <li>submit false, misleading, unlawful, infringing, or fraudulent expenses, receipts, approvals, or other content;</li>
          <li>use the service to harass others, violate privacy rights, or breach applicable employment, tax, accounting, or data-protection law;</li>
          <li>reverse engineer, scrape, copy, resell, or make the service available to third parties except as expressly permitted; or</li>
          <li>use the service in a way that could impair its availability or another customer’s use.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">5. Plans, pricing, and payment</h2>
        <p className="mt-3">
          The Free tier is limited to five users and 50 expenses per month. The Pro tier is ordinarily priced at ₹999 per month for customers in India, with USD pricing applicable elsewhere; any region-specific, promotional, per-user, or other price displayed on the applicable plan page or order flow will govern for that purchase. A 14-day free trial may be offered for eligible paid features.
        </p>
        <p className="mt-3">
          Paid plans are currently collected by bank transfer and upgrades are processed manually. You are responsible for providing accurate payment information and for any taxes, duties, or bank charges that apply. We may change future pricing or plan features by giving the notice described in these Terms; a change will not alter a price already paid for its current billing period unless required by law or agreed with you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">6. No-refund policy</h2>
        <p className="mt-3">
          Because paid plans are collected by bank transfer and upgrades are manually processed, payments are non-refundable except where a refund is required by applicable law or we expressly agree otherwise in writing. You should review your plan and pricing before making a payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">7. Intellectual property</h2>
        <p className="mt-3">
          Zeptra and its licensors own the platform, software, design, trademarks, documentation, and other intellectual property rights in the service. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to use the service for your internal business purposes during your subscription or trial. No rights are granted except those expressly stated.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">8. Your data</h2>
        <p className="mt-3">
          You and your organisation retain ownership of the expense records, receipts, organisation information, and other content you submit to Zeptra (“Customer Data”). You give Zeptra the limited rights needed to host, process, transmit, secure, back up, and display Customer Data solely to provide, maintain, support, and improve the service, comply with law, and enforce these Terms. We do not claim ownership of Customer Data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">9. Availability and support</h2>
        <p className="mt-3">
          We use reasonable efforts to keep Zeptra available and secure, but the service may be unavailable because of maintenance, updates, network failures, third-party outages, or events outside our control. The Free and trial tiers do not include a service-level agreement. For Pro customers, we aim for reasonable uptime and will use commercially reasonable efforts to address material service issues, but we do not guarantee uninterrupted or error-free operation unless a separate written agreement says otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">10. Suspension and termination</h2>
        <p className="mt-3">
          You may delete your organisation at any time, subject to any outstanding payment or legal obligations. We may suspend or terminate access immediately if we reasonably believe that you have violated these Terms, created security risk, used the service unlawfully, failed to pay amounts due, or exposed Zeptra or others to harm. On termination, your right to use the service ends. Data handling after deletion or termination is described in our Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">11. Limitation of liability</h2>
        <p className="mt-3">
          To the maximum extent permitted by applicable law, Zeptra will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenues, goodwill, data, or business opportunity, arising from or related to the service or these Terms. Our aggregate liability for all claims relating to the service will not exceed the amount you or your organisation paid to Zeptra for the service in the 12 months before the event giving rise to the claim. Nothing in these Terms excludes liability that cannot lawfully be excluded or limited.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">12. Governing law and disputes</h2>
        <p className="mt-3">
          These Terms are governed by the laws of India, without regard to conflict-of-law principles. Before starting formal proceedings, the parties will attempt in good faith to resolve a dispute by written notice and discussion for at least 30 days. If the dispute is not resolved, the courts in Mumbai, Maharashtra will have exclusive jurisdiction, subject to any non-waivable rights you have under applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">13. Changes to these Terms</h2>
        <p className="mt-3">
          We may update these Terms to reflect changes in the service, law, or our business. For a material change, we will provide at least 30 days’ notice by email to the account email address or through the service. Changes take effect on the stated date. Continuing to use Zeptra after that date means you accept the updated Terms; if you disagree, you may stop using the service and delete your organisation before the change takes effect.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">14. Contact</h2>
        <p className="mt-3">
          Questions about these Terms can be sent to <a className="font-medium text-primary hover:underline" href="mailto:legal@getzeptra.com">legal@getzeptra.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
