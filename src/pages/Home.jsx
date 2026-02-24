import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Divider from '../components/Divider'

function Home() {
  const [activeSection, setActiveSection] = useState('individual')
  const [showStickyCta, setShowStickyCta] = useState(false)
  const [ctaDismissed, setCtaDismissed] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('ctaDismissed')
    if (dismissed) {
      setCtaDismissed(true)
    }

    const handleScroll = () => {
      if (ctaDismissed) return

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent > 50) {
        setShowStickyCta(true)
      } else {
        setShowStickyCta(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ctaDismissed])

  const handleToggle = (section) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeStickyCTA = () => {
    setShowStickyCta(false)
    setCtaDismissed(true)
    sessionStorage.setItem('ctaDismissed', 'true')
  }

  return (
    <>
      <Header
        showToggle={true}
        activeSection={activeSection}
        onToggle={handleToggle}
      />

      <main>
        <div className="container">
          {/* INDIVIDUAL CONTENT */}
          <div className={`content-section ${activeSection === 'individual' ? 'active' : ''}`}>
            {/* Opening Manifesto */}
            <div className="hero">
              <h1>Your Own Content Team.<br />Young. Hungry. Obsessed With What Compounds.</h1>
            </div>

            <div className="section">
              <p className="opening">We're not an agency. We're your content team.</p>

              <p>Your videographer, editor, strategist, copywriter, and creative director — all in one.</p>

              <p>We grew up making content. It's not what we do, it's all we've ever done.</p>

              <p>We move fast because we don't have corporate layers.<br />
                Our rates are better because we don't have overhead.<br />
                We're never arrogant because we're always learning.</p>

              <p>Here's the promise: we'll think about your content every single day. We'll obsess over what works. We'll iterate until we find what compounds.</p>

              <p><strong>Because your wins are how we build ours.</strong></p>
            </div>

            <Divider />

            {/* Original Content Starts Here */}
            <div className="hero">
              <h1>Personal Brand<br />That Compounds</h1>
            </div>

            <div className="section">
              <p className="opening">Let's not pretend.</p>
              <p>You already know you need content.</p>
              <p>You know because:</p>
              <ul>
                 <li>Lower CAC over time</li>
                 <li>Inbound leads without outbound effort</li>
                 <li>Compounding Distribution without paying for it</li>
                 <li>Higher close rates from pre-sold trust</li>
                <li>Shorter sales cycles</li>
                <li> No more competitors outperforming you because they have more attention</li>
              </ul>
              <p>This part is obvious.</p>
              <p>The real question is why it still hasn't worked.</p>
            </div>

            <Divider />

            <div className="section">
              <span className="section-label">The Problem</span>
              <h2>Why Personal Brands Fail</h2>
              <p>Not because founders aren't interesting.<br />
                Not because they don't have insights.</p>
              <p>They fail because:</p>
              <ul>
                <li>The founder does it themselves (inconsistently)</li>
                <li>There's no storytelling, just updates</li>
                <li>There's no volume, just "when I have time"</li>
                <li>Or it becomes a second full-time job</li>
              </ul>
              <p>That's not leverage.<br />That's distraction.</p>
            </div>

            <Divider />

            <div className="section">
              <span className="section-label">The Solution</span>
              <h2>The Correct Way to Run a Personal Brand</h2>
              <p>A personal brand isn't just about posting.<br />
                It's about distribution.</p>
              <p>Done right, it should:</p>
              <ul>
                <li>Dominate the feeds of your target demographic</li>
                <li>Maintain a consistent message, tone, and visual identity</li>
                <li>Make you the “default option” in your category</li>
                <li>Create inbound opportunities</li>
                <li>Run quietly in the background</li>
              </ul>
              <p>If it requires constant thought, it's broken.</p>
              <p className="progression">
                Consistency builds memory.<br />
                Memory builds trust.<br />
                Trust builds demand.
              </p>
            </div>

            <Divider />

            <div className="section">
              <h2>What We Do</h2>
              <p>We run your personal brand content — the filming, editing, strategy, and posting.</p>
              <p>You don't become a creator.<br />
                You stay an operator.</p>

              <h3>What does this actually look like?</h3>
              <ul className="details-list">
                <li><strong>Content types:</strong> Short-form video (TikTok, Instagram Reels, YouTube Shorts), LinkedIn posts, long-form YouTube (if it makes sense)</li>
                <li><strong>Volume:</strong> Varies based on your goals and bandwidth — could be 3x/week or daily. We figure out what's sustainable and effective for you.</li>
                <li><strong>Filming:</strong> Either we film you in-person, or we teach you/your team how to capture content on your phone. Or a mix of both. Whatever fits your lifestyle.</li>
                <li><strong>Platforms:</strong> We meet you where your audience is — usually LinkedIn for B2B founders, Instagram/TikTok for consumer brands, or all of the above.</li>
              </ul>

              <p>The truth is, it depends on your circumstances and goals. We're not cookie-cutter. We adapt.</p>
              <p>For example: we have some clients where we document their life with a camera and create content from that. Others need a more scripted approach, or podcasts, or something completely different. It really just depends.</p>
              <p>To do this yourself, you'd need: a videographer, creative director, editors, graphic designer, and copywriter.</p>
              <p><strong>Or you just have us.</strong></p>
              <p>We're young, hungry, and we grew up doing content, have been doing it for years, and are addicted to becoming the best at it.</p>
              <p><strong>We work closely with everyone</strong> — we take the responsibility of leading your brand seriously. Many people and agencies have tried to do this as a done-for-you service. It's hard. But we're damn good at this, and we make it as easy and stress-free as possible for you.</p>
            </div>

            <Divider />

            {/* Replace with real testimonials */}
            <div className="section">
              <h2>What Our Clients Say</h2>
              <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                <div className="testimonial-card" style={{ padding: '2rem', border: '1px solid var(--gray)', borderRadius: '8px' }}>
                  <p style={{ fontStyle: 'italic', opacity: 0.6 }}>Testimonial coming soon</p>
                </div>
                <div className="testimonial-card" style={{ padding: '2rem', border: '1px solid var(--gray)', borderRadius: '8px' }}>
                  <p style={{ fontStyle: 'italic', opacity: 0.6 }}>Testimonial coming soon</p>
                </div>
                <div className="testimonial-card" style={{ padding: '2rem', border: '1px solid var(--gray)', borderRadius: '8px' }}>
                  <p style={{ fontStyle: 'italic', opacity: 0.6 }}>Testimonial coming soon</p>
                </div>
              </div>
            </div>

            <Divider />

            <div className="section">
              <h2>The System</h2>

              <h3>1. Content Capture</h3>
              <p>We capture what's already happening — either we record ourselves, or we teach someone on your team (or you) to record, or a mix of both:</p>
              <ul>
                <li>Decisions</li>
                <li>Thinking</li>
                <li>Wins and losses</li>
                <li>Strong opinions formed under pressure</li>
              </ul>
              <p>Sometimes scripted, sometimes raw — depends on what works for you.</p>

              <h3>2. Production & Storytelling</h3>
              <p>We turn raw moments into stories people finish:</p>
              <ul>
                <li>Clear hooks</li>
                <li>Obvious narratives</li>
                <li>Takeaways that build authority</li>
              </ul>

              <h3>3. Distribution & Growth</h3>
              <p>We build content systems so you're posting consistently across all major platforms:</p>
              <ul>
                <li>Daily short-form (Instagram, TikTok, LinkedIn, YouTube Shorts)</li>
                <li>Long-form YouTube videos (if it makes sense for your audience)</li>
                <li>We book you on podcasts or create collaborations to tap into other audiences</li>
                <li>Launch content series designed to hit specific goals (inbound leads, recruiting, fundraising, etc.)</li>
              </ul>
              <p>Tested. Optimized. Compounded over time.</p>

              <h3>4. Team Structure</h3>
              <p>We become your content operations:</p>
              <ul>
                <li>Content Strategist</li>
                <li>Videographer</li>
                <li>Editors</li>
                <li>Graphic Designers</li>
                <li>Distribution Manager</li>
              </ul>
              <p>You stay focused on your business. We handle everything else.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>What to Expect</h2>
              <p>This is not instant ROI.</p>
              <p>First comes:</p>
              <ul>
                <li>Familiarity</li>
                <li>Trust</li>
                <li>Attention</li>
              </ul>
              <p>Once that exists, monetization becomes easy.</p>
              <p>We can later layer:</p>
              <ul>
                <li>Lead magnets</li>
                <li>Offers</li>
                <li>Ads on top-performing content</li>
              </ul>
              <p>But attention always comes first.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>Who This Is For</h2>
              <ul>
                <li>Founders</li>
                <li>Operators</li>
                <li>Investors</li>
                <li>People whose reputation outlives any single company</li>
              </ul>
              <p>If you want vibes, this isn't for you.<br />
                If you want leverage, it is.</p>
              <p>We currently work with founders in tech, finance, and health — if that's you, we should talk.</p>
            </div>

            <Divider />

            <div className="section">
              <span className="section-label">Pricing</span>
              <h2>How We Work</h2>

              <div className="pricing-container">
                <div className="pricing-card">
                  <h3 className="pricing-title">One-Time Projects</h3>
                  <div className="pricing-amount">Custom Quote</div>
                  <p className="pricing-description">Vlogs, short-form content batches, or any single high-impact project.</p>
                  <p className="pricing-description">Perfect for testing us out, seeing how we work, or when you just need one thing done really well.</p>
                  <p className="pricing-description">We're happy to do these.</p>
                  <button onClick={() => document.getElementById('work-with-us').scrollIntoView({ behavior: 'smooth' })} className="pricing-cta">Get Started →</button>
                </div>

                <div className="pricing-card">
                  <h3 className="pricing-title">Ongoing Personal Content Team</h3>
                  <div className="pricing-amount">Starts at $3,000/month</div>
                  <p className="pricing-description">Month-to-Month. Cancel anytime.</p>
                  <p className="pricing-description">You never think about content again.</p>
                  <button onClick={() => document.getElementById('work-with-us').scrollIntoView({ behavior: 'smooth' })} className="pricing-cta">Get Started →</button>
                </div>
              </div>
            </div>

            {/* Inline CTA */}
            <div className="container">
              <div className="inline-cta">
                <div className="inline-cta-content">
                  <span className="inline-cta-badge">Limited Offer</span>
                  <h2>Get a Free Content Piece</h2>
                  <p>We handle everything: brainstorming, scripting, filming, editing, strategy. Just give us your idea and test how well we execute.</p>
                  <Link to="/free-content" className="inline-cta-button">Claim Your Free Piece →</Link>
                  <p className="inline-cta-note">In return, we ask for a testimonial if you love it.</p>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="application-section" id="work-with-us">
              <div className="container">
                <div className="application-header">
                  <h2>Work With Us</h2>
                </div>

                <div className="application-intro">
                  <p>We don't take on everyone.</p>
                  <p>This is intentionally limited because we work closely with each founder to build something that actually compounds.</p>
                </div>

                <div className="application-note">
                  <p><strong>Capacity is limited.</strong></p>
                  <p>We only work with a handful of clients at a time to ensure quality and attention.</p>
                  <p>If you're serious about building distribution that lasts, apply below.</p>
                </div>

                <div className="form-embed">
                  <iframe
                    src="https://calendly.com/adam-salmanovmedia/30min"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allow="camera; microphone; autoplay; encrypted-media;"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>

            <footer>
              <h2 className="bottom-line">Bottom Line</h2>
              <p className="bottom-line-text">Your personal brand isn't about attention.<br />
                It's about control.</p>
              <p className="bottom-line-text">Control of narrative.<br />
                Control of trust.<br />
                Control of future distribution.</p>
              <p className="bottom-line-text">We make sure it compounds.</p>
            </footer>
          </div>

          {/* COMPANY CONTENT */}
          <div className={`content-section ${activeSection === 'company' ? 'active' : ''}`}>
            {/* Opening Manifesto */}
            <div className="hero">
              <h1>Your Company's Content Team.<br />Young. Hungry. Obsessed With What Compounds.</h1>
            </div>

            <div className="section">
              <p className="opening">We're not a production house. We're your in-house content department — without the overhead.</p>

              <p>We handle your videography, editing, strategy, copywriting, and creative direction. Everything.</p>

              <p>We move fast because we don't have bureaucracy.<br />
                Our rates are better because we don't have fancy offices.<br />
                We're never arrogant because we're always learning.</p>

              <p>We'll wake up every day thinking about how to make your company more visible, more human, and more memorable.</p>

              <p><strong>Because your growth is how we prove ourselves.</strong></p>
            </div>

            <Divider />

            {/* Original Content Starts Here */}
            <div className="hero">
              <h1>Company Storytelling<br />& Distribution</h1>
            </div>

            <div className="section">
              <p className="opening">Great companies don't lose because their product is bad.</p>
              <p>They lose because:</p>
              <ul>
                <li>Nobody understands what they're building</li>
                <li>Nobody sees the people behind it</li>
                <li>Nobody hears about them consistently</li>
              </ul>
              <p>The market doesn't reward the best work.<br />
                It rewards the clearest story, told repeatedly.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>The Problem With Company Content</h2>
              <p>Most company content is:</p>
              <ul>
                <li>Overproduced and ignored</li>
                <li>Too polished to feel real</li>
                <li>Too technical to spread</li>
                <li>Too infrequent to matter</li>
              </ul>
              <p>It doesn't feel human.<br />
                So nobody cares.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>The Opportunity</h2>
              <p>Companies have something individuals don't:</p>
              <ul>
                <li>A team</li>
                <li>A space</li>
                <li>A product in motion</li>
                <li>Real momentum every day</li>
              </ul>
              <p>That's unlimited raw material —<br />
                if you document it correctly.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>What We Do</h2>
              <p>We turn your company's real activity into daily storytelling and distribution.</p>
              <p>Not brand fluff.<br />
                Not empty marketing.</p>
              <p>Real people.<br />
                Real work.<br />
                Real momentum.</p>
              <p>We embed with your team, document the real work happening every day, and turn it into a distribution engine that attracts customers, talent, and investors.</p>
              <p>To do this yourself, you'd need: a videographer, creative director, editors, graphic designer, and copywriter.</p>
              <p>We're young, hungry, and we grew up doing content, have been doing it for years, and are addicted to becoming the best at it.</p>
              <p><strong>We work closely with everyone</strong> — we take the responsibility of leading your brand seriously. Many people and agencies have tried to do this as a done-for-you service. It's hard. But we're damn good at this, and we make it as easy and stress-free as possible for you.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>The System</h2>

              <h3>1. Company Documentation</h3>
              <p>We document — either we record ourselves, or we teach someone on your team to record, or a mix of both:</p>
              <ul>
                <li>What you're building</li>
                <li>How decisions are made</li>
                <li>Your CEO, CTO, and operators</li>
                <li>The culture behind the product</li>
              </ul>

              <h3>2. Narrative Layering</h3>
              <p>We turn this into stories that:</p>
              <ul>
                <li>Explain what you do simply</li>
                <li>Make the team feel human</li>
                <li>Build trust with buyers, talent, and investors</li>
              </ul>

              <h3>3. Distribution Engine</h3>
              <p>Daily content across platforms where attention lives.</p>
              <p>Your company becomes:</p>
              <ul>
                <li>Visible</li>
                <li>Familiar</li>
                <li>Understandable</li>
              </ul>
            </div>

            <Divider />

            <div className="section">
              <h2>What to Expect</h2>
              <p>This is not a campaign.<br />
                This is not a launch.</p>
              <p>First comes:</p>
              <ul>
                <li>Familiarity</li>
                <li>Trust</li>
                <li>Credibility</li>
              </ul>
              <p>Then monetization compounds.</p>
              <p>Once the content proves itself, we can layer:</p>
              <ul>
                <li>Recruiting funnels</li>
                <li>Sales lead magnets</li>
                <li>Retargeting ads</li>
                <li>Launch amplification</li>
              </ul>
              <p>We don't guess what converts.<br />
                We amplify what already does.</p>
            </div>

            <Divider />

            <div className="section">
              <h2>Who This Is For</h2>
              <ul>
                <li>Founder-led companies</li>
                <li>Startups with real momentum</li>
                <li>Teams that want visibility without noise</li>
                <li>Companies that understand attention is leverage</li>
              </ul>
            </div>

            <Divider />

            <div className="section">
              <h2>Engagement Structure</h2>

              <div className="pricing-container">
                <div className="pricing-card">
                  <h3 className="pricing-title">One-Time Projects</h3>
                  <div className="pricing-amount">Custom Quote</div>
                  <p className="pricing-description">Company vlogs, product launches, team content batches, or any single high-impact project.</p>
                  <p className="pricing-description">Perfect for testing us out or when you need one thing done exceptionally well.</p>
                  <p className="pricing-description">We're happy to do these.</p>
                  <button onClick={() => document.getElementById('company-work-with-us').scrollIntoView({ behavior: 'smooth' })} className="pricing-cta">Get Started →</button>
                </div>

                <div className="pricing-card">
                  <h3 className="pricing-title">Ongoing Company Storytelling & Distribution</h3>
                  <div className="pricing-amount">Starts at $5,000/month</div>
                  <p className="pricing-description">Scope-dependent. Month-to-month.</p>
                  <button onClick={() => document.getElementById('company-work-with-us').scrollIntoView({ behavior: 'smooth' })} className="pricing-cta">Get Started →</button>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="application-section" id="company-work-with-us">
              <div className="container">
                <div className="application-header">
                  <h2>Work With Us</h2>
                </div>

                <div className="application-intro">
                  <p>We're selective about the companies we work with.</p>
                  <p>This ensures we can deliver the attention and strategic depth your team deserves.</p>
                </div>

                <div className="application-note">
                  <p><strong>We work with a limited number of companies at a time.</strong></p>
                  <p>Each engagement is hands-on, collaborative, and built for long-term momentum.</p>
                  <p>If you're building something real and want the world to see it, apply below.</p>
                </div>

                <div className="form-embed">
                  <iframe
                    src="https://calendly.com/adam-salmanovmedia/30min"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allow="camera; microphone; autoplay; encrypted-media;"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>

            <footer>
              <h2 className="bottom-line">Bottom Line</h2>
              <p className="bottom-line-text">People don't trust logos.<br />
                They trust people.</p>
              <p className="bottom-line-text">We make sure the world sees:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>What you're building</li>
                <li>Who's building it</li>
                <li>And why it matters</li>
              </ul>
              <p className="bottom-line-text">Consistently.</p>
            </footer>
          </div>
        </div>
      </main>

      {/* Sticky CTA Banner */}
      <div className={`sticky-cta ${showStickyCta ? 'visible' : ''}`}>
        <div className="sticky-cta-content">
          <div className="sticky-cta-text">
            <span className="sticky-cta-badge">Free Offer</span>
            <h3>Test How Well We Execute</h3>
            <p>We handle everything. You give us the idea.</p>
          </div>
          <Link to="/free-content" className="sticky-cta-button">Claim Free Piece →</Link>
          <button className="sticky-cta-close" onClick={closeStickyCTA}>×</button>
        </div>
      </div>
    </>
  )
}

export default Home
