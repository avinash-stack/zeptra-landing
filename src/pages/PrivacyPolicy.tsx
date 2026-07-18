import LegalLayout from '@/components/LegalLayout';

const lastUpdated = 'July 18, 2026';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={lastUpdated}>
      <section>
        <h2 className="text-2xl font-bold text-foreground">1. Introduction and who we are</h2>
        <p className="mt-3">
          Zeptra is an Indian-registered entity that provides cloud-based expense management software for businesses and their teams. This Privacy Policy explains how Zeptra collects, uses, stores, shares, and protects personal data when you visit getzeptra.com, create or use a Zeptra workspace, or otherwise interact with us. In this policy, “Zeptra”, “we”, “us”, and “our” mean Zeptra; “you” means a visitor, account holder, invited user, or other individual whose data we process.
        </p>
        <p className="mt-3">
          We design our practices to support the Information Technology Act, 2000 and the Information Technology (Amendment) Act, 2008, the Digital Personal Data Protection Act, 2023 (DPDP Act), and, where applicable, the EU General Data Protection Regulation (GDPR). This policy does not reduce any rights that applicable law gives you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">2. Personal data we collect</h2>
        <p className="mt-3">The data we collect depends on how you use Zeptra. It can include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Account and contact data:</strong> your name, work email address, organisation name, role, and authentication identifiers.</li>
          <li><strong className="text-foreground">Organisation data:</strong> workspace settings, team membership, approval relationships, expense categories, currencies, and other information an administrator configures.</li>
          <li><strong className="text-foreground">Expense data:</strong> expense descriptions, amounts, dates, merchants, categories, currencies, approval decisions, comments, and receipt images or files that you submit or that your organisation submits on your behalf.</li>
          <li><strong className="text-foreground">Technical and usage data:</strong> IP address, device and browser information, log data, pages or features used, timestamps, and security events.</li>
          <li><strong className="text-foreground">Support and communications data:</strong> messages, emails, and records of requests you send to us.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">3. How we collect data</h2>
        <p className="mt-3">
          We collect information directly when you sign up, create an organisation, accept an invitation, submit an expense or receipt, approve an expense, change workspace settings, contact support, or otherwise use the service. Organisation administrators and other authorised users may enter information about you when inviting you or processing an expense. We also receive limited technical data automatically through your browser and our infrastructure.
        </p>
        <p className="mt-3">
          Authentication is provided through Supabase Auth. Supabase receives the information needed to create, secure, and manage your sign-in session; Zeptra does not receive or store plaintext passwords.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">4. Why we use personal data</h2>
        <p className="mt-3">We process personal data to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>create and administer accounts, organisations, roles, and access permissions;</li>
          <li>record, route, review, approve, report on, and export expenses;</li>
          <li>send invitations, transactional emails, approval notices, service messages, and support responses;</li>
          <li>provide billing and plan administration, including manual upgrades and payment records where applicable;</li>
          <li>protect the service, investigate abuse, enforce our terms, and improve reliability and usability; and</li>
          <li>meet legal, accounting, audit, and regulatory obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">5. Legal bases for processing</h2>
        <p className="mt-3">
          Where the GDPR applies, we process data as necessary to perform our contract with you or your organisation, to pursue legitimate interests such as maintaining secure and reliable service operations, to comply with legal obligations, and—with your permission—for consent-based activities. Where we rely on consent, you may withdraw it, although this will not affect processing already carried out lawfully.
        </p>
        <p className="mt-3">
          Under the DPDP Act, we process digital personal data for the specified lawful purpose for which consent is given, or for another legitimate use permitted by that Act. We provide relevant notices at collection points and seek consent where required.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">6. Storage and security</h2>
        <p className="mt-3">
          Zeptra uses Supabase services hosted on Amazon Web Services (AWS) to support application data and authentication. Data is encrypted in transit and at rest using the safeguards offered by our providers. We use role-based access controls, Supabase Row Level Security (RLS) policies, least-privilege practices, monitoring, and organisational controls intended to limit access to authorised people and systems. Passwords are managed through Supabase Auth and are not stored by Zeptra in plaintext.
        </p>
        <p className="mt-3">
          No online service can guarantee absolute security. You must keep your credentials confidential and promptly notify us if you believe your account has been compromised.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">7. Data retention</h2>
        <p className="mt-3">
          We retain account, organisation, and expense data for as long as an account or organisation remains active and as needed to provide the service. When an organisation is deleted, we begin a deletion process and purge its production data within 30 days, unless retention is required by law, to resolve a dispute, prevent fraud, or enforce an agreement. In those limited cases, we retain only what is necessary and delete it when the reason for retention ends.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">8. Service providers and data sharing</h2>
        <p className="mt-3">
          We use carefully selected service providers that process data on our behalf: Supabase for authentication and database services, Resend for transactional email, Cloudflare for security and network delivery, and Vercel for hosting and deployment. These providers may process limited data as needed to provide their services under their applicable terms and safeguards.
        </p>
        <p className="mt-3">
          We do not sell personal data or use it for behavioural advertising. We may disclose data when required by law, to protect rights or safety, in connection with a corporate transaction, or with your or your organisation’s direction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">9. Your rights and choices</h2>
        <p className="mt-3">
          Subject to applicable law, you may request access to, correction of, or deletion of your personal data. If the GDPR applies, you may also have rights to data portability, restriction or objection to certain processing, withdrawal of consent, and the right to lodge a complaint with a supervisory authority. Under the DPDP Act, you may seek a summary of your data and processing activities, correction, completion, updating, erasure, and grievance redressal.
        </p>
        <p className="mt-3">
          Workspace data is often controlled by the organisation that invited or employs you. We may ask you to contact that organisation first, or we may forward your request to it, where it is the relevant data controller or Data Fiduciary. To exercise a right, contact us at <a className="font-medium text-primary hover:underline" href="mailto:privacy@getzeptra.com">privacy@getzeptra.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">10. Cookies</h2>
        <p className="mt-3">
          Zeptra uses only the cookies and similar storage needed to operate secure sessions and core service functionality. We do not use advertising cookies or third-party tracking cookies for behavioural profiling. You can control cookies through your browser, but disabling essential cookies may prevent you from signing in or using parts of the service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">11. Children’s data</h2>
        <p className="mt-3">
          Zeptra is a business service and is not directed to anyone under 18 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us data, please contact us so that we can take appropriate action.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">12. Grievance Officer</h2>
        <p className="mt-3">
          For matters under applicable Indian law, including the Information Technology Act and related rules, you may contact Zeptra’s Grievance Officer at <a className="font-medium text-primary hover:underline" href="mailto:grievance@getzeptra.com">grievance@getzeptra.com</a>. Please include enough detail for us to identify and address your concern.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">13. Contact and changes to this policy</h2>
        <p className="mt-3">
          For general privacy questions, contact <a className="font-medium text-primary hover:underline" href="mailto:privacy@getzeptra.com">privacy@getzeptra.com</a>. We may update this policy when our practices or legal obligations change. We will post the revised policy here and update the “Last updated” date.
        </p>
      </section>
    </LegalLayout>
  );
}
