import { Link } from 'react-router-dom'

function Header({ showToggle = false, activeSection, onToggle, showBackLink = false }) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-dot"></div>
            <span className="logo-text">SALMANOV MEDIA</span>
          </Link>

          {showBackLink && (
            <Link to="/" className="nav-link">← Back to Home</Link>
          )}

          {showToggle && (
            <div className="nav-links">
              <div className="toggle-container">
                <div
                  className={`toggle-option ${activeSection === 'individual' ? 'active' : ''}`}
                  onClick={() => onToggle('individual')}
                >
                  <span className="toggle-label">For Individuals</span>
                  <span className="toggle-subtext">Founders, Operators, Investors</span>
                </div>
                <div
                  className={`toggle-option ${activeSection === 'company' ? 'active' : ''}`}
                  onClick={() => onToggle('company')}
                >
                  <span className="toggle-label">For Companies</span>
                  <span className="toggle-subtext">Founder-led teams & startups</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
