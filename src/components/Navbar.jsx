import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [role, setRole] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const savedRole = localStorage.getItem('foodconnectRole')
    setRole(savedRole)
  }, [location])

  const getDashboardPath = () => {
    if (role === 'restaurant') return '/restaurant'
    if (role === 'ngo') return '/ngo'
    if (role === 'volunteer') return '/volunteer'
    if (role === 'admin') return '/admin'

    return '/'
  }

  const handleLogout = () => {
    localStorage.removeItem('foodconnectRole')
    setRole(null)
    navigate('/')
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        Food<span>Connect</span>
      </Link>

      {/* Main Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!role && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {role && (
          <Link to={getDashboardPath()}>
            Dashboard
          </Link>
        )}
      </div>

      {/* Right Button */}
      {!role ? (
        <Link to="/register" className="nav-button">
          Get Started
        </Link>
      ) : (
        <button
          type="button"
          className="nav-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

    </nav>
  )
}

export default Navbar