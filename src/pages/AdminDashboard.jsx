
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialUsers = [
  { id: 1, name: 'Food Palace', email: 'foodpalace@example.com', role: 'Restaurant', status: 'Active' },
  { id: 2, name: 'Helping Hands NGO', email: 'helpinghands@example.com', role: 'NGO', status: 'Active' },
  { id: 3, name: 'Aarav Sharma', email: 'aarav@example.com', role: 'Volunteer', status: 'Active' },
  { id: 4, name: 'Royal Kitchen', email: 'royalkitchen@example.com', role: 'Restaurant', status: 'Pending' },
  { id: 5, name: 'Hope Foundation', email: 'hope@example.com', role: 'NGO', status: 'Active' },
]

const initialDonations = [
  { id: 101, food: 'Fresh Vegetable Meals', donor: 'Food Palace', quantity: '20 kg', date: '19 Oct 2026', status: 'Available' },
  { id: 102, food: 'Bread & Bakery Items', donor: 'Royal Kitchen', quantity: '50 packets', date: '19 Oct 2026', status: 'Requested' },
  { id: 103, food: 'Fresh Fruit Boxes', donor: 'Green Basket Cafe', quantity: '15 boxes', date: '18 Oct 2026', status: 'Delivered' },
  { id: 104, food: 'Cooked Rice', donor: 'City Restaurant', quantity: '25 kg', date: '18 Oct 2026', status: 'Accepted' },
]

const activityItems = [
  { icon: '＋', title: 'New food donation listed', detail: 'Food Palace · Fresh Vegetable Meals', time: 'Today' },
  { icon: '✓', title: 'Donation marked delivered', detail: 'Green Basket Cafe · Fresh Fruit Boxes', time: 'Today' },
  { icon: '◎', title: 'New volunteer registered', detail: 'Aarav Sharma', time: 'Today' },
  { icon: '↗', title: 'NGO request received', detail: 'Helping Hands NGO', time: 'Yesterday' },
]

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [users, setUsers] = useState(initialUsers)
  const [donations, setDonations] = useState(initialDonations)
  const [notice, setNotice] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('All')
  const [donationFilter, setDonationFilter] = useState('All')

  const activeUsers = users.filter((user) => user.status === 'Active').length
  const pendingUsers = users.filter((user) => user.status === 'Pending').length
  const deliveredDonations = donations.filter((item) => item.status === 'Delivered').length
  const pendingDonations = donations.filter(
    (item) => item.status === 'Available' || item.status === 'Requested'
  ).length

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === 'All' || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  const filteredDonations = donations.filter((item) => {
    const matchesSearch =
      item.food.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.donor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      donationFilter === 'All' || item.status === donationFilter

    return matchesSearch && matchesStatus
  })

  const changeUserStatus = (id) => {
    const selectedUser = users.find((user) => user.id === id)
    if (!selectedUser) return

    const nextStatus = selectedUser.status === 'Active' ? 'Pending' : 'Active'

    setUsers((current) =>
      current.map((user) =>
        user.id === id ? { ...user, status: nextStatus } : user
      )
    )
    setNotice(`${selectedUser.name} is now marked ${nextStatus}.`)
  }

  const updateDonationStatus = (id, nextStatus) => {
    setDonations((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: nextStatus } : item
      )
    )
    setNotice(`Donation status updated to "${nextStatus}".`)
  }

  const openTab = (tab) => {
    setActiveTab(tab)
    setSearchTerm('')
    setNotice('')
  }

  const logout = () => {
    localStorage.removeItem('foodconnectRole')
    window.location.href = '/'
  }

  const donationStatusClass = (status) => {
    if (status === 'Delivered') return 'fc-status-completed'
    if (status === 'Accepted') return 'fc-status-picked'
    if (status === 'Requested') return 'fc-status-transit'
    return 'fc-status-assigned'
  }

  return (
    <div className="fc-dashboard-shell">
      <aside className="fc-sidebar">
        <Link to="/" className="fc-side-brand">
          <span className="fc-side-brand-icon">FC</span>
          <span>FoodConnect</span>
        </Link>

        <div className="fc-side-user">
          <div className="fc-avatar">A</div>
          <div>
            <strong>Administrator</strong>
            <span>Platform Manager</span>
          </div>
        </div>

        <p className="fc-side-label">ADMIN WORKSPACE</p>

        <button
          className={`fc-side-link ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => openTab('overview')}
        >
          <span>▦</span> Overview
        </button>

        <button
          className={`fc-side-link ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => openTab('users')}
        >
          <span>♙</span> Manage Users
        </button>

        <button
          className={`fc-side-link ${activeTab === 'donations' ? 'active' : ''}`}
          onClick={() => openTab('donations')}
        >
          <span>♡</span> Manage Donations
        </button>

        <button
          className={`fc-side-link ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => openTab('activity')}
        >
          <span>◷</span> Recent Activity
        </button>

        <div className="fc-sidebar-bottom">
          <div className="fc-sidebar-help">
            <strong>Admin control centre</strong>
            <p>Monitor donations and help keep food moving to communities.</p>
          </div>
          <button className="fc-side-link fc-logout" onClick={logout}>
            <span>↪</span> Log Out
          </button>
        </div>
      </aside>

      <main className="fc-dashboard-main">
        <header className="fc-dash-topbar">
          <div>
            <p className="fc-dash-eyebrow">FOODCONNECT MANAGEMENT</p>
            <h1>
              {activeTab === 'overview' && 'Admin Overview'}
              {activeTab === 'users' && 'Manage Users'}
              {activeTab === 'donations' && 'Manage Donations'}
              {activeTab === 'activity' && 'Recent Activity'}
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

        {activeTab === 'overview' && (
          <>
            <section className="fc-admin-welcome">
              <div>
                <span className="fc-welcome-tag">PLATFORM OVERVIEW</span>
                <h2>Small actions. Meaningful impact.</h2>
                <p>
                  Keep an eye on food donations, community partners, and
                  delivery activity across FoodConnect.
                </p>
                <button
                  className="fc-volunteer-primary"
                  onClick={() => openTab('donations')}
                >
                  Review Donations →
                </button>
              </div>
              <div className="fc-admin-welcome-image" role="img" aria-label="Fresh food ready to be shared with the community" />
            </section>

            <section className="fc-dash-stats">
              <div className="fc-stat-card">
                <div className="fc-stat-icon">♙</div>
                <span>Registered Users</span>
                <strong>{users.length}</strong>
                <small>Across all user roles</small>
              </div>
              <div className="fc-stat-card">
                <div className="fc-stat-icon">✓</div>
                <span>Active Users</span>
                <strong>{activeUsers}</strong>
                <small>Currently marked active</small>
              </div>
              <div className="fc-stat-card">
                <div className="fc-stat-icon">♡</div>
                <span>Total Donations</span>
                <strong>{donations.length}</strong>
                <small>Sample donation records</small>
              </div>
              <div className="fc-stat-card">
                <div className="fc-stat-icon">◷</div>
                <span>Awaiting Action</span>
                <strong>{pendingDonations + pendingUsers}</strong>
                <small>Pending demo records</small>
              </div>
            </section>

            <div className="fc-admin-overview-grid">
              <section className="fc-dash-panel">
                <div className="fc-panel-heading">
                  <div>
                    <h2>Recent Donations</h2>
                    <p>Latest food donation records.</p>
                  </div>
                  <button
                    className="fc-admin-text-button"
                    onClick={() => openTab('donations')}
                  >
                    View all →
                  </button>
                </div>

                <div className="fc-admin-table-wrap">
                  <table className="fc-data-table">
                    <thead>
                      <tr>
                        <th>Food Item</th>
                        <th>Donor</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.slice(0, 4).map((item) => (
                        <tr key={item.id}>
                          <td>
                            <strong>{item.food}</strong>
                            <small className="fc-admin-cell-subtitle">
                              {item.quantity}
                            </small>
                          </td>
                          <td>{item.donor}</td>
                          <td>
                            <span className={`fc-status-pill ${donationStatusClass(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="fc-dash-panel fc-admin-activity-panel">
                <div className="fc-panel-heading">
                  <div>
                    <h2>Recent Activity</h2>
                    <p>Example platform events.</p>
                  </div>
                  <button
                    className="fc-admin-text-button"
                    onClick={() => openTab('activity')}
                  >
                    View all →
                  </button>
                </div>

                <div className="fc-admin-activity-list">
                  {activityItems.slice(0, 3).map((item, index) => (
                    <div className="fc-admin-activity-item" key={item.title}>
                      <span className="fc-admin-activity-icon">{item.icon}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.detail}</p>
                        <small>{item.time}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="fc-dash-panel fc-admin-quick-actions">
              <div className="fc-panel-heading">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Go directly to common management tasks.</p>
                </div>
              </div>
              <div className="fc-admin-action-grid">
                <button onClick={() => openTab('users')}>
                  <span>♙</span>
                  <strong>Review Users</strong>
                  <small>Check account statuses</small>
                </button>
                <button onClick={() => openTab('donations')}>
                  <span>♡</span>
                  <strong>Review Donations</strong>
                  <small>Monitor food listings</small>
                </button>
                <button onClick={() => openTab('activity')}>
                  <span>◷</span>
                  <strong>View Activity</strong>
                  <small>See example events</small>
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'users' && (
          <section className="fc-dash-panel fc-admin-management-panel">
            <div className="fc-panel-heading">
              <div>
                <h2>User Accounts</h2>
                <p>Search accounts and change their demo status.</p>
              </div>
              <span className="fc-assignment-count">{users.length} users</span>
            </div>

            <div className="fc-admin-filters">
              <input
                type="search"
                placeholder="Search name or email..."
                aria-label="Search users"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <select
                aria-label="Filter users by role"
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
              >
                <option value="All">All roles</option>
                <option value="Restaurant">Restaurant</option>
                <option value="NGO">NGO</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>

            <div className="fc-admin-table-wrap">
              <table className="fc-data-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <strong>{user.name}</strong>
                        <small className="fc-admin-cell-subtitle">{user.email}</small>
                      </td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`fc-status-pill ${user.status === 'Active' ? 'fc-status-completed' : 'fc-status-assigned'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="fc-admin-table-button"
                          onClick={() => changeUserStatus(user.id)}
                        >
                          {user.status === 'Active' ? 'Mark Pending' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan="4" className="fc-admin-no-results">
                        No users match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'donations' && (
          <section className="fc-dash-panel fc-admin-management-panel">
            <div className="fc-panel-heading">
              <div>
                <h2>Donation Records</h2>
                <p>Review and update the status of sample donations.</p>
              </div>
              <span className="fc-assignment-count">{donations.length} records</span>
            </div>

            <div className="fc-admin-filters">
              <input
                type="search"
                placeholder="Search food or donor..."
                aria-label="Search donations"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <select
                aria-label="Filter donations by status"
                value={donationFilter}
                onChange={(event) => setDonationFilter(event.target.value)}
              >
                <option value="All">All statuses</option>
                <option value="Available">Available</option>
                <option value="Requested">Requested</option>
                <option value="Accepted">Accepted</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            <div className="fc-admin-table-wrap">
              <table className="fc-data-table">
                <thead>
                  <tr>
                    <th>Food Item</th>
                    <th>Donor</th>
                    <th>Date Listed</th>
                    <th>Status</th>
                    <th>Update Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDonations.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong>{item.food}</strong>
                        <small className="fc-admin-cell-subtitle">{item.quantity}</small>
                      </td>
                      <td>{item.donor}</td>
                      <td>{item.date}</td>
                      <td>
                        <span className={`fc-status-pill ${donationStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <select
                          className="fc-admin-status-select"
                          aria-label={`Update status for ${item.food}`}
                          value={item.status}
                          onChange={(event) => updateDonationStatus(item.id, event.target.value)}
                        >
                          <option value="Available">Available</option>
                          <option value="Requested">Requested</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {filteredDonations.length === 0 && (
                    <tr>
                      <td colSpan="5" className="fc-admin-no-results">
                        No donations match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'activity' && (
          <section className="fc-dash-panel fc-admin-management-panel">
            <div className="fc-panel-heading">
              <div>
                <h2>Platform Activity</h2>
                <p>Example events to illustrate an admin activity feed.</p>
              </div>
            </div>

            <div className="fc-admin-activity-list fc-admin-full-activity">
              {activityItems.map((item) => (
                <div className="fc-admin-activity-item" key={item.title}>
                  <span className="fc-admin-activity-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                    <small>{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
            <p className="fc-admin-demo-note">
              These are sample activities. Live activity tracking will require a
              backend connection.
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

export default AdminDashboard
