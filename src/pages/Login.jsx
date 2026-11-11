
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('restaurant')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const roleRoutes = {
    restaurant: '/restaurant',
    ngo: '/ngo',
    volunteer: '/volunteer',
    admin: '/admin',
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    // Demo-only login: this does not verify real credentials.
    localStorage.setItem('foodconnectRole', role)
    navigate(roleRoutes[role])
  }

  return (
    <main className="fc-auth-page">
      <section className="fc-auth-visual">
        <Link to="/" className="fc-auth-brand">
          <span className="fc-auth-brand-icon">FC</span>
          FoodConnect
        </Link>

        <div className="fc-auth-visual-content">
          <span className="fc-auth-eyebrow">LESS WASTE. MORE CARE.</span>
          <h1>Good food deserves a second chance.</h1>
          <p>
            Connect surplus food with the people who need it. Every donation
            can help build a more caring community.
          </p>
        </div>

        <div className="fc-auth-visual-footer">
          Sharing food. Sharing hope.
        </div>
      </section>

      <section className="fc-auth-form-section">
        <div className="fc-auth-form-wrap">
          <Link to="/" className="fc-auth-mobile-brand">
            <span className="fc-auth-brand-icon">FC</span>
            FoodConnect
          </Link>

          <span className="fc-auth-eyebrow">WELCOME BACK</span>
          <h2>Log in to FoodConnect</h2>
          <p className="fc-auth-subtitle">
            Choose your role to open your workspace.
          </p>

          <form className="fc-auth-form" onSubmit={handleSubmit}>
            <label htmlFor="login-role">I am logging in as</label>
            <select
              id="login-role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="restaurant">Restaurant / Food Donor</option>
              <option value="ngo">NGO</option>
              <option value="volunteer">Volunteer</option>
              <option value="admin">Administrator (Demo)</option>
            </select>

            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter any demo password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            {error && (
              <p className="fc-auth-error" role="alert">
                {error}
              </p>
            )}

            <button className="fc-auth-submit" type="submit">
              Log In →
            </button>
          </form>

          <p className="fc-auth-switch">
            New to FoodConnect? <Link to="/register">Get Started</Link>
          </p>

          <p className="fc-auth-demo-note">
            College project demo: any non-empty email and password will work.
            This page does not authenticate users or protect the admin route.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login

