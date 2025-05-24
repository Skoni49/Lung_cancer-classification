export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📄 Terms & Conditions
      </h1>

      <p className="text-muted-foreground mb-4">
        Welcome to <strong>LungScan AI</strong>. By using our website or
        services, you agree to comply with and be bound by the following terms
        and conditions.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">✅ Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By accessing or using our services, you accept these terms in full. If
          you disagree with any part of these terms, please do not use our
          website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">⚙️ Use of the Service</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>You agree to use LungScan AI only for lawful purposes.</li>
          <li>
            You must not misuse our services or attempt unauthorized access.
          </li>
          <li>
            You must not reproduce, copy, or redistribute content without
            permission.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📊 Accuracy of Information
        </h2>
        <p className="text-muted-foreground">
          While we strive to provide accurate and up-to-date information,
          LungScan AI does not guarantee the completeness or reliability of any
          data presented.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔒 Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content, branding, and software on this site are the intellectual
          property of LungScan AI and protected by copyright and trademark laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📌 Limitation of Liability
        </h2>
        <p className="text-muted-foreground">
          LungScan AI is not liable for any direct, indirect, or consequential
          damages arising from the use or inability to use our website or
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📆 Modifications</h2>
        <p className="text-muted-foreground">
          We reserve the right to update or modify these terms at any time.
          Changes will be posted on this page, and your continued use of the
          site constitutes agreement to the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">📬 Contact</h2>
        <p className="text-muted-foreground">
          If you have any questions about these Terms & Conditions, please
          contact us at:
        </p>
        <a
          href="mailto:contact@lungscanai.com"
          className="text-blue-600 underline"
        >
          contact@lungscanai.com
        </a>
      </section>
    </div>
  );
}
