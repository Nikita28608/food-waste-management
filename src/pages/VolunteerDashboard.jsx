import { useState } from 'react'

function VolunteerDashboard() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      foodName: 'Rice',
      quantity: '15 kg',
      restaurant: 'Food Palace',
      pickupLocation: 'MI Road, Jaipur',
      deliveryLocation: 'Mansarovar, Jaipur',
      ngo: 'Helping Hands',
      pickupTime: 'Today, 7:00 PM',
      status: 'Assigned',
    },
    {
      id: 2,
      foodName: 'Chapati',
      quantity: '50 packets',
      restaurant: 'Spice Hub',
      pickupLocation: 'Vaishali Nagar, Jaipur',
      deliveryLocation: 'Vaishali Nagar, Jaipur',
      ngo: 'Hope Foundation',
      pickupTime: 'Today, 8:00 PM',
      status: 'Assigned',
    },
  ])

  const [completed, setCompleted] = useState([])

  const updateStatus = (id, newStatus) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: newStatus }
          : assignment
      )
    )
  }

  const completeDelivery = (assignment) => {
    const completedAssignment = {
      ...assignment,
      status: 'Completed',
    }

    setCompleted([completedAssignment, ...completed])

    setAssignments(
      assignments.filter(
        (item) => item.id !== assignment.id
      )
    )

    alert('Delivery completed successfully!')
  }

  return (
    <div className="dashboard-page">
        <div className="dashboard-topbar">
  <div>
    <span className="dashboard-label">VOLUNTEER DASHBOARD</span>

    <h1>Deliver Food, Create Impact</h1>

    <p>
      Manage your pickups, deliveries and community impact
      through FoodConnect.
    </p>
  </div>

  <div className="dashboard-role">
    <span className="dashboard-role-icon">🚚</span>

    <div>
      <strong>Volunteer</strong>
      <small>FoodConnect Partner</small>
    </div>
  </div>
</div>

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <span className="dashboard-label">
            VOLUNTEER PORTAL
          </span>

          <h1>Volunteer Dashboard</h1>

          <p>
            Manage your food pickups, deliveries and completed
            contributions.
          </p>
        </div>

        <div className="volunteer-availability">
          <span className="availability-dot"></span>
          Available for Pickup
        </div>

      </div>


      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            🚚
          </div>

          <div>
            <span>Active Assignments</span>
            <h2>{assignments.length}</h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <div className="stat-icon">
            📦
          </div>

          <div>
            <span>Completed Deliveries</span>
            <h2>{completed.length}</h2>
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
            <span>Food Delivered</span>
            <h2>15 kg</h2>
          </div>

        </div>

      </div>


      {/* Active Assignments */}

      <div className="dashboard-card">

        <div className="card-heading">

          <div>
            <h2>My Assignments</h2>

            <p>
              Food pickups and deliveries assigned to you.
            </p>
          </div>

          <span className="donation-count">
            {assignments.length} Active
          </span>

        </div>


        {assignments.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              🚚
            </div>

            <h3>
              No active assignments
            </h3>

            <p>
              New pickup assignments will appear here.
            </p>

          </div>

        ) : (

          <div className="assignment-list">

            {assignments.map((assignment) => (

              <div
                className="assignment-card"
                key={assignment.id}
              >

                <div className="assignment-top">

                  <div className="assignment-food">

                    <div className="assignment-icon">
                      🍱
                    </div>

                    <div>
                      <h3>
                        {assignment.foodName}
                      </h3>

                      <p>
                        {assignment.quantity}
                      </p>
                    </div>

                  </div>

                  <span className="assignment-status">
                    {assignment.status}
                  </span>

                </div>


                <div className="assignment-route">

                  <div className="route-point">

                    <span className="route-dot pickup-dot">
                      ●
                    </span>

                    <div>
                      <small>Pickup From</small>

                      <strong>
                        {assignment.restaurant}
                      </strong>

                      <p>
                        📍 {assignment.pickupLocation}
                      </p>
                    </div>

                  </div>


                  <div className="route-line"></div>


                  <div className="route-point">

                    <span className="route-dot delivery-dot">
                      ●
                    </span>

                    <div>
                      <small>Deliver To</small>

                      <strong>
                        {assignment.ngo}
                      </strong>

                      <p>
                        📍 {assignment.deliveryLocation}
                      </p>
                    </div>

                  </div>

                </div>


                <div className="assignment-footer">

                  <div className="pickup-time">
                    🕐 {assignment.pickupTime}
                  </div>


                  <div className="assignment-actions">

                    {assignment.status === 'Assigned' && (
                      <button
                        className="assignment-button"
                        onClick={() =>
                          updateStatus(
                            assignment.id,
                            'Picked Up'
                          )
                        }
                      >
                        Confirm Pickup
                      </button>
                    )}


                    {assignment.status === 'Picked Up' && (
                      <button
                        className="assignment-button"
                        onClick={() =>
                          updateStatus(
                            assignment.id,
                            'Out for Delivery'
                          )
                        }
                      >
                        Start Delivery
                      </button>
                    )}


                    {assignment.status === 'Out for Delivery' && (
                      <button
                        className="assignment-button"
                        onClick={() =>
                          completeDelivery(assignment)
                        }
                      >
                        Complete Delivery
                      </button>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* Completed Deliveries */}

      <div className="dashboard-card">

        <div className="card-heading">

          <div>
            <h2>Completed Deliveries</h2>

            <p>
              Your successfully completed food deliveries.
            </p>
          </div>

        </div>


        {completed.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              ❤️
            </div>

            <h3>
              No completed deliveries yet
            </h3>

            <p>
              Completed deliveries will appear here.
            </p>

          </div>

        ) : (

          <div className="completed-list">

            {completed.map((item) => (

              <div
                className="completed-item"
                key={item.id}
              >

                <div className="completed-icon">
                  ✓
                </div>

                <div className="completed-info">

                  <h3>
                    {item.foodName} — {item.quantity}
                  </h3>

                  <p>
                    {item.restaurant}
                    {' → '}
                    {item.ngo}
                  </p>

                </div>

                <span className="completed-status">
                  Completed
                </span>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* Volunteer Journey */}

      <div className="dashboard-card journey-card">

        <div className="card-heading">

          <div>
            <h2>Delivery Journey</h2>

            <p>
              Complete each step to deliver food successfully.
            </p>
          </div>

        </div>


        <div className="journey">

          <div className="journey-step active">

            <div className="journey-number">
              1
            </div>

            <h3>Assigned</h3>

            <p>
              Receive pickup
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              2
            </div>

            <h3>Pickup</h3>

            <p>
              Collect food
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              3
            </div>

            <h3>Delivery</h3>

            <p>
              Transport food
            </p>

          </div>


          <div className="journey-line"></div>


          <div className="journey-step">

            <div className="journey-number">
              4
            </div>

            <h3>Completed</h3>

            <p>
              NGO receives food
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default VolunteerDashboard