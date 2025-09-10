import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import CabanasOverview from './pages/CabanasOverview';
import MountainViewCabana from './pages/MountainViewCabana';
import HoneymoonCabana from './pages/HoneymoonCabana';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory-mist">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabanas" element={<CabanasOverview />} />
            <Route path="/cabanas/mountain-view" element={<MountainViewCabana />} />
            <Route path="/cabanas/honeymoon" element={<HoneymoonCabana />} />
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
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;