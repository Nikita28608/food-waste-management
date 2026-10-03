import { useState } from 'react'

function RestaurantDashboard() {
    const restaurantName = 'Food Palace'
  const [donations, setDonations] = useState([])

  const [formData, setFormData] = useState({
    foodName: '',
    foodType: '',
    quantity: '',
    unit: '',
    preparedTime: '',
    expiryTime: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.foodName ||
      !formData.foodType ||
      !formData.quantity ||
      !formData.unit ||
      !formData.preparedTime ||
      !formData.expiryTime
    ) {
      alert('Please fill all donation details.')
      return
    }

    if (Number(formData.quantity) <= 0) {
      alert('Quantity must be greater than 0.')
      return
    }

    if (
      new Date(formData.expiryTime) <=
      new Date(formData.preparedTime)
    ) {
      alert('Expiry time must be after prepared time.')
      return
    }

    const newDonation = {
      id: Date.now(),
      ...formData,
      status: 'Available',
    }

    setDonations([newDonation, ...donations])

    setFormData({
      foodName: '',
      foodType: '',
      quantity: '',
      unit: '',
      preparedTime: '',
      expiryTime: '',
    })

    alert('Food donation created successfully!')
  }

  return (
    <div className="dashboard-page">

        <div className="dashboard-topbar">
  <div>
    <span className="dashboard-label">RESTAURANT DASHBOARD</span>
    <h1>Manage Your Food Donations</h1>
    <p>
      Add surplus food and track your donations from one place.
    </p>
  </div>

  <div className="dashboard-role">
    <span className="dashboard-role-icon">🏪</span>
    <div>
      <strong>Restaurant</strong>
      <small>FoodConnect Partner</small>
    </div>
  </div>
</div>

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">
            RESTAURANT PORTAL
          </span>

          <h1>Restaurant Dashboard</h1>

          <p>
            Manage your surplus food donations and track their journey.
          </p>
        </div>

        <button
          className="dashboard-primary-button"
          onClick={() =>
            document
              .getElementById('donation-form')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          + Add Donation
        </button>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">🍱</div>

          <div>
            <span>Total Donations</span>
            <h2>{donations.length}</h2>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <span>Active Donations</span>
            <h2>
              {
                donations.filter(
                  (donation) => donation.status === 'Available'
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">❤️</div>

          <div>
            <span>People Served</span>
            <h2>0</h2>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon">♻️</div>

          <div>
            <span>Food Recovered</span>
            <h2>0 kg</h2>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="dashboard-grid">

        {/* Donation Form */}
        <div
          className="dashboard-card donation-form-card"
          id="donation-form"
        >

          <div className="card-heading">
            <div>
              <h2>Add Food Donation</h2>
              <p>
                List your surplus food for NGOs.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="dashboard-form-row">

              <div className="dashboard-form-group">
                <label>Food Name</label>

                <input
                  type="text"
                  name="foodName"
                  value={formData.foodName}
                  onChange={handleChange}
                  placeholder="e.g. Rice, Dal, Chapati"
                />
              </div>

              <div className="dashboard-form-group">
                <label>Food Type</label>

                <select
                  name="foodType"
                  value={formData.foodType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select food type
                  </option>

                  <option value="Cooked Food">
                    Cooked Food
                  </option>

                  <option value="Raw Food">
                    Raw Food
                  </option>

                  <option value="Packaged Food">
                    Packaged Food
                  </option>

                  <option value="Bakery">
                    Bakery
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

            </div>

            <div className="dashboard-form-row">

              <div className="dashboard-form-group">
                <label>Quantity</label>

                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="dashboard-form-group">
                <label>Unit</label>

                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                >
                  <option value="">
                    Select unit
                  </option>

                  <option value="kg">kg</option>
                  <option value="grams">grams</option>
                  <option value="packets">packets</option>
                  <option value="plates">plates</option>
                  <option value="litres">litres</option>
                </select>
              </div>

            </div>

            <div className="dashboard-form-row">

              <div className="dashboard-form-group">
                <label>Prepared Time</label>

                <input
                  type="datetime-local"
                  name="preparedTime"
                  value={formData.preparedTime}
                  onChange={handleChange}
                />
              </div>

              <div className="dashboard-form-group">
                <label>Expiry Time</label>

                <input
                  type="datetime-local"
                  name="expiryTime"
                  value={formData.expiryTime}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button
              type="submit"
              className="dashboard-submit-button"
            >
              Create Donation →
            </button>

          </form>

        </div>

        {/* Recent Donations */}
        <div className="dashboard-card">

          <div className="card-heading">

            <div>
              <h2>Recent Donations</h2>

              <p>
                Your latest food donations.
              </p>
            </div>

            <button className="view-all-button">
              View All
            </button>

          </div>

          {donations.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                🍱
              </div>

              <h3>No donations yet</h3>

              <p>
                Your food donations will appear here once
                you create your first donation.
              </p>

              <button
                className="empty-button"
                onClick={() =>
                  document
                    .getElementById('donation-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                + Add Your First Donation
              </button>

            </div>

          ) : (

            <div className="donation-list">

              {donations.map((donation) => (

                <div
                  className="donation-item"
                  key={donation.id}
                >

                  <div className="donation-item-icon">
                    🍱
                  </div>

                  <div className="donation-item-info">

                    <h3>{donation.foodName}</h3>

                    <p>
                      {donation.quantity} {donation.unit}
                      {' • '}
                      {donation.foodType}
                    </p>

                  </div>

                  <span className="donation-status">
                    {donation.status}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

            {/* My Donations */}
      <div className="dashboard-card my-donations-card">

        <div className="card-heading">
          <div>
            <h2>My Donations</h2>
            <p>Track all food donations from your restaurant.</p>
          </div>

          <span className="donation-count">
            {donations.length} Donations
          </span>
        </div>

        {donations.length === 0 ? (

          <div className="my-donations-empty">
            <div className="empty-icon">🍱</div>

            <h3>No donations available</h3>

            <p>
              Create your first food donation to see it here.
            </p>
          </div>

        ) : (

          <div className="donations-table-wrapper">

            <table className="donations-table">

              <thead>
                <tr>
                  <th>Food</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Prepared</th>
                  <th>Expires</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {donations.map((donation) => (

                  <tr key={donation.id}>

                    <td>
                      <div className="table-food">
                        <div className="table-food-icon">
                          🍱
                        </div>

                        <strong>
                          {donation.foodName}
                        </strong>
                      </div>
                    </td>

                    <td>
                      {donation.foodType}
                    </td>

                    <td>
                      <strong>
                        {donation.quantity}
                      </strong>{' '}
                      {donation.unit}
                    </td>

                    <td>
                      {new Date(
                        donation.preparedTime
                      ).toLocaleString()}
                    </td>

                    <td>
                      {new Date(
                        donation.expiryTime
                      ).toLocaleString()}
                    </td>

                    <td>
                      <span className="table-status">
                        {donation.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

      {/* Donation Journey */}
      <div className="dashboard-card journey-card">

        <div className="card-heading">

          <div>
            <h2>Donation Journey</h2>

            <p>
              Track how your surplus food reaches people.
            </p>
          </div>

        </div>

        <div className="journey">

          <div className="journey-step active">
            <div className="journey-number">
              1
            </div>

            <h3>Donation</h3>

            <p>Food listed</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-number">
              2
            </div>

            <h3>NGO Request</h3>

            <p>NGO requests food</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-number">
              3
            </div>

            <h3>Pickup</h3>

            <p>Volunteer collects</p>
          </div>

          <div className="journey-line"></div>

          <div className="journey-step">
            <div className="journey-number">
              4
            </div>

            <h3>Distribution</h3>

            <p>Food reaches people</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default RestaurantDashboard