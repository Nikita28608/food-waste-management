function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div>
          <span className="about-label">ABOUT FOODCONNECT</span>

          <h1>
            Connecting surplus food
            <br />
            with <span>people who need it.</span>
          </h1>

          <p>
            FoodConnect is a digital platform designed to reduce food
            waste by connecting restaurants, NGOs and volunteers through
            one simple and transparent system.
          </p>
        </div>

      </section>


      {/* MISSION */}
      <section className="about-mission">

        <div className="mission-text">

          <span className="about-label">OUR MISSION</span>

          <h2>
            Food should reach
            <br />
            people, not <span>landfills.</span>
          </h2>

          <p>
            Restaurants, hotels, events and other organizations can
            sometimes have safe surplus food at the end of the day.
            At the same time, NGOs and communities may need food
            assistance.
          </p>

          <p>
            FoodConnect helps bridge this gap by creating a structured
            process for donating, requesting, collecting and distributing
            surplus food.
          </p>

        </div>


        <div className="mission-card">

          <div className="mission-icon">
            🌱
          </div>

          <h3>
            Our Goal
          </h3>

          <p>
            Build a reliable digital ecosystem where surplus food can
            be discovered, collected and distributed efficiently.
          </p>

        </div>

      </section>


      {/* THE PROBLEM */}
      <section className="about-problem">

        <div className="section-heading">

          <span>THE PROBLEM</span>

          <h2>
            A gap between
            <br />
            <strong>surplus and need.</strong>
          </h2>

          <p>
            Food waste and food insecurity can exist at the same time.
            FoodConnect focuses on improving the connection between
            available food and organizations that can distribute it.
          </p>

        </div>


        <div className="problem-grid">

          <div className="problem-card">

            <div className="problem-icon">
              🍽️
            </div>

            <h3>
              Surplus Food
            </h3>

            <p>
              Restaurants and events may have safe food remaining
              after serving customers.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon">
              🤝
            </div>

            <h3>
              NGOs Need Resources
            </h3>

            <p>
              NGOs need reliable ways to discover available food
              donations in their area.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon">
              🚚
            </div>

            <h3>
              Transportation
            </h3>

            <p>
              Volunteers help bridge the physical gap between
              donors and receiving organizations.
            </p>

          </div>

        </div>

      </section>


      {/* HOW FOODCONNECT HELPS */}
      <section className="about-flow">

        <div className="flow-heading">

          <span className="about-label">
            OUR APPROACH
          </span>

          <h2>
            One connected
            <br />
            <span>food recovery journey.</span>
          </h2>

        </div>


        <div className="flow">

          <div className="flow-item">
            <div className="flow-number">01</div>
            <h3>Donate</h3>
            <p>
              Restaurants list surplus food.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            <div className="flow-number">02</div>
            <h3>Request</h3>
            <p>
              NGOs request available donations.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            <div className="flow-number">03</div>
            <h3>Collect</h3>
            <p>
              Volunteers pick up the food.
            </p>
          </div>

          <div className="flow-arrow">
            →
          </div>

          <div className="flow-item">
            <div className="flow-number">04</div>
            <h3>Distribute</h3>
            <p>
              Food reaches people who need it.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>
          Together, we can reduce food waste.
        </h2>

        <p>
          Every donation can become someone's meal.
        </p>

        <a href="/register">
          Join FoodConnect →
        </a>

      </section>

    </div>
  )
}

export default About