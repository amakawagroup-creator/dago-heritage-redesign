import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GolfCourse from './pages/GolfCourse'
import GreenFees from './pages/GreenFees'
import DrivingRange from './pages/DrivingRange'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<GolfCourse />} />
        <Route path="/green-fees" element={<GreenFees />} />
        <Route path="/driving-range" element={<DrivingRange />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
