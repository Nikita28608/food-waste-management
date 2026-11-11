
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="fc-reference-navbar">
      <nav className="fc-reference-nav" aria-label="Main navigation">
        <Link to="/" className="fc-navbar-brand">
          <img
            src="/foodconnect-logo.png.png"
            alt="FoodConnect "
            className="fc-navbar-logo-image"
          />
</Link>

        <div className="fc-reference-links">
          <Link to="/">Home</Link>
          <NavLink to="/about">About Us</NavLink>
          <a href="/#how-it-works">How It Works</a>
          <Link to="/feedback">Feedback</Link>
        </div>

        <div className="fc-reference-actions">
          <Link to="/login" className="fc-reference-login">
            Log In
          </Link>

          <Link to="/register" className="fc-reference-start">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

