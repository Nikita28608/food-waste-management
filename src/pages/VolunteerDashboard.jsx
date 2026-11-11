
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialAssignments = [
  {
    id: 1,
    food: 'Fresh Vegetable Meals',
    quantity: '20 kg',
    pickup: 'MI Road, Jaipur',
    delivery: 'Community Distribution Point, Jaipur',
    time: 'Today, 8:00 PM',
    status: 'Assigned',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    food: 'Bread & Bakery Items',
    quantity: '50 packets',
    pickup: 'Mansarovar, Jaipur',
    delivery: 'Community Food Centre, Jaipur',
    time: 'Today, 8:30 PM',
    status: 'Picked Up',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    food: 'Fresh Fruit Boxes',
    quantity: '15 boxes',
    pickup: 'Vaishali Nagar, Jaipur',
    delivery: 'Community Distribution Point, Jaipur',
    time: 'Today, 9:00 PM',
    status: 'Out for Delivery',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
  },

]

const statusSteps = [
  'Assigned',
  'Picked Up',
  'Out for Delivery',
  'Completed',
]

function VolunteerDashboard() {
  const [assignments, setAssignments] = useState(initialAssignments)
  const [activeTab, setActiveTab] = useState('assignments')
  const [notice, setNotice] = useState('')

  const completed = assignments.filter(
    (item) => item.status === 'Completed'
  )

  const activeAssignments = assignments.filter(
    (item) => item.status !== 'Completed'
  )

  const deliveredQuantity = completed.reduce((total, item) => {
    const quantity = parseFloat(item.quantity)
    return total + (Number.isNaN(quantity) ? 0 : quantity)
  }, 0)

  const updateStatus = (id) => {
    const assignment = assignments.find((item) => item.id === id)
    if (!assignment) return

    const currentIndex = statusSteps.indexOf(assignment.status)
    if (currentIndex < 0 || currentIndex === statusSteps.length - 1) return

    const nextStatus = statusSteps[currentIndex + 1]

    setAssignments((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item
      )
    )

    setNotice(
      nextStatus === 'Completed'
        ? 'Delivery completed successfully!'
        : `Assignment updated to "${nextStatus}".`
    )
  }

  const getActionLabel = (status) => {
    if (status === 'Assigned') return 'Confirm Pickup'
    if (status === 'Picked Up') return 'Start Delivery'
    if (status === 'Out for Delivery') return 'Complete Delivery'
    return 'Completed'
  }

  const getStatusClass = (status) => {
    if (status === 'Completed') return 'fc-status-completed'
    if (status === 'Out for Delivery') return 'fc-status-transit'
    if (status === 'Picked Up') return 'fc-status-picked'
    return 'fc-status-assigned'
  }

  const logout = () => {
    localStorage.removeItem('foodconnectRole')
    window.location.href = '/'
  }

  return (
    <div className="fc-dashboard-shell">
      <aside className="fc-sidebar">
        <Link to="/" className="fc-side-brand">
          <span className="fc-side-brand-icon">FC</span>
          <span>FoodConnect</span>
        </Link>

        <div className="fc-side-user">
          <div className="fc-avatar">V</div>
          <div>
            <strong>Volunteer</strong>
            <span>Delivery Partner</span>
          </div>
        </div>

        <p className="fc-side-label">WORKSPACE</p>

        <button
          className={`fc-side-link ${activeTab === 'assignments' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('assignments')
            setNotice('')
          }}
        >
          <span>▦</span> My Assignments
        </button>

        <button
          className={`fc-side-link ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('completed')
            setNotice('')
          }}
        >
          <span>✓</span> Completed Deliveries
        </button>

        <button
          className={`fc-side-link ${activeTab === 'impact' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('impact')
            setNotice('')
          }}
        >
          <span>♡</span> My Impact
        </button>

        <button
          className={`fc-side-link ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('profile')
            setNotice('')
          }}
        >
          <span>◎</span> My Profile
        </button>

        <div className="fc-sidebar-bottom">
          <div className="fc-sidebar-help">
            <strong>Making a difference!</strong>
            <p>Every delivery brings a meal closer to someone in need.</p>
          </div>
          <button className="fc-side-link fc-logout" onClick={logout}>
            <span>↪</span> Log Out
          </button>
        </div>
      </aside>

      <main className="fc-dashboard-main">
        <header className="fc-dash-topbar">
          <div>
            <p className="fc-dash-eyebrow">VOLUNTEER WORKSPACE</p>
            <h1>
              {activeTab === 'assignments' && 'My Assignments'}
              {activeTab === 'completed' && 'Completed Deliveries'}
              {activeTab === 'impact' && 'My Community Impact'}
              {activeTab === 'profile' && 'My Profile'}
            </h1>
          </div>
          <Link to="/" className="fc-dashboard-home-link">
            Visit Website ↗
          </Link>
        </header>

        {notice && (
          <div className="fc-volunteer-notice" role="status">
            <span>✓</span> {notice}
            <button onClick={() => setNotice('')} aria-label="Dismiss message">
              ×
            </button>
          </div>
        )}

        <section className="fc-dash-welcome">
          <div>
            <span className="fc-welcome-tag">YOUR KINDNESS COUNTS</span>
            <h2>Every delivery makes a difference.</h2>
            <p>
              Collect surplus food, deliver it safely, and help your community
              fight food waste.
            </p>
            <button
              className="fc-volunteer-primary"
              onClick={() => {
                setActiveTab('assignments')
                setNotice('')
              }}
            >
              View My Assignments →
            </button>
          </div>
            <img
  className="fc-volunteer-welcome-image"
  src="https://sowhatelse.org/wp-content/uploads/2024/08/food-bank-volunteer-1.jpg"
  alt="Volunteers preparing food for distribution"
/>
        </section>

        <section className="fc-dash-stats">
          <div className="fc-stat-card">
            <div className="fc-stat-icon">▦</div>
            <span>Active Assignments</span>
            <strong>{activeAssignments.length}</strong>
            <small>Deliveries in progress</small>
          </div>

          <div className="fc-stat-card">
            <div className="fc-stat-icon">✓</div>
            <span>Completed Deliveries</span>
            <strong>{completed.length}</strong>
            <small>Successfully delivered</small>
          </div>

          <div className="fc-stat-card">
            <div className="fc-stat-icon">♧</div>
            <span>Completed Food Items</span>
            <strong>{deliveredQuantity}</strong>
            <small>Sum of displayed quantities</small>
          </div>

          <div className="fc-stat-card">
            <div className="fc-stat-icon">♡</div>
            <span>People Helped</span>
            <strong>—</strong>
            <small>Impact tracking not connected</small>
          </div>
        </section>

        {activeTab === 'assignments' && (
          <section className="fc-dash-panel fc-volunteer-assignments">
            <div className="fc-panel-heading">
              <div>
                <h2>Delivery Assignments</h2>
                <p>Track each donation from pickup to delivery.</p>
              </div>
              <span className="fc-assignment-count">
                {activeAssignments.length} active
              </span>
            </div>

            {assignments.length === 0 ? (
              <div className="fc-ngo-empty">
                <h3>No assignments yet</h3>
                <p>Your new volunteer assignments will appear here.</p>
              </div>
            ) : (
              <div className="fc-volunteer-list">
                {assignments.map((item) => (
                  <article className="fc-volunteer-card" key={item.id}>
                    <img src={item.image} alt={item.food} />

                    <div className="fc-volunteer-card-body">
                      <div className="fc-volunteer-card-heading">
                        <div>
                          <h3>{item.food}</h3>
                          <p>Volunteer food collection assignment</p>
                        </div>
                        <span className={`fc-status-pill ${getStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </div>

                      <div className="fc-volunteer-details">
                        <div>
                          <span className="fc-detail-icon">□</span>
                          <div>
                            <small>Quantity</small>
                            <strong>{item.quantity}</strong>
                          </div>
                        </div>
                        <div>
                          <span className="fc-detail-icon">⌖</span>
                          <div>
                            <small>Pickup location</small>
                            <strong>{item.pickup}</strong>
                          </div>
                        </div>
                        <div>
                          <span className="fc-detail-icon">⌖</span>
                          <div>
                            <small>Deliver to</small>
                            <strong>{item.delivery}</strong>
                          </div>
                        </div>
                        <div>
                          <span className="fc-detail-icon">◷</span>
                          <div>
                            <small>Scheduled time</small>
                            <strong>{item.time}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="fc-volunteer-card-footer">
                        <div className="fc-progress-track" aria-label={`Status: ${item.status}`}>
                          {statusSteps.map((step, index) => (
                            <span
                              key={step}
                              className={
                                index <= statusSteps.indexOf(item.status)
                                  ? 'fc-progress-step done'
                                  : 'fc-progress-step'
                              }
                              title={step}
                            />
                          ))}
                        </div>

                        {item.status !== 'Completed' ? (
                          <button
                            className="fc-volunteer-primary"
                            onClick={() => updateStatus(item.id)}
                          >
                            {getActionLabel(item.status)} →
                          </button>
                        ) : (
                          <span className="fc-volunteer-finished">✓ Delivery Complete</span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'completed' && (
          <section className="fc-dash-panel">
            <div className="fc-panel-heading">
              <div>
                <h2>Completed Deliveries</h2>
                <p>Your successfully completed assignments.</p>
              </div>
            </div>

            {completed.length === 0 ? (
              <div className="fc-ngo-empty">
                <h3>No completed deliveries yet</h3>
                <p>Finish an assignment to see it listed here.</p>
                <button
                  className="fc-volunteer-primary"
                  onClick={() => setActiveTab('assignments')}
                >
                  Go to assignments →
                </button>
              </div>
            ) : (
              <div className="fc-volunteer-list">
                {completed.map((item) => (
                  <article className="fc-volunteer-card" key={item.id}>
                    <img src={item.image} alt={item.food} />
                    <div className="fc-volunteer-card-body">
                      <div className="fc-volunteer-card-heading">
                        <div>
                          <h3>{item.food}</h3>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        <span className="fc-status-pill fc-status-completed">
                          Completed ✓
                        </span>
                      </div>
                      <p className="fc-completed-route">
                        Pickup: {item.pickup} → Delivered to: {item.delivery}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'impact' && (
          <section className="fc-dash-panel fc-volunteer-impact">
            <h2>Your Contribution Matters</h2>
            <p>
              Thank you for helping connect surplus food with people who need it.
              Your current figures are based on this demo dashboard.
            </p>
            <div className="fc-impact-number-grid">
              <div>
                <strong>{completed.length}</strong>
                <span>Deliveries completed</span>
              </div>
              <div>
                <strong>{deliveredQuantity}</strong>
                <span>Displayed quantity total</span>
              </div>
              <div>
                <strong>{activeAssignments.length}</strong>
                <span>Assignments remaining</span>
              </div>
            </div>
            <button
              className="fc-volunteer-primary"
              onClick={() => setActiveTab('assignments')}
            >
              Continue volunteering →
            </button>
          </section>
        )}

        {activeTab === 'profile' && (
          <section className="fc-dash-panel fc-volunteer-profile">
            <div className="fc-profile-avatar-large">V</div>
            <h2>Volunteer Profile</h2>
            <p>Community Volunteer</p>
            <div className="fc-profile-info-row">
              <span>Role</span>
              <strong>Volunteer</strong>
            </div>
            <div className="fc-profile-info-row">
              <span>Dashboard status</span>
              <strong>Demo account</strong>
            </div>
            <div className="fc-profile-info-row">
              <span>Completed deliveries</span>
              <strong>{completed.length}</strong>
            </div>
            <p className="fc-profile-demo-note">
              This prototype does not save profile details to a database.
            </p>
          </section>
        )}

        <footer className="fc-dashboard-footer">
          <span>© 2026 FoodConnect</span>
          <span>Reducing waste. Sharing hope.</span>
        </footer>
      </main>
    </div>
  )
}

export default VolunteerDashboard
