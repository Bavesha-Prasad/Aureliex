import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './Services.css'
import './About.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'

/**
 * AURELIX Hair Atelier — Root Application
 *
 * Configures React Router with routes for:
 * - `/`: Homepage (Stage 2)
 * - `/services`: Treatment Menu & Services (Stage 3)
 * - `/about`: The Atelier & Appointment Enquiry (Stage 4)
 *
 * Features shared Header, Footer, and ScrollToTop restoration.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Scroll Restoration & Hash Navigation */}
        <ScrollToTop />

        {/* Shared Header Navigation */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
