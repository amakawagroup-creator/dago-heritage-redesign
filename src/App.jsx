import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GolfCourse from './pages/GolfCourse'
import GreenFees from './pages/GreenFees'
import DrivingRange from './pages/DrivingRange'
import ContactUs from './pages/ContactUs'

// ── Scroll to top on route change (except anchor links) ──────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top on every clean page navigation
    // The Navbar's pendingScroll handles anchor scrolling separately
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<GolfCourse />} />
        <Route path="/green-fees" element={<GreenFees />} />
        <Route path="/driving-range" element={<DrivingRange />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
