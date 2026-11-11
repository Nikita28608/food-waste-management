
import { Link, useNavigate } from 'react-router-dom'

const images = {
  hero: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=85',
  waste: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
  mission: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
  community: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85',
}

function About() {
  const navigate = useNavigate()

  return (
    <main className="fc-about">
      {/* About hero */}
      <section className="fc-about-hero">
        <div className="fc-about-hero-content">
          <span className="fc-eyebrow">ABOUT FOODCONNECT</span>

          <h1>
            Building a more
            <br />
            sustainable food
            <br />
            <span>future for everyone.</span>
          </h1>

          <p>
            Good food should feed people, not go to waste.
            FoodConnect brings restaurants, NGOs and volunteers
            together to help surplus food reach communities that
            need it.
          </p>

          <button
            className="fc-button fc-button-primary"
            onClick={() => navigate('/register')}
          >
            Join Our Mission <span>→</span>
          </button>
        </div>

        <div className="fc-about-hero-photo">
          <img
            src={images.hero}
            alt="Food donation and community support"
          />
          <div className="fc-about-photo-label">
            <strong>Small actions. Big impact.</strong>
            <span>Every meal deserves a chance.</span>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="fc-about-section fc-problem-section">
        <div className="fc-about-heading">
          <span className="fc-eyebrow">WHY WE EXIST</span>
          <h2>A problem we can solve together.</h2>
          <p>
            Good food can be left unused while families and communities
            struggle to access nutritious meals. Better connections can
            help bridge that gap.
          </p>
        </div>

        <div className="fc-problem-grid">
          <article className="fc-problem-card">
            <div className="fc-problem-number">01</div>
            <h3>Surplus food goes unused</h3>
            <p>
              Restaurants, cafeterias and events may have safe,
              untouched surplus food at the end of the day.
            </p>
          </article>

          <article className="fc-problem-card">
            <div className="fc-problem-number">02</div>
            <h3>Communities need support</h3>
            <p>
              NGOs work hard to provide meals but need reliable ways
              to discover and request available food.
            </p>
          </article>

          <article className="fc-problem-card">
            <div className="fc-problem-number">03</div>
            <h3>Coordination makes a difference</h3>
            <p>
              A clear process can connect donors, food recipients
              and volunteers for timely collection and delivery.
            </p>
          </article>
        </div>
      </section>

      {/* Mission */}
      <section className="fc-about-section fc-mission-section">
        <div className="fc-mission-photo">
          <img
            src="/images/about-food-distribution.jpg"
            alt="Volunteers distributing food to the community"
          />
        </div>

        <div className="fc-mission-content">
          <span className="fc-eyebrow">OUR MISSION</span>
          <h2>Make sharing surplus food simple, safe and meaningful.</h2>
          <p>
            FoodConnect is designed to make food donation easier to
            coordinate. Restaurants can list available surplus food,
            NGOs can request donations, and volunteers can help with
            collection and delivery.
          </p>

          <ul className="fc-mission-list">
            <li>
              <span>✓</span>
              Reduce avoidable food waste
            </li>
            <li>
              <span>✓</span>
              Support NGOs and local communities
            </li>
            <li>
              <span>✓</span>
              Coordinate collection and delivery
            </li>
            <li>
              <span>✓</span>
              Track the donation journey
            </li>
          </ul>
        </div>
      </section>

      {/* How it connects people */}
      <section className="fc-about-section fc-connect-section">
        <div className="fc-about-heading">
          <span className="fc-eyebrow">HOW WE CONNECT</span>
          <h2>One shared goal. Four connected roles.</h2>
          <p>
            Each participant has a clear role in helping surplus
            food reach the people who need it.
          </p>
        </div>

        <div className="fc-connect-grid">
          <article className="fc-connect-card">
            <div className="fc-connect-icon">01</div>
            <h3>Restaurants</h3>
            <p>List surplus food and provide collection details.</p>
          </article>

          <div className="fc-connect-arrow" aria-hidden="true">→</div>

          <article className="fc-connect-card">
            <div className="fc-connect-icon">02</div>
            <h3>NGOs</h3>
            <p>Discover available food and submit requests.</p>
          </article>

          <div className="fc-connect-arrow" aria-hidden="true">→</div>

          <article className="fc-connect-card">
            <div className="fc-connect-icon">03</div>
            <h3>Volunteers</h3>
            <p>Help coordinate pickup and safe delivery.</p>
          </article>

          <div className="fc-connect-arrow" aria-hidden="true">→</div>

          <article className="fc-connect-card">
            <div className="fc-connect-icon">04</div>
            <h3>Communities</h3>
            <p>Receive food through local support networks.</p>
          </article>
        </div>
      </section>

      {/* Closing banner */}
      <section className="fc-about-banner">
        <img
          src="/images/about-community-meal.jpg"
          alt="Community members sharing a meal"
        />
        <div className="fc-about-banner-overlay">
          <span className="fc-eyebrow">BE PART OF THE CHANGE</span>
          <h2>Real people. Shared food. Stronger communities.</h2>
          <p>
            Help build a future where good food is valued and
            communities can support one another.
          </p>
          <button
            className="fc-button fc-button-light"
            onClick={() => navigate('/register')}
          >
            Get Started <span>→</span>
          </button>
        </div>
      </section>

      <footer className="fc-footer">
        <Link to="/" className="fc-footer-logo">
          Food<span>Connect</span>
        </Link>
        <p>Rescue food. Reduce waste. Nourish communities.</p>
        <div className="fc-footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </div>
        <span className="fc-copyright">
          © 2026 FoodConnect · Built for a more sustainable future
        </span>
      </footer>
    </main>
  )
}

export default About
