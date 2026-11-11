
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDashboard from './pages/RestaurantDashboard'
import NGODashboard from './pages/NGODashboard'
import VolunteerDashboard from './pages/VolunteerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Feedback from './pages/Feedback'

function AppLayout() {
  const location = useLocation()

  const dashboardRoutes = [
    '/restaurant',
    '/ngo',
    '/volunteer',
    '/admin',
  ]

  const isDashboard = dashboardRoutes.includes(location.pathname)

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/ngo" element={<NGODashboard />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route
          path="*"
          element={
            <main style={{ padding: '60px 24px', textAlign: 'center' }}>
              <h1>Page not found</h1>
              <p>The page you are looking for does not exist.</p>
              <a href="/" style={{ color: '#23623e' }}>
                Return to FoodConnect
              </a>
            </main>
          }
        />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
