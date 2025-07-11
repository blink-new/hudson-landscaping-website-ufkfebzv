import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { BookingPage } from './pages/BookingPage'
import { GalleryPage } from './pages/GalleryPage'
import { AboutPage } from './pages/AboutPage'
import { PricingPage } from './pages/PricingPage'
import { ContactPage } from './pages/ContactPage'
import { AdminSignInPage } from './pages/AdminSignInPage'
import { AdminPanelPage } from './pages/AdminPanelPage'
import { useSeasonalTheme } from './hooks/useSeasonalTheme'
import { Toaster } from './components/ui/toaster'
import { useAuth } from './hooks/useAuth'
import { isUserAdmin } from './lib/auth'

function App() {
  const theme = useSeasonalTheme();
  const { user, loading } = useAuth();

  // Show loading state while auth is initializing
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen bg-white ${theme.season.toLowerCase()}`}>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="/admin-signin" 
            element={
              user && isUserAdmin(user) ? 
                <Navigate to="/admin" /> : 
                <AdminSignInPage />
            } 
          />
          <Route 
            path="/admin" 
            element={
              user && isUserAdmin(user) ? 
                <AdminPanelPage /> : 
                <Navigate to="/" />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App