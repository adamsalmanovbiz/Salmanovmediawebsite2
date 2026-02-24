import Header from '../components/Header'

function Privacy() {
  return (
    <>
      <Header showBackLink={true} />
      <main>
        <div className="container">
          <div className="section" style={{ paddingTop: '3rem' }}>
            <h1>Privacy Policy</h1>
            <p style={{ color: 'var(--muted-gray)', marginBottom: '2rem' }}>Last updated: February 23, 2026</p>

            <h2>1. Introduction</h2>
            <p>Salmanov Media ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit salmanovmedia.com (the "Site") or use our services.</p>

            <h2>2. Information We Collect</h2>
            <p><strong>Information you provide:</strong> Name, email address, company name, and any other information you submit through our contact forms or Calendly booking.</p>
            <p><strong>Automatically collected:</strong> IP address, browser type, device information, pages visited, and referring URL through standard web analytics.</p>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and schedule meetings</li>
              <li>To provide and improve our services</li>
              <li>To send relevant communications (only if you've opted in)</li>
              <li>To analyze site usage and improve user experience</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>We use third-party services including Calendly for scheduling and Google Fonts for typography. These services may collect data according to their own privacy policies.</p>

            <h2>5. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our business, subject to confidentiality agreements.</p>

            <h2>6. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

            <h2>7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at adam@salmanovmedia.com.</p>

            <h2>8. Cookies</h2>
            <p>We may use cookies and similar technologies to improve your browsing experience. You can control cookies through your browser settings.</p>

            <h2>9. Changes</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>

            <h2>10. Contact</h2>
            <p>For questions about this Privacy Policy, contact us at: <strong>adam@salmanovmedia.com</strong></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Privacy
