
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="fc-home">
      <section className="fc-home-hero">
        <div className="fc-home-hero-content">
          <span className="fc-home-eyebrow">
            LESS FOOD WASTE. MORE HUMANITY.
          </span>

          <h1>
            Good food should feed people,
            <span> not fill landfills.</span>
          </h1>

          <p>
            FoodConnect brings restaurants, NGOs, and volunteers
            together to rescue surplus food and deliver it to
            communities that need it.
          </p>

          <div className="fc-home-actions">
            <Link to="/register" className="fc-home-primary">
              Start Donating <span>→</span>
            </Link>

            <Link to="/about" className="fc-home-secondary">
              Discover Our Mission
            </Link>
          </div>

          <div className="fc-home-trust">
            <span className="fc-home-trust-icon">♥</span>
            <span>Every meal saved is an opportunity to help.</span>
          </div>
        </div>

        <div className="fc-home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
            alt="A fresh, colourful meal ready to be shared"
          />

          <div className="fc-home-image-card">
            <span className="fc-home-image-card-icon">♡</span>
            <div>
              <strong>Food with a purpose</strong>
              <p>Share what you can. Help who you can.</p>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* FoodConnect Photo Gallery */}
      <section className="fc-home-gallery">
        <div className="fc-home-gallery-heading">
          <span className="fc-home-eyebrow">FOOD WITH A PURPOSE</span>
          <h2>See how sharing makes a difference.</h2>
          <p>
            From preparing surplus meals to delivering food to communities,
            every step helps turn extra food into meaningful support.
          </p>
        </div>

        <div className="fc-home-gallery-grid">
          <article className="fc-home-gallery-card fc-gallery-large">
            <img
              src="/images/food-meals.jpg"
              alt="Fresh meals prepared for food donation"
              loading="lazy"
            />
            <div className="fc-home-gallery-overlay">
              <span>01 / FOOD RESCUE</span>
              <h3>Every meal deserves a chance.</h3>
            </div>
          </article>

          <article className="fc-home-gallery-card">
            <img
              src="/images/children-food.png"
              alt="Children receiving nutritious meals"
              loading="lazy"
            />
            <div className="fc-home-gallery-overlay">
              <span>02 / NOURISHMENT</span>
              <h3>Every child deserves a meal.</h3>
            </div>
          </article>

          <article className="fc-home-gallery-card">
            <img
              src="/images/food-distribution.webp"
              alt="Community members receiving donated food"
              loading="lazy"
            />
            <div className="fc-home-gallery-overlay">
              <span>03 / COMMUNITY</span>
              <h3>Sharing food, spreading care.</h3>
            </div>
          </article>

          <article className="fc-home-gallery-card">
            <img
              src="/images/food-packing.jpg"
              alt="Volunteers packing food donations"
              loading="lazy"
            />
            <div className="fc-home-gallery-overlay">
              <span>04 / VOLUNTEERS</span>
              <h3>Small actions, lasting impact.</h3>
            </div>
          </article>

          <article className="fc-home-gallery-card">
            <img
              src="/images/volunteer-support.jpg"
              alt="Volunteers distributing food to the community"
              loading="lazy"
            />
            <div className="fc-home-gallery-overlay">
              <span>05 / FOOD SUPPORT</span>
              <h3>Together, we can make a difference.</h3>
            </div>
          </article>
        </div>
      </section>

      {/* How FoodConnect Works */}
      <section className="fc-home-impact" id="how-it-works">
        <div>
          <span className="fc-home-impact-label">OUR PURPOSE</span>
          <h2>Turning surplus into support.</h2>
          <p>
            A simple connection can make a meaningful difference
            for people, communities, and the planet.
          </p>
        </div>

        <div className="fc-home-impact-cards">
          <article className="fc-home-impact-card">
            <span className="fc-home-impact-number">01</span>
            <div className="fc-home-impact-icon">🍲</div>
            <h3>Rescue food</h3>
            <p>
              Food donors list safe surplus food before it goes
              to waste.
            </p>
          </article>

          <article className="fc-home-impact-card">
            <span className="fc-home-impact-number">02</span>
            <div className="fc-home-impact-icon">🤝</div>
            <h3>Connect communities</h3>
            <p>
              NGOs request available donations for the people
              they support.
            </p>
          </article>

          <article className="fc-home-impact-card">
            <span className="fc-home-impact-number">03</span>
            <div className="fc-home-impact-icon">🚚</div>
            <h3>Deliver with care</h3>
            <p>
              Volunteers help coordinate collection and delivery
              to recipients.
            </p>
          </article>
        </div>
      </section>



      <section className="fc-home-cta">
        <div>
          <span className="fc-home-eyebrow">BE PART OF THE CHANGE</span>
          <h2>Have extra food? Someone could need it.</h2>
          <p>
            Join FoodConnect and help make surplus food useful
            again.
          </p>
        </div>

        <Link to="/register" className="fc-home-cta-button">
          Join FoodConnect →
        </Link>
      </section>

      <footer className="fc-home-footer">
        <Link to="/" className="fc-home-footer-brand">
          FoodConnect
        </Link>
        <p>Connecting surplus food with people who need it.</p>
        <Link to="/about">Learn about our mission</Link>
      </footer>
    </main>
  )
}

export default Home

