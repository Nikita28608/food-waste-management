import { useState } from 'react'

function NGODashboard() {
  const [requests, setRequests] = useState([])

  const [availableFood] = useState([
    {
      id: 1,
      foodName: 'Rice',
      foodType: 'Cooked Food',
      quantity: 20,
      unit: 'kg',
      restaurant: 'Food Palace',
      location: 'Jaipur',
      expiry: 'Today, 8:00 PM',
    },
    {
      id: 2,
      foodName: 'Dal',
      foodType: 'Cooked Food',
      quantity: 10,
      unit: 'kg',
      restaurant: 'Food Palace',
      location: 'Jaipur',
      expiry: 'Today, 8:00 PM',
    },
    {
      id: 3,
      foodName: 'Chapati',
      foodType: 'Prepared Food',
      quantity: 100,
      unit: 'packets',
      restaurant: 'Spice Hub',
      location: 'Jaipur',
      expiry: 'Today, 9:00 PM',
    },
    {
      id: 4,
      foodName: 'Vegetable Curry',
      foodType: 'Cooked Food',
      quantity: 15,
      unit: 'kg',
      restaurant: 'Royal Kitchen',
      location: 'Jaipur',
      expiry: 'Today, 8:30 PM',
    },
  ])

  const handleRequest = (food) => {
    const alreadyRequested = requests.some(
      (request) => request.foodId === food.id
    )

    if (alreadyRequested) {
      alert('You have already requested this donation.')
      return
    }

    const newRequest = {
      id: Date.now(),
      foodId: food.id,
      foodName: food.foodName,
      quantity: food.quantity,
      unit: food.unit,
      restaurant: food.restaurant,
      status: 'Pending',
    }

    setRequests([newRequest, ...requests])

    alert(`Request sent for ${food.foodName}!`)
  }

  return (
    <div className="dashboard-page">
        <div className="dashboard-topbar">
  <div>
    <span className="dashboard-label">NGO DASHBOARD</span>

    <h1>Find Food & Serve Communities</h1>

    <p>
      Discover available food donations and request what your
      community needs.
    </p>
  </div>

  <div className="dashboard-role">
    <span className="dashboard-role-icon">🤝</span>

    <div>
      <strong>NGO</strong>
      <small>FoodConnect Partner</small>
    </div>
  </div>
</div>

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <span className="dashboard-label">
            NGO PORTAL
          </span>

          <h1>NGO Dashboard</h1>

          <p>
            Discover available food donations and request what
            your community needs.
          </p>
        </div>

        <button
          className="dashboard-primary-button"
          onClick={() =>
            document
              .getElementById('available-food')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          View Available Food
        </button>

      </div>


      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            🍱
          </div>

          <div>
            <span>Available Donations</span>
            <h2>{availableFood.length}</h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            📋
          </div>

          <div>
            <span>My Requests</span>
            <h2>{requests.length}</h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            ❤️
          </div>

          <div>
            <span>People Served</span>
            <h2>60</h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            ♻️
          </div>

          <div>
            <span>Food Received</span>
            <h2>15 kg</h2>
          </div>

        </div>

      </div>


      {/* Available Food */}

      <div
        className="dashboard-card"
        id="available-food"
      >

        <div className="card-heading">

          <div>
            <h2>Available Food</h2>

            <p>
              Food donations currently available from restaurants.
            </p>
          </div>

          <span className="donation-count">
            {availableFood.length} Available
          </span>

        </div>


        <div className="ngo-food-grid">

          {availableFood.map((food) => {

            const requested = requests.some(
              (request) => request.foodId === food.id
            )

            return (
              <div
                className="ngo-food-card"
                key={food.id}
              >

                <div className="ngo-food-top">

                  <div className="ngo-food-icon">
                    🍱
                  </div>

                  <span className="food-available">
                    Available
                  </span>

                </div>


                <h3>
                  {food.foodName}
                </h3>

                <p className="food-type">
                  {food.foodType}
                </p>


                <div className="ngo-food-details">

                  <div>
                    <span>Quantity</span>

                    <strong>
                      {food.quantity} {food.unit}
                    </strong>
                  </div>

                  <div>
                    <span>Expires</span>

                    <strong>
                      {food.expiry}
                    </strong>
                  </div>

                </div>


                <div className="ngo-food-restaurant">

                  <span>Restaurant</span>

                  <strong>
                    🏪 {food.restaurant}
                  </strong>

                  <small>
                    📍 {food.location}
                  </small>

                </div>


                <button
                  className={
                    requested
                      ? 'ngo-request-button requested'
                      : 'ngo-request-button'
                  }
                  onClick={() => handleRequest(food)}
                  disabled={requested}
                >
                  {requested
                    ? '✓ Request Sent'
                    : 'Request Food →'}
                </button>

              </div>
            )

          })}

        </div>

      </div>


      {/* My Requests */}

      <div className="dashboard-card">

        <div className="card-heading">

          <div>
            <h2>My Requests</h2>

            <p>
              Track the food donations requested by your NGO.
            </p>
          </div>

        </div>


        {requests.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              📋
            </div>

            <h3>
              No requests yet
            </h3>

            <p>
              Your food requests will appear here.
            </p>

            <button
              className="empty-button"
              onClick={() =>
                document
                  .getElementById('available-food')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Browse Available Food
            </button>

          </div>

        ) : (

          <div className="ngo-request-list">

            {requests.map((request) => (

              <div
                className="ngo-request-item"
                key={request.id}
              >

                <div className="ngo-request-icon">
                  🍱
                </div>


                <div className="ngo-request-info">

                  <h3>
                    {request.foodName}
                  </h3>

                  <p>
                    {request.quantity} {request.unit}
                    {' • '}
                    {request.restaurant}
                  </p>

                </div>


                <span className="ngo-request-status">
                  {request.status}
                </span>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* NGO Journey */}

      <div className="dashboard-card journey-card">

        <div className="card-heading">

          <div>
            <h2>Food Recovery Journey</h2>

            <p>
              See how requested food reaches your NGO.
            </p>
          </div>

        </div>


        <div className="journey">

          <div className="journey-step active">

            <div className="journey-number">
              1
            </div>

            <h3>Find Food</h3>

            <p>
              Browse donations
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              2
            </div>

            <h3>Request</h3>

            <p>
              Request food
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              3
            </div>

            <h3>Pickup</h3>

            <p>
              Volunteer collects
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              4
            </div>

            <h3>Receive</h3>

            <p>
              Food reaches NGO
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default NGODashboard