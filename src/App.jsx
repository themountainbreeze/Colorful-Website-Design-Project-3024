import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOProvider from './components/SEO/SEOProvider';

import Home from './pages/Home';
import CabanasOverview from './pages/CabanasOverview';
import LuxuryCabana from './pages/LuxuryCabana';
import SupremeDeluxeCabana from './pages/SupremeDeluxeCabana';
import Packages from './pages/Packages';
import Amenities from './pages/Amenities';
import Dining from './pages/Dining';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Location from './pages/Location';
import Booking from './pages/Booking';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Policies from './pages/Policies';
import Experiences from './pages/Experiences';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfConditions from './pages/TermsOfConditions';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <SEOProvider>
      <Router>
        <div className="min-h-screen bg-ivory-mist">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cabanas" element={<CabanasOverview />} />
              <Route path="/cabanas/luxury" element={<LuxuryCabana />} />
              <Route path="/cabanas/supreme-deluxe" element={<SupremeDeluxeCabana />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/location" element={<Location />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/about" element={<About />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsOfConditions />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </AnimatePresence>
          <Footer />

        </div>
      </Router>
    </SEOProvider>
  );
}

export default App;