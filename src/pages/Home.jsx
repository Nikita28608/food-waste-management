import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            🌱 Building a world with less food waste
          </div>

          <h1>
            Turn Surplus Food
            <br />
            Into <span>Hope.</span>
          </h1>

          <p>
            FoodConnect connects restaurants, NGOs and volunteers
            to make sure surplus food reaches people who need it
            instead of going to waste.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-button"
              onClick={() => navigate('/register')}>
              Donate Food
            </button>

            <button
              className="hero-button secondary"
              onClick={() => navigate('/about')}
            >
              Learn How It Works
            </button>
          </div>

          <div className="hero-trust">
            <span>✓ Easy to use</span>
            <span>✓ Transparent tracking</span>
            <span>✓ Community driven</span>
          </div>

        </div>


        {/* HERO CARD */}

        <div className="hero-visual">

          <div className="food-card">

            <div className="food-card-top">
              <span className="live-dot"></span>
              Live Donation
            </div>

            <div className="food-icon">
              🍱
            </div>

            <h3>
              Fresh Meals Available
            </h3>

            <p>
              50 food packets ready for pickup
            </p>

            <div className="food-details">

              <div>
                <span>Restaurant</span>
                <strong>Food Palace</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Jaipur</strong>
              </div>

            </div>

            <button className="pickup-button">
              View Donation
            </button>

          </div>

          <div className="floating-card floating-card-one">
            ❤️ 60+ People Served
          </div>

          <div className="floating-card floating-card-two">
            🚚 Pickup Assigned
          </div>

        </div>

      </section>


      {/* IMPACT SECTION */}

      <section className="impact">

        <div className="impact-heading">
          <span>OUR IMPACT</span>

          <h2>
            Small actions. <br />
            <strong>Big impact.</strong>
          </h2>
        </div>

        <div className="impact-stats">

          <div className="impact-stat">
            <h3>0+</h3>
            <p>Food Donations</p>
          </div>

          <div className="impact-stat">
            <h3>0+</h3>
            <p>NGOs Connected</p>
          </div>

          <div className="impact-stat">
            <h3>0+</h3>
            <p>Volunteers</p>
          </div>

          <div className="impact-stat">
            <h3>0+</h3>
            <p>People Served</p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how-it-works">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            From excess food to
            <br />
            <strong>someone's meal.</strong>
          </h2>

          <p>
            FoodConnect makes the entire journey simple,
            transparent and trackable.
          </p>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              🏪
            </div>

            <h3>
              Restaurant
            </h3>

            <p>
              Restaurants list their safe surplus food
              on FoodConnect.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              🤝
            </div>

            <h3>
              NGO
            </h3>

            <p>
              NGOs discover available food and
              request the quantity they need.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🚴
            </div>

            <h3>
              Volunteer
            </h3>

            <p>
              Volunteers collect the food and
              transport it safely.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              ❤️
            </div>

            <h3>
              Distribution
            </h3>

            <p>
              Food reaches communities and
              people who need it.
            </p>

          </div>

        </div>

      </section>


      {/* WHY FOODCONNECT */}

      <section className="why-foodconnect">

        <div className="why-content">

          <span>WHY FOODCONNECT?</span>

          <h2>
            More than food.
            <br />
            <strong>It's a connection.</strong>
          </h2>

          <p>
            FoodConnect creates a closed-loop system where
            every donation can be tracked from the moment
            it leaves a restaurant to the moment it reaches
            someone in need.
          </p>

        </div>


        <div className="features">

          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Transparent Tracking</h3>
            <p>
              Track donations from pickup to final distribution.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Fast Coordination</h3>
            <p>
              Connect NGOs and volunteers with available food quickly.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>Real Social Impact</h3>
            <p>
              Reduce food waste while helping communities.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Reliable Records</h3>
            <p>
              Maintain organized records of donations and distributions.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <div>

          <span>MAKE A DIFFERENCE</span>

          <h2>
            Have extra food?
            <br />
            Someone may need it.
          </h2>

          <p>
            Join FoodConnect and turn surplus food
            into meaningful impact.
          </p>

        </div>

        <button
  className="cta-button"
  onClick={() => navigate('/register')}
>
  Get Started
</button>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-brand">

          <h2>
            Food<span>Connect</span>
          </h2>

          <p>
            Connecting surplus food with people who need it.
          </p>

        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-bottom">

          <p>
            © 2026 FoodConnect. Built to reduce food waste.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home