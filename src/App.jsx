import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import RestaurantDashboard from './pages/RestaurantDashboard'
import NGODashboard from './pages/NGODashboard'
import VolunteerDashboard from './pages/VolunteerDashboard'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurant" element={<RestaurantDashboard />} />
          <Route path="/ngo" element={<NGODashboard />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App