function AdminDashboard() {
  const restaurants = [
    { id: 1, name: 'Food Palace', city: 'Jaipur', status: 'Active' },
    { id: 2, name: 'Spice Hub', city: 'Jaipur', status: 'Active' },
    { id: 3, name: 'Royal Kitchen', city: 'Jaipur', status: 'Active' },
  ]

  const ngos = [
    { id: 1, name: 'Helping Hands', city: 'Jaipur', status: 'Active' },
    { id: 2, name: 'Hope Foundation', city: 'Jaipur', status: 'Active' },
    { id: 3, name: 'Care For All', city: 'Jaipur', status: 'Active' },
  ]

  const volunteers = [
    { id: 1, name: 'Rahul Kumar', vehicle: 'Bike', status: 'Available' },
    { id: 2, name: 'Aman Gupta', vehicle: 'Car', status: 'Available' },
    { id: 3, name: 'Ravi Sharma', vehicle: 'Bike', status: 'Busy' },
  ]

  const donations = [
    {
      id: 1,
      food: 'Rice',
      quantity: '20 kg',
      restaurant: 'Food Palace',
      status: 'Available',
    },
    {
      id: 2,
      food: 'Dal',
      quantity: '10 kg',
      restaurant: 'Food Palace',
      status: 'Requested',
    },
    {
      id: 3,
      food: 'Chapati',
      quantity: '100 packets',
      restaurant: 'Spice Hub',
      status: 'Picked Up',
    },
    {
      id: 4,
      food: 'Vegetable Curry',
      quantity: '15 kg',
      restaurant: 'Royal Kitchen',
      status: 'Available',
    },
  ]

  return (
    <div className="dashboard-page">
        <div className="dashboard-topbar">
  <div>
    <span className="dashboard-label">ADMIN DASHBOARD</span>

    <h1>Manage FoodConnect</h1>

    <p>
      Monitor restaurants, NGOs, volunteers and food donations
      from one place.
    </p>
  </div>

  <div className="dashboard-role">
    <span className="dashboard-role-icon">⚙️</span>

    <div>
      <strong>Administrator</strong>
      <small>System Management</small>
    </div>
  </div>
</div>

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <span className="dashboard-label">
            ADMIN PORTAL
          </span>

          <h1>Admin Dashboard</h1>

          <p>
            Monitor FoodConnect activity and manage the
            complete food recovery network.
          </p>
        </div>

        <div className="admin-live-status">
          <span></span>
          System Active
        </div>

      </div>


      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">
          <div className="stat-icon">🏪</div>

          <div>
            <span>Restaurants</span>
            <h2>{restaurants.length}</h2>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div className="stat-icon">🤝</div>

          <div>
            <span>NGOs</span>
            <h2>{ngos.length}</h2>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div className="stat-icon">🚚</div>

          <div>
            <span>Volunteers</span>
            <h2>{volunteers.length}</h2>
          </div>
        </div>


        <div className="dashboard-stat-card">
          <div className="stat-icon">🍱</div>

          <div>
            <span>Donations</span>
            <h2>{donations.length}</h2>
          </div>
        </div>

      </div>


      {/* Recent Donations */}

      <div className="dashboard-card">

        <div className="card-heading">

          <div>
            <h2>Donation Activity</h2>

            <p>
              Monitor recent food donations across FoodConnect.
            </p>
          </div>

          <span className="donation-count">
            {donations.length} Records
          </span>

        </div>


        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Restaurant</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {donations.map((donation) => (

                <tr key={donation.id}>

                  <td>
                    <strong>{donation.food}</strong>
                  </td>

                  <td>
                    {donation.quantity}
                  </td>

                  <td>
                    {donation.restaurant}
                  </td>

                  <td>
                    <span className="admin-status">
                      {donation.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* Three Management Cards */}

      <div className="admin-management-grid">

        {/* Restaurants */}

        <div className="dashboard-card admin-management-card">

          <div className="admin-card-icon">
            🏪
          </div>

          <h2>Restaurants</h2>

          <p>
            Manage restaurants registered on FoodConnect.
          </p>

          <div className="admin-mini-list">

            {restaurants.map((restaurant) => (

              <div
                className="admin-mini-item"
                key={restaurant.id}
              >

                <div>
                  <strong>{restaurant.name}</strong>
                  <small>{restaurant.city}</small>
                </div>

                <span>
                  {restaurant.status}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* NGOs */}

        <div className="dashboard-card admin-management-card">

          <div className="admin-card-icon">
            🤝
          </div>

          <h2>NGOs</h2>

          <p>
            View NGOs participating in food distribution.
          </p>

          <div className="admin-mini-list">

            {ngos.map((ngo) => (

              <div
                className="admin-mini-item"
                key={ngo.id}
              >

                <div>
                  <strong>{ngo.name}</strong>
                  <small>{ngo.city}</small>
                </div>

                <span>
                  {ngo.status}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Volunteers */}

        <div className="dashboard-card admin-management-card">

          <div className="admin-card-icon">
            🚚
          </div>

          <h2>Volunteers</h2>

          <p>
            Monitor volunteer availability and assignments.
          </p>

          <div className="admin-mini-list">

            {volunteers.map((volunteer) => (

              <div
                className="admin-mini-item"
                key={volunteer.id}
              >

                <div>
                  <strong>{volunteer.name}</strong>
                  <small>{volunteer.vehicle}</small>
                </div>

                <span>
                  {volunteer.status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* System Overview */}

      <div className="dashboard-card admin-overview-card">

        <div className="card-heading">

          <div>
            <h2>FoodConnect Overview</h2>

            <p>
              Current status of the complete food recovery
              process.
            </p>
          </div>

        </div>


        <div className="admin-flow">

          <div className="admin-flow-step">

            <div>🏪</div>

            <strong>Restaurants</strong>

            <span>
              {restaurants.length} registered
            </span>

          </div>


          <div className="admin-flow-arrow">
            →
          </div>


          <div className="admin-flow-step">

            <div>🍱</div>

            <strong>Donations</strong>

            <span>
              {donations.length} listed
            </span>

          </div>


          <div className="admin-flow-arrow">
            →
          </div>


          <div className="admin-flow-step">

            <div>🤝</div>

            <strong>NGOs</strong>

            <span>
              {ngos.length} connected
            </span>

          </div>


          <div className="admin-flow-arrow">
            →
          </div>


          <div className="admin-flow-step">

            <div>🚚</div>

            <strong>Volunteers</strong>

            <span>
              {volunteers.length} registered
            </span>

          </div>


          <div className="admin-flow-arrow">
            →
          </div>


          <div className="admin-flow-step">

            <div>❤️</div>

            <strong>Distribution</strong>

            <span>
              Food reaches people
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard