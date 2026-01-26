function Footer({ variant = 'default' }) {
  if (variant === 'simple') {
    return (
      <footer>
        <div className="container">
          <p>&copy; 2026 Salmanov Media • NYC</p>
        </div>
      </footer>
    )
  }

  return (
    <footer>
      <h2 className="bottom-line">Bottom Line</h2>
      <p className="bottom-line-text">
        Your personal brand isn't about attention.<br />
        It's about control.
      </p>
      <p className="bottom-line-text">
        Control of narrative.<br />
        Control of trust.<br />
        Control of future distribution.
      </p>
      <p className="bottom-line-text">We make sure it compounds.</p>
    </footer>
  )
}

export default Footer
