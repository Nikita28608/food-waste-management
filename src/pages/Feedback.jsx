import { useState } from 'react'
import './Feedback.css'

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    rating: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      role: '',
      rating: '',
      message: '',
    })
  }

  return (
    <main className="fc-feedback-page">
      <section className="fc-feedback-hero">
        <span className="fc-feedback-tag">YOUR VOICE MATTERS</span>
        <h1>Help us make a difference.</h1>
        <p>
          Every suggestion helps us rescue more food, support more
          communities, and build a better FoodConnect.
        </p>
      </section>

      <section className="fc-feedback-container">
        <div className="fc-feedback-info">
          <h2>We'd love to hear from you!</h2>
          <p>
            Whether you're donating food, helping as a volunteer,
            or supporting an NGO, your experience matters to us.
          </p>

          <div className="fc-feedback-benefit">
            <span>01</span>
            <div>
              <h3>Share your experience</h3>
              <p>Tell us what you liked and what we can improve.</p>
            </div>
          </div>

          <div className="fc-feedback-benefit">
            <span>02</span>
            <div>
              <h3>Suggest new ideas</h3>
              <p>Help us make food donation easier and faster.</p>
            </div>
          </div>

          <div className="fc-feedback-benefit">
            <span>03</span>
            <div>
              <h3>Create more impact</h3>
              <p>Your feedback helps us work toward less food waste.</p>
            </div>
          </div>
        </div>

        <div className="fc-feedback-form-card">
          {submitted ? (
            <div className="fc-feedback-success">
              <div className="fc-feedback-check">✓</div>
              <h2>Thank you for your feedback!</h2>
              <p>
                We appreciate you helping FoodConnect grow.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="fc-feedback-button"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <>
              <h2>Share your feedback</h2>
              <p className="fc-feedback-form-subtitle">
                Fill in the details below.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="fc-feedback-field">
                  <label htmlFor="feedback-name">Full name</label>
                  <input
                    id="feedback-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fc-feedback-field">
                  <label htmlFor="feedback-email">Email address</label>
                  <input
                    id="feedback-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="fc-feedback-field">
                  <label htmlFor="feedback-role">I am a...</label>
                  <select
                    id="feedback-role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Food Donor">Food donor</option>
                    <option value="NGO">NGO representative</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Beneficiary">Beneficiary</option>
                    <option value="Visitor">Website visitor</option>
                  </select>
                </div>

                <fieldset className="fc-feedback-rating">
                  <legend>How was your experience?</legend>
                  <div className="fc-feedback-rating-options">
                    {[
                      ['1', '★', 'Poor'],
                      ['2', '★★', 'Fair'],
                      ['3', '★★★', 'Good'],
                      ['4', '★★★★', 'Great'],
                      ['5', '★★★★★', 'Excellent'],
                    ].map(([value, stars, label]) => (
                      <label
                        key={value}
                        className={
                          formData.rating === value
                            ? 'fc-rating-option selected'
                            : 'fc-rating-option'
                        }
                      >
                        <input
                          type="radio"
                          name="rating"
                          value={value}
                          checked={formData.rating === value}
                          onChange={handleChange}
                          required
                        />
                        <span className="fc-rating-stars">{stars}</span>
                        <span className="fc-rating-label">{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="fc-feedback-field">
                  <label htmlFor="feedback-message">
                    Your suggestions
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    placeholder="Tell us about your experience or ideas..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="fc-feedback-button">
                  Submit Feedback <span aria-hidden="true">→</span>
                </button>

                <p className="fc-feedback-note">
                  Thank you for supporting a world with less food waste.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Feedback