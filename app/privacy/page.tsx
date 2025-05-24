export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">🛡️ Privacy Policy</h1>

      <p className="text-muted-foreground mb-4">
        At <strong>LungScan AI</strong>, we value your privacy and are committed
        to protecting your personal data. This Privacy Policy explains how we
        collect, use, and safeguard your information.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          📌 What Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Name or email (when you contact us).</li>
          <li>Usage data (pages visited, time on site, etc.).</li>
          <li>Technical data (browser type, device, OS).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🔍 How We Use Your Data</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>To improve site performance and user experience.</li>
          <li>To respond to your messages or feedback.</li>
          <li>For analytics, security, and feature improvements.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🛡️ Data Protection</h2>
        <p className="text-muted-foreground">
          We use appropriate technical and organizational measures to protect
          your data and comply with data protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📋 Your Rights</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Access your personal information.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Contact us with any privacy-related concerns.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📬 Contact Us</h2>
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us
          at:
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
