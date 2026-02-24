import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Divider from '../components/Divider'

function HowItWorks() {
  const processSteps = [
    {
      number: '01',
      title: 'Onboarding & Discovery',
      description: "We start by understanding your world. Your business, your audience, your goals, and what you're actually building.",
      details: [
        'Deep dive call to understand your story',
        'Audit existing content (if any)',
        'Define content pillars and messaging',
        'Set up documentation systems'
      ]
    },
    {
      number: '02',
      title: 'Content Capture Setup',
      description: "We establish how content gets captured. Either we record ourselves, or we teach someone on your team (or you) to record, or a mix of both.",
      details: [
        'Equipment recommendations (if needed)',
        'Recording workflows and templates',
        'Weekly/monthly content capture schedule',
        'Asynchronous communication system (Slack, voice notes, screen recordings)'
      ]
    },
    {
      number: '03',
      title: 'Content Production',
      description: 'Raw footage and ideas become structured stories. Our team handles everything: editing, scripting, design, optimization.',
      details: [
        'Video editing (short-form & long-form)',
        'Copywriting for captions and hooks',
        'Graphic design and thumbnails',
        'Platform-specific formatting (TikTok, Instagram, LinkedIn, YouTube)'
      ]
    },
    {
      number: '04',
      title: 'Distribution & Publishing',
      description: 'Content goes live daily across all platforms. We handle scheduling, posting, and initial engagement.',
      details: [
        'Daily posting across Instagram, TikTok, LinkedIn, YouTube',
        'Optimized posting times per platform',
        'Community management and engagement',
        'Cross-platform repurposing'
      ]
    },
    {
      number: '05',
      title: 'Optimization & Reporting',
      description: "We analyze what works, what doesn't, and double down on winners. Content gets better every week.",
      details: [
        'Weekly performance analysis',
        'A/B testing hooks, formats, and topics',
        'Monthly strategy calls',
        'Reporting on growth, reach, and engagement'
      ]
    }
  ]

  const teamRoles = [
    { title: 'Content Strategist', description: 'Defines what you talk about, how you position yourself, and what stories to tell. Ensures everything ladders up to your goals.' },
    { title: 'Videographer', description: 'Captures the raw footage. Whether it\'s in-person shoots or teaching your team how to self-record with quality.' },
    { title: 'Video Editor', description: 'Turns raw footage into tight, engaging stories. Handles pacing, cuts, transitions, and all the technical work.' },
    { title: 'Copywriter', description: 'Writes hooks, captions, scripts, and CTAs. Makes sure the words hit as hard as the visuals.' },
    { title: 'Graphic Designer', description: 'Creates thumbnails, overlays, quote cards, and any visual assets needed to make content stand out.' },
    { title: 'Social Media Manager', description: 'Handles posting, scheduling, engagement, and community management. Keeps the machine running daily.' },
    { title: 'Creative Director', description: 'Oversees the entire operation. Ensures quality, consistency, and that everything aligns with your brand.' },
    { title: 'Performance Analyst', description: 'Tracks metrics, identifies winners, and optimizes strategy. Makes sure content improves week over week.' }
  ]

  const timeline = [
    { period: 'Week 1-2', title: 'Setup & Foundation', description: 'Onboarding, systems setup, content capture workflows established. First batch of content goes into production.' },
    { period: 'Week 3-4', title: 'Launch', description: 'Daily content starts publishing across platforms. Initial audience response and engagement tracking begins.' },
    { period: 'Month 2-3', title: 'Optimization', description: "Data comes in. We identify what's working and double down. Content quality and performance improve week over week." },
    { period: 'Month 4-6', title: 'Momentum', description: 'Distribution compounds. You start getting recognized. Inbound opportunities increase. The system runs smoothly in the background.' },
    { period: 'Month 6+', title: 'Leverage', description: 'Your presence is established. Can layer in lead magnets, offers, or ads on top of proven content. ROI becomes clear.' }
  ]

  // Portfolio section — uncomment when real client work is ready
  // const portfolioItems = [
  //   { videoId: 'E93qk-wfIkQ', client: 'Founder Journey', description: 'Building in public, documenting the real journey from startup to scale.' },
  //   { videoId: 'dQw4w9WgXcQ', client: 'Client Name', description: 'Brief description of the project and results achieved.' },
  //   { videoId: 'dQw4w9WgXcQ', client: 'Client Name', description: 'Brief description of the project and results achieved.' },
  //   { videoId: 'dQw4w9WgXcQ', client: 'Client Name', description: 'Brief description of the project and results achieved.' },
  //   { videoId: 'dQw4w9WgXcQ', client: 'Client Name', description: 'Brief description of the project and results achieved.' },
  //   { videoId: 'dQw4w9WgXcQ', client: 'Client Name', description: 'Brief description of the project and results achieved.' }
  // ]

  return (
    <>
      <Header showBackLink={true} />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <h1>How It Works</h1>
            <p className="hero-subtitle">The complete breakdown of our process, team, and what it takes to build distribution that compounds.</p>
          </div>
        </section>

        {/* The Full Process */}
        <section className="section">
          <div className="container">
            <span className="section-label">The Process</span>
            <h2>From Zero to Compounding Distribution</h2>
            <p>Most agencies talk about strategy. We build actual infrastructure. Here's exactly how we do it.</p>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="step-details">
                      <ul>
                        {step.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* The Team We Build */}
        <section className="section">
          <div className="container">
            <span className="section-label">The Team</span>
            <h2>The Content Team We Build For You</h2>
            <p>Hiring these roles individually would cost $300K+/year. You get all of them for a fraction of that.</p>

            <div className="team-grid">
              {teamRoles.map((role, index) => (
                <div className="team-role" key={index}>
                  <div className="role-title">{role.title}</div>
                  <p className="role-description">{role.description}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '3rem', fontSize: '1.125rem', opacity: 0.8 }}>
              That's 8 specialized roles. You get all of them for less than one full-time hire.
            </p>
          </div>
        </section>

        <Divider />

        {/* Timeline */}
        <section className="section">
          <div className="container">
            <span className="section-label">Timeline</span>
            <h2>What to Expect</h2>
            <p>Content marketing is a compounding game. Here's the realistic timeline.</p>

            <div className="timeline">
              {timeline.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Portfolio section — uncomment when real client work is ready */}
        <section className="section">
          <div className="wide-container">
            <span className="section-label">Our Work</span>
            <h2>Examples of What We've Built</h2>
            <p style={{textAlign: 'center', opacity: 0.5}}>Portfolio coming soon.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Build Your Distribution?</h2>
            <p>We work closely with a limited number of clients to ensure quality and results.</p>
            <Link to="/" className="cta-button">Apply to Work With Us</Link>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
    </>
  )
}

export default HowItWorks
