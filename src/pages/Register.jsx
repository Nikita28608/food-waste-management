
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [role, setRole] = useState('restaurant')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const roleRoutes = {
    restaurant: '/restaurant',
    ngo: '/ngo',
    volunteer: '/volunteer',
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError('Please fill in all required fields.')
      return
    }

    if (password.length < 6) {
      setError('Your password must contain at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setError('The passwords do not match. Please try again.')
      return
    }

    // Demo only: this does not create or save a real user account.
    localStorage.setItem('foodconnectRole', role)
    navigate(roleRoutes[role])
  }

  return (
    <main className="fc-auth-page fc-register-page">
      <section className="fc-auth-visual">
        <Link to="/" className="fc-auth-brand">
          <span className="fc-auth-brand-icon">FC</span>
          FoodConnect
        </Link>

        <div className="fc-auth-visual-content">
          <span className="fc-auth-eyebrow">
            JOIN THE MOVEMENT
          </span>

          <h1>Small acts of sharing create a bigger impact.</h1>

          <p>
            Become part of a community that connects surplus food
            with people who need it. Together, we can reduce waste
            and make a difference.
          </p>
        </div>

        <div className="fc-auth-visual-footer">
          Every meal shared matters.
        </div>
      </section>

      <section className="fc-auth-form-section">
        <div className="fc-auth-form-wrap fc-register-form-wrap">
          <Link to="/" className="fc-auth-mobile-brand">
            <span className="fc-auth-brand-icon">FC</span>
            FoodConnect
          </Link>

          <span className="fc-auth-eyebrow">GET STARTED</span>

          <h2>Create your account</h2>

          <p className="fc-auth-subtitle">
            Join FoodConnect as a food donor, NGO, or volunteer.
          </p>

          <form
            className="fc-auth-form fc-register-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="register-role">
              I want to join as *
            </label>

            <select
              id="register-role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
            >
              <option value="restaurant">
                Restaurant / Food Donor
              </option>
              <option value="ngo">NGO / Charity</option>
              <option value="volunteer">Volunteer</option>
            </select>

            <label htmlFor="register-name">Full name / Organisation name *</label>

            <input
              id="register-name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="register-email">Email address *</label>

            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="register-phone">
              Phone number <span className="fc-register-optional">(optional)</span>
            </label>

            <input
              id="register-phone"
              type="tel"
              placeholder="Enter your phone number"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />

            <label htmlFor="register-password">Create password *</label>

            <input
              id="register-password"
              type="password"
              placeholder="At least 6 characters"
              autoComplete="new-password"
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <label htmlFor="register-confirm-password">
              Confirm password *
            </label>

            <input
              id="register-confirm-password"
              type="password"
              placeholder="Enter your password again"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              required
            />

            {error && (
              <p className="fc-auth-error" role="alert">
                {error}
              </p>
            )}

            <button className="fc-auth-submit" type="submit">
              Create Account →
            </button>
          </form>

          <p className="fc-auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>

          <p className="fc-auth-demo-note">
            College project demo: this form does not save your
            details or create a real account. Do not enter a
            password you use for another service.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register
