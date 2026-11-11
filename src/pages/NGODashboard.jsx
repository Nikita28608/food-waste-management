
import { useState } from 'react'
import { Link } from 'react-router-dom'

const availableFood = [
  {
    id: 1,
    name: 'Fresh Vegetable Meals',
    restaurant: 'Food Palace',
    quantity: '20 kg',
    location: 'MI Road, Jaipur',
    expiry: 'Today, 8:00 PM',
    type: 'Cooked Food',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Fresh Dal',
    restaurant: 'Spice Hub',
    quantity: '10 kg',
    location: 'Vaishali Nagar, Jaipur',
    expiry: 'Today, 8:30 PM',
    type: 'Cooked Food',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Bread & Bakery Items',
    restaurant: 'Royal Kitchen',
    quantity: '50 packets',
    location: 'Mansarovar, Jaipur',
    expiry: 'Today, 9:00 PM',
    type: 'Bakery',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  },
]

function NGODashboard() {
  const [requests, setRequests] = useState([])
  const [notice, setNotice] = useState('')
  const [activeTab, setActiveTab] = useState('available')

  const handleRequest = (food) => {
    const alreadyRequested = requests.some(
      (request) => request.foodId === food.id
    )

    if (alreadyRequested) {
      setNotice(`You have already requested ${food.name}.`)
      return
    }

    setRequests((previous) => [
      {
        id: Date.now(),
        foodId: food.id,
        foodName: food.name,
        restaurant: food.restaurant,
        quantity: food.quantity,
        status: 'Pending',
      },
      ...previous,
    ])

    setNotice(`Request submitted for ${food.name}.`)
    setActiveTab('requests')
  }

  return (
    <div className="fc-dashboard-shell">
      <aside className="fc-sidebar">
        <Link to="/" className="fc-side-logo">
          <span className="fc-side-logo-mark">F</span>
          <span>FoodConnect</span>
        </Link>

        <div className="fc-side-section-label">NGO WORKSPACE</div>

        <nav className="fc-side-nav">
          <button
            className={`fc-side-link ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            <span>▦</span> Available Food
          </button>

          <button
            className={`fc-side-link ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            <span>▤</span> My Requests
          </button>

          <a className="fc-side-link" href="#ngo-impact">
            <span>♡</span> Community Impact
          </a>

          <a className="fc-side-link" href="#ngo-profile">
            <span>◎</span> NGO Profile
          </a>
        </nav>

        <div className="fc-sidebar-bottom">
          <div className="fc-side-help">
            <strong>Making a difference</strong>
            <p>Every successful request helps connect food with people in need.</p>
            <Link to="/about">Our mission →</Link>
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
            <span className="fc-eyebrow">COMMUNITY PARTNER</span>
            <h1>NGO Dashboard</h1>
            <p>Discover surplus food and help nourish your community.</p>
          </div>

          <div className="fc-dash-user">
            <span className="fc-user-avatar">N</span>
            <div>
              <strong>NGO Partner</strong>
              <span>Food recipient</span>
            </div>
          </div>
        </header>

        {notice && (
          <div className="fc-notice" role="status">
            <span>{notice}</span>
            <button
              onClick={() => setNotice('')}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}

        <section className="fc-dash-stats">
          <article className="fc-dash-stat">
            <span className="fc-stat-icon">▤</span>
            <span className="fc-stat-label">Available Listings</span>
            <strong>{availableFood.length}</strong>
            <span className="fc-stat-caption">Sample food listings</span>
          </article>

          <article className="fc-dash-stat">
            <span className="fc-stat-icon">↗</span>
            <span className="fc-stat-label">My Requests</span>
            <strong>{requests.length}</strong>
            <span className="fc-stat-caption">Requests submitted</span>
          </article>

          <article className="fc-dash-stat">
            <span className="fc-stat-icon">♡</span>
            <span className="fc-stat-label">People Served</span>
            <strong>—</strong>
            <span className="fc-stat-caption">Available after delivery tracking</span>
          </article>
        </section>

        <section className="fc-dash-panel">
          <div className="fc-panel-heading">
            <div>
              <span className="fc-eyebrow">FOOD RESCUE NETWORK</span>
              <h2>
                {activeTab === 'available'
                  ? 'Available Food'
                  : 'My Food Requests'}
              </h2>
              <p>
                {activeTab === 'available'
                  ? 'Browse surplus food shared by restaurant partners.'
                  : 'Review the food requests you have submitted.'}
              </p>
            </div>

            <div className="fc-ngo-tabs">
              <button
                className={activeTab === 'available' ? 'selected' : ''}
                onClick={() => setActiveTab('available')}
              >
                Available Food
              </button>
              <button
                className={activeTab === 'requests' ? 'selected' : ''}
                onClick={() => setActiveTab('requests')}
              >
                My Requests ({requests.length})
              </button>
            </div>
          </div>

          {activeTab === 'available' ? (
            <div className="fc-ngo-food-grid">
              {availableFood.map((food) => {
                const requested = requests.some(
                  (request) => request.foodId === food.id
                )

                return (
                  <article className="fc-ngo-food-card" key={food.id}>
                    <div className="fc-ngo-food-photo">
                      <img src={food.image} alt={food.name} loading="lazy" />
                      <span className="fc-status">
                        <span /> Available
                      </span>
                    </div>

                    <div className="fc-ngo-food-content">
                      <span className="fc-ngo-food-type">{food.type}</span>
                      <h3>{food.name}</h3>
                      <p className="fc-ngo-restaurant">{food.restaurant}</p>

                      <div className="fc-ngo-food-detail">
                        <span>Quantity</span>
                        <strong>{food.quantity}</strong>
                      </div>

                      <div className="fc-ngo-food-detail">
                        <span>Pickup location</span>
                        <strong>{food.location}</strong>
                      </div>

                      <div className="fc-ngo-food-detail">
                        <span>Best before</span>
                        <strong>{food.expiry}</strong>
                      </div>

                      <button
                        className={`fc-button ${requested ? 'fc-requested-button' : 'fc-button-primary'} fc-ngo-request-button`}
                        disabled={requested}
                        onClick={() => handleRequest(food)}
                      >
                        {requested ? 'Request Submitted ✓' : 'Request Food →'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : requests.length === 0 ? (
            <div className="fc-ngo-empty">
              <span>▤</span>
              <h3>No requests yet</h3>
              <p>Browse available food and submit your first request.</p>
              <button
                className="fc-button fc-button-primary"
                onClick={() => setActiveTab('available')}
              >
                Browse Food
              </button>
            </div>
          ) : (
            <div className="fc-table-scroll">
              <table className="fc-data-table">
                <thead>
                  <tr>
                    <th>Food Item</th>
                    <th>Restaurant</th>
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td><strong>{request.foodName}</strong></td>
                      <td>{request.restaurant}</td>
                      <td>{request.quantity}</td>
                      <td>
                        <span className="fc-table-status fc-status-requested">
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="fc-dashboard-photo" id="ngo-impact">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85"
            alt="Community food donation volunteers"
            loading="lazy"
          />
          <div>
            <span className="fc-eyebrow">COMMUNITY IMPACT</span>
            <h2>More food shared. More people supported.</h2>
            <p>Every coordinated donation is a step towards reducing food waste.</p>
          </div>
        </section>

        <section className="fc-profile-panel" id="ngo-profile">
          <h2>NGO Profile</h2>
          <p>
            Your organization details will be displayed here after backend
            integration. These requests currently exist only in frontend state.
          </p>
        </section>

        <footer className="fc-dash-footer">
          FoodConnect · Connecting food donors with communities.
        </footer>
      </main>
    </div>
  )
}

export default NGODashboard

