import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEO/SEOHead';
import { getSEOConfig, generateBreadcrumbs } from '../utils/seoConfig';
import { generateBreadcrumbSchema } from '../components/SEO/StructuredData';

const { FiWifi, FiCoffee, FiTv, FiClock, FiUsers, FiMapPin } = FiIcons;
const { FaHotTub, FaPaw } = FaIcons;

function LuxuryCabana() {
  const amenities = [
    { icon: FiWifi, title: 'Fully Air-Conditioned', description: 'Climate controlled comfort' },
    { icon: FiCoffee, title: 'Private Kitchen', description: 'Kitchen with ingredients provided' },
    { icon: FaHotTub, title: 'Hot Water & Bath Tub', description: 'Romantic bath tub experience' },
    { icon: FiTv, title: 'Smart Android TV', description: 'Entertainment and connectivity' },
    { icon: FiUsers, title: 'Accommodates 4 Guests', description: 'Perfect for families or groups' },
    { icon: FiCoffee, title: 'Free Water & Parking', description: 'Complimentary amenities' }
  ];

  const inclusions = [
    'Deluxe king bed + Double bed',
    'Accommodates up to 4 guests',
    'Fully air-conditioned cabana',
    'Hot water & romantic bath tub',
    'Free WiFi & Smart Android TV',
    'Private kitchen with ingredients',
    'Free water bottle & parking',
    'Stunning mountain view',
    'Daily housekeeping service',
    'Pet-friendly accommodation'
  ];

  const galleryImages = [
    {
      src: '/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-interior-beds.jpeg',
      alt: 'Mountain Breeze Galle Luxury Cabana interior with deluxe king bed and double bed'
    },
    {
      src: '/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-spacious-interior.jfif',
      alt: 'Mountain Breeze Galle spacious luxury cabana accommodating up to 4 guests'
    },
    {
      src: '/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-exterior.jpeg',
      alt: 'Mountain Breeze Galle Luxury Cabana exterior and tropical garden views'
    },
    {
      src: '/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-amenities.jpeg',
      alt: 'Mountain Breeze Galle Luxury Cabana premium amenities and mountain views'
    }
  ];

  const seoConfig = getSEOConfig('luxuryCabana');
  const breadcrumbs = generateBreadcrumbs('/cabanas/luxury');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEOHead
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonicalUrl={seoConfig.canonicalUrl}
        ogImage={seoConfig.ogImage}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-exterior.jpeg"
            alt="Mountain Breeze Galle Luxury Cabana exterior with tropical garden setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Luxury Cabana
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Experience luxury with two comfortable beds - one deluxe king bed and one double bed. 
            Perfect for families or groups of up to 4 guests seeking premium comfort.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book the Luxury Cabana at The Mountain Breeze Galle Cabanas."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book on WhatsApp
            </a>
            <Link
              to="/packages"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-night-charcoal transition-all duration-200"
            >
              View Packages
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-4">
              Luxury Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail designed for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={amenity.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-2 text-center">{amenity.title}</h3>
                <p className="text-gray-600 text-center">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-4">
              Luxury Cabana Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of your luxury accommodation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              What's Included
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Everything you need for a perfect luxury stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((inclusion, index) => (
              <motion.div
                key={inclusion}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-ceylon-gold rounded-full flex-shrink-0"></div>
                <span className="text-white">{inclusion}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Book Your Luxury Escape
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience premium comfort with two beds accommodating up to 4 guests. 
              Perfect for families or groups seeking luxury and mountain views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to book the Luxury Cabana at The Mountain Breeze Galle Cabanas. Please let me know about availability and packages."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/booking"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                Complete Booking Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default LuxuryCabana;
