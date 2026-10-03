import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = (e) => {
  e.preventDefault()

  if (!role) {
    alert('Please select your role.')
    return
  }

  if (!email || !password) {
    alert('Please enter your email and password.')
    return
  }

  // Save the selected role for the frontend demo
  localStorage.setItem('foodconnectRole', role)

  if (role === 'restaurant') {
    navigate('/restaurant')
  } else if (role === 'ngo') {
    navigate('/ngo')
  } else if (role === 'volunteer') {
    navigate('/volunteer')
  }
}

  return (
    <div className="auth-page">

      <div className="auth-container">

        {/* Left Side */}

        <div className="auth-info">

          <div className="auth-logo">
            Food<span>Connect</span>
          </div>

          <span className="auth-label">
            WELCOME BACK
          </span>

          <h1>
            Continue your
            <br />
            <span>impact journey.</span>
          </h1>

          <p>
            Log in to manage your donations, requests, pickups
            and food distribution through FoodConnect.
          </p>

          <div className="auth-points">

            <div>
              <span>✓</span>
              Manage your activity
            </div>

            <div>
              <span>✓</span>
              Track food donations
            </div>

            <div>
              <span>✓</span>
              Stay connected with your community
            </div>

          </div>

        </div>


        {/* Login Card */}

        <div className="auth-card">

          <div className="auth-card-heading">

            <h2>Welcome back</h2>

            <p>
              Log in to your FoodConnect account.
            </p>

          </div>


          {/* Role Selection */}

          <div className="form-group">

            <label>
              Login as
            </label>

            <div className="role-options">

              <button
                type="button"
                className={
                  role === 'restaurant'
                    ? 'role-option active'
                    : 'role-option'
                }
                onClick={() => setRole('restaurant')}
              >
                <span>🏪</span>

                <strong>
                  Restaurant
                </strong>

                <small>
                  Manage donations
                </small>
              </button>


              <button
                type="button"
                className={
                  role === 'ngo'
                    ? 'role-option active'
                    : 'role-option'
                }
                onClick={() => setRole('ngo')}
              >
                <span>🤝</span>

                <strong>
                  NGO
                </strong>

                <small>
                  Manage requests
                </small>
              </button>


              <button
                type="button"
                className={
                  role === 'volunteer'
                    ? 'role-option active'
                    : 'role-option'
                }
                onClick={() => setRole('volunteer')}
              >
                <span>🚚</span>

                <strong>
                  Volunteer
                </strong>

                <small>
                  Manage deliveries
                </small>
              </button>

            </div>

          </div>


          {/* Login Form */}

          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />

            </div>


            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />

            </div>


            <div className="login-options">

              <label className="remember-me">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

              <a href="#">
                Forgot password?
              </a>

            </div>


            <button
              type="submit"
              className="auth-submit"
              disabled={!role}
            >
              Login →
            </button>

          </form>


          <p className="auth-switch">

            Don't have an account?{' '}

            <a href="/register">
              Create one
            </a>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Login
