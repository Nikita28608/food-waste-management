import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [role, setRole] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    vehicleType: '',
    password: '',
    confirmPassword: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (!role) {
      alert('Please select your role.')
      return
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.city ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill all required fields.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.')
      return
    }

    if (role === 'volunteer' && !formData.vehicleType) {
      alert('Please select your vehicle type.')
      return
    }

    // Save the selected role for the frontend demo
    localStorage.setItem('foodconnectRole', role)

    alert('Account created successfully!')

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
            JOIN FOODCONNECT
          </span>

          <h1>
            Be part of the
            <br />
            <span>food recovery</span>
            movement.
          </h1>

          <p>
            Whether you have surplus food, need food for your
            community, or want to help transport donations,
            there's a place for you on FoodConnect.
          </p>

          <div className="auth-points">

            <div>
              <span>✓</span>
              Reduce food waste
            </div>

            <div>
              <span>✓</span>
              Help local communities
            </div>

            <div>
              <span>✓</span>
              Track every donation
            </div>

          </div>

        </div>


        {/* Registration Card */}

        <div className="auth-card">

          <div className="auth-card-heading">

            <h2>Create your account</h2>

            <p>
              Join FoodConnect in a few simple steps.
            </p>

          </div>


          {/* Role Selection */}

          <div className="form-group">

            <label>
              I want to join as
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
                  Donate surplus food
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
                  Request food donations
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
                  Pick up & deliver food
                </small>
              </button>

            </div>

          </div>


          {/* Registration Form */}

          <form onSubmit={handleRegister}>

            <div className="form-row">

              <div className="form-group">

                <label>
                  {role === 'restaurant'
                    ? 'Restaurant Name'
                    : role === 'ngo'
                    ? 'NGO Name'
                    : 'Full Name'}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    role === 'restaurant'
                      ? 'Enter restaurant name'
                      : role === 'ngo'
                      ? 'Enter NGO name'
                      : 'Enter your name'
                  }
                />

              </div>


              <div className="form-group">

                <label>
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>


            <div className="form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />

            </div>


            {/* Address */}

            {role !== 'volunteer' && (

              <div className="form-group">

                <label>
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />

              </div>

            )}


            {/* Volunteer Vehicle */}

            {role === 'volunteer' && (

              <div className="form-group">

                <label>
                  Vehicle Type
                </label>

                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select vehicle
                  </option>

                  <option value="Bike">
                    Bike
                  </option>

                  <option value="Car">
                    Car
                  </option>

                  <option value="Van">
                    Van
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

            )}


            <div className="form-row">

              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                />

              </div>


              <div className="form-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />

              </div>

            </div>


            <button
              type="submit"
              className="auth-submit"
              disabled={!role}
            >
              Create Account →
            </button>

          </form>


          <p className="auth-switch">

            Already have an account?{' '}

            <a href="/login">
              Login
            </a>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Register