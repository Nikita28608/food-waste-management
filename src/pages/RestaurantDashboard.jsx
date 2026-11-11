
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialDonations = [
  { id: 1, foodName: 'Cooked Rice', quantity: '50', unit: 'kg', status: 'Available', date: 'Today' },
  { id: 2, foodName: 'Vegetable Curry', quantity: '30', unit: 'kg', status: 'Requested', date: 'Yesterday' },
  { id: 3, foodName: 'Bread & Pastries', quantity: '20', unit: 'kg', status: 'Accepted', date: 'Yesterday' },
  { id: 4, foodName: 'Fresh Fruits', quantity: '25', unit: 'kg', status: 'Delivered', date: 'Earlier' },
]

const heroImage =
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85'

function RestaurantDashboard() {
  const [donations, setDonations] = useState(initialDonations)
  const [showForm, setShowForm] = useState(false)
  const [notice, setNotice] = useState('')

  const [formData, setFormData] = useState({
    foodName: '',
    foodType: 'Cooked Food',
    quantity: '',
    unit: 'kg',
    preparedTime: '',
    expiryTime: '',
  })

  const availableCount = donations.filter(
    (item) => item.status === 'Available'
  ).length

  const totalQuantity = donations.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0
  )

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.foodName.trim() ||
      !formData.quantity ||
      Number(formData.quantity) <= 0 ||
      !formData.preparedTime ||
      !formData.expiryTime
    ) {
      setNotice('Please complete all fields and enter a valid quantity.')
      return
    }

    if (
      new Date(formData.expiryTime) <= new Date(formData.preparedTime)
    ) {
      setNotice('Expiry time must be after the prepared time.')
      return
    }

    const newDonation = {
      id: Date.now(),
      ...formData,
      quantity: String(formData.quantity),
      status: 'Available',
      date: 'Just now',
    }

    setDonations((previous) => [newDonation, ...previous])
    setFormData({
      foodName: '',
      foodType: 'Cooked Food',
      quantity: '',
      unit: 'kg',
      preparedTime: '',
      expiryTime: '',
    })
    setNotice('Donation added successfully to this demo dashboard.')
    setShowForm(false)
  }

  return (
    <div className="fc-dashboard-shell">
      <aside className="fc-sidebar">
        <Link to="/" className="fc-side-logo">
          <span className="fc-side-logo-mark">F</span>
          <span>FoodConnect</span>
        </Link>

        <div className="fc-side-section-label">WORKSPACE</div>

        <nav className="fc-side-nav">
          <Link to="/restaurant" className="fc-side-link active">
            <span>▦</span> Dashboard
          </Link>
          <button
            className="fc-side-link"
            onClick={() => setShowForm(true)}
          >
            <span>＋</span> Add Donation
          </button>
          <a className="fc-side-link" href="#my-donations">
            <span>▤</span> My Donations
          </a>
          <a className="fc-side-link" href="#my-donations">
            <span>↗</span> Requests
          </a>
          <a className="fc-side-link" href="#restaurant-profile">
            <span>◎</span> Profile
          </a>
        </nav>

        <div className="fc-sidebar-bottom">
          <div className="fc-side-help">
            <strong>Need help?</strong>
            <p>Help us rescue more food, one donation at a time.</p>
            <Link to="/about">Learn more →</Link>
          </div>
          <button
            className="fc-side-link"
            onClick={() => {
              localStorage.removeItem('foodconnectRole')
              window.location.href = '/'
            }}
          >
            <span>↪</span> Logout
          </button>
        </div>
      </aside>

      <main className="fc-dashboard-main">
        <header className="fc-dash-topbar">
          <div>
            <span className="fc-eyebrow">RESTAURANT WORKSPACE</span>
            <h1>Restaurant Dashboard</h1>
            <p>Welcome back! Thank you for helping reduce food waste.</p>
          </div>
          <div className="fc-dash-user">
            <span className="fc-user-avatar">R</span>
            <div>
              <strong>Restaurant Partner</strong>
              <span>Food donor</span>
            </div>
          </div>
        </header>

        {notice && (
          <div className="fc-notice" role="status">
            <span>{notice}</span>
            <button onClick={() => setNotice('')} aria-label="Dismiss message">
              ×
            </button>
          </div>
        )}

        <section className="fc-dash-stats">
          <article className="fc-dash-stat">
            <span className="fc-stat-icon">▤</span>
            <span className="fc-stat-label">Total Donations</span>
            <strong>{donations.length + 8}</strong>
            <span className="fc-stat-caption">Including demo history</span>
          </article>
          <article className="fc-dash-stat">
            <span className="fc-stat-icon">♧</span>
            <span className="fc-stat-label">Available Donations</span>
            <strong>{availableCount}</strong>
            <span className="fc-stat-caption">Ready for requests</span>
          </article>
          <article className="fc-dash-stat">
            <span className="fc-stat-icon">↗</span>
            <span className="fc-stat-label">Food Listed</span>
            <strong>{totalQuantity} kg</strong>
            <span className="fc-stat-caption">Demo quantity total</span>
          </article>
        </section>

        <section className="fc-dash-panel" id="my-donations">
          <div className="fc-panel-heading">
            <div>
              <span className="fc-eyebrow">FOOD RESCUE</span>
              <h2>Recent Donations</h2>
              <p>Manage surplus food listed by your restaurant.</p>
            </div>
            <button
              className="fc-button fc-button-primary"
              onClick={() => {
                setNotice('')
                setShowForm((value) => !value)
              }}
            >
              {showForm ? 'Close Form' : '+ Add Donation'}
            </button>
          </div>

          {showForm && (
            <form className="fc-donation-form" onSubmit={handleSubmit}>
              <h3>Add a food donation</h3>

              <div className="fc-form-grid">
                <label>
                  Food name
                  <input
                    name="foodName"
                    value={formData.foodName}
                    onChange={handleChange}
                    placeholder="e.g. Vegetable Rice"
                    required
                  />
                </label>

                <label>
                  Food type
                  <select
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                  >
                    <option>Cooked Food</option>
                    <option>Fruits & Vegetables</option>
                    <option>Bread & Bakery</option>
                    <option>Packaged Food</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Quantity
                  <input
                    name="quantity"
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    required
                  />
                </label>

                <label>
                  Unit
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                  >
                    <option value="kg">Kilograms (kg)</option>
                    <option value="packets">Packets</option>
                    <option value="portions">Meal portions</option>
                    <option value="boxes">Boxes</option>
                  </select>
                </label>

                <label>
                  Prepared time
                  <input
                    name="preparedTime"
                    type="datetime-local"
                    value={formData.preparedTime}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Expiry time
                  <input
                    name="expiryTime"
                    type="datetime-local"
                    value={formData.expiryTime}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <button className="fc-button fc-button-primary" type="submit">
                Publish Donation
              </button>
            </form>
          )}

          <div className="fc-table-scroll">
            <table className="fc-data-table">
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Listed</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td>
                      <strong>{donation.foodName}</strong>
                      <span className="fc-table-subtitle">
                        {donation.foodType || 'Food donation'}
                      </span>
                    </td>
                    <td>
                      {donation.quantity} {donation.unit}
                    </td>
                    <td>
                      <span
                        className={`fc-table-status fc-status-${donation.status.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {donation.status}
                      </span>
                    </td>
                    <td>{donation.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="fc-dashboard-photo">
          <img src={heroImage} alt="Prepared food ready to be donated" loading="lazy" />
          <div>
            <span className="fc-eyebrow">EVERY MEAL MATTERS</span>
            <h2>Good food should never go to waste.</h2>
            <p>Your surplus can become someone's next meal.</p>
          </div>
        </section>

        <section className="fc-profile-panel" id="restaurant-profile">
          <h2>Restaurant Profile</h2>
          <p>
            This is a frontend demo. Your restaurant account details will
            appear here after backend integration.
          </p>
        </section>

        <footer className="fc-dash-footer">
          FoodConnect · Rescue food. Reduce waste. Nourish communities.
        </footer>
      </main>
    </div>
  )
}

export default RestaurantDashboard
