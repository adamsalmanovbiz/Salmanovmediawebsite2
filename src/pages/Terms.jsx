import Header from '../components/Header'

function Terms() {
  return (
    <>
      <Header showBackLink={true} />
      <main>
        <div className="container">
          <div className="section" style={{ paddingTop: '3rem' }}>
            <h1>Terms of Use</h1>
            <p style={{ color: 'var(--muted-gray)', marginBottom: '2rem' }}>Last updated: February 23, 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using salmanovmedia.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>

            <h2>2. Services</h2>
            <p>Salmanov Media provides content creation, personal brand management, and distribution services for founders, operators, and companies. Specific service terms are outlined in individual client agreements.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this Site — including text, graphics, logos, and design — is the property of Salmanov Media and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>

            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Submit false or misleading information through our forms</li>
              <li>Interfere with the proper functioning of the Site</li>
            </ul>

            <h2>5. Disclaimer</h2>
            <p>The Site and its content are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific results from our services.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Salmanov Media shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or our services.</p>

            <h2>7. Client Agreements</h2>
            <p>Engagement for services is governed by separate client agreements. These Terms of Use govern your use of the Site only.</p>

            <h2>8. Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the Site after changes constitutes acceptance of the updated terms.</p>

            <h2>9. Governing Law</h2>
            <p>These terms are governed by the laws of the State of New York, without regard to conflict of law principles.</p>

            <h2>10. Contact</h2>
            <p>For questions about these Terms, contact us at: <strong>adam@salmanovmedia.com</strong></p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Terms
