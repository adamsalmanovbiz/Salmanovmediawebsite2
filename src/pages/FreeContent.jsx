import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function FreeContent() {
  return (
    <>
      <header style={{ borderBottom: '1px solid var(--gray)', padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <Link to="/" className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">SALMANOV</span>
            <span className="logo-bracket">/&gt;</span>
          </Link>
        </div>
      </header>

      <main>
        <div className="container" style={{ maxWidth: '700px' }}>
          {/* Hero */}
          <section className="hero">
            <span className="badge">Limited Offer</span>
            <h1>Get a Free Content Piece</h1>
            <p className="hero-subtitle">We handle everything: brainstorming, scripting, filming, editing, strategy. Just give us your idea and test how well we execute.</p>
          </section>

          {/* Value Props */}
          <div className="value-props">
            <div className="value-item">
              <div className="value-icon">✓</div>
              <div className="value-text">
                <strong>We Handle Everything</strong>
                <p>Brainstorming, scripting, filming, editing, and strategy. You just give us the idea.</p>
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">✓</div>
              <div className="value-text">
                <strong>Test Our Execution</strong>
                <p>See firsthand how we work, how fast we move, and the quality we deliver.</p>
              </div>
            </div>

            <div className="value-item">
              <div className="value-icon">✓</div>
              <div className="value-text">
                <strong>Zero Risk</strong>
                <p>No payment. No commitment. Just great content you get to keep.</p>
              </div>
            </div>
          </div>

          {/* Testimonial Note */}
          <div className="testimonial-note">
            <strong>The only ask:</strong> If you love what we create, we'd appreciate an honest testimonial we can share. That's it.
          </div>

          {/* Calendly Embed */}
          <div className="calendly-section">
            <h2 className="section-title">Book a Call</h2>
            <p className="section-subtitle">Let's discuss your free content piece</p>
            <div className="calendly-container">
              <iframe
                src="https://calendly.com/adam-salmanovmedia/salmanov-media-discovery-call-clone"
                width="100%"
                height="700"
                frameBorder="0"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer variant="simple" />
    </>
  )
}

export default FreeContent
