import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiNavigation, FiPhone, FiMail } = FiIcons;

function Location() {
  const nearbyAttractions = [
    {
      name: 'Galle Fort',
      distance: '5.4 km',
      description: 'UNESCO World Heritage site with historic ramparts, museums, and boutique shops',
      travelTime: '10-15 minutes'
    },
    {
      name: 'Galle Lighthouse',
      distance: '5.9 km',
      description: 'Iconic lighthouse with stunning coastal views and photo opportunities',
      travelTime: '12-18 minutes'
    },
    {
      name: 'Dutch Church Galle',
      distance: '5.5 km',
      description: 'Historic Dutch Reformed Church dating back to the colonial period',
      travelTime: '10-15 minutes'
    },
    {
      name: 'Unawatuna Beach',
      distance: '8.2 km',
      description: 'Famous golden sandy beach perfect for swimming, snorkeling, and water sports',
      travelTime: '15-20 minutes'
    },
    {
      name: 'Japanese Peace Pagoda',
      distance: '9.1 km',
      description: 'Buddhist temple offering panoramic views of the coastline and peaceful meditation',
      travelTime: '18-22 minutes'
    },
    {
      name: 'Jungle Beach',
      distance: '7.8 km',
      description: 'Hidden gem beach surrounded by lush jungle, ideal for quiet relaxation',
      travelTime: '15-18 minutes'
    },
    {
      name: 'Martin Wickramasinghe Museum',
      distance: '12.5 km',
      description: 'Cultural museum showcasing Sri Lankan literature, folk art, and traditional crafts',
      travelTime: '20-25 minutes'
    },
    {
      name: 'Koggala Lake',
      distance: '14.3 km',
      description: 'Scenic freshwater lake with boat tours, bird watching, and temple islands',
      travelTime: '22-28 minutes'
    },
    {
      name: 'Snake Island',
      distance: '15.7 km',
      description: 'Small island accessible by boat with pristine beaches and snorkeling spots',
      travelTime: '25-30 minutes'
    },
    {
      name: 'Galle International Cricket Stadium',
      distance: '6.8 km',
      description: 'World-famous cricket ground with ocean views, hosting international matches',
      travelTime: '12-16 minutes'
    },
    {
      name: 'Koggala Airport',
      distance: '17.28 km',
      description: 'Nearest airport for domestic flights and charter services',
      travelTime: '25-30 minutes'
    },
    {
      name: 'Galle Railway Station',
      distance: '4.94 km',
      description: 'Main railway station connecting to Colombo and southern coastal towns',
      travelTime: '8-12 minutes'
    }
  ];

  const transportOptions = [
    {
      icon: FiNavigation,
      title: 'Airport Shuttle',
      description: 'Paid transfer service to/from Koggala Airport',
      details: 'Pre-arranged pickup and drop-off service available'
    },
    {
      icon: FiNavigation,
      title: 'Car Rental',
      description: 'Vehicle rental services available on-site',
      details: 'Explore the area at your own pace'
    },
    {
      icon: FiNavigation,
      title: 'Bicycle Rental',
      description: 'Eco-friendly way to explore local attractions',
      details: 'Perfect for short trips and sightseeing'
    },
    {
      icon: FiNavigation,
      title: 'Tour Arrangements',
      description: 'Local tour bookings and ticket arrangements',
      details: 'Customized tours to suit your interests'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-canopy to-ocean-teal text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero/location-hero.jpg"
            alt="Location of Mountain Breeze"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            Location & Contact
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Perfectly situated in Galle's green hills, just minutes from historic attractions 
            and beautiful beaches.
          </motion.p>
        </div>
      </section>

      {/* Address & Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Address Details */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-8">
                Our Address
              </h2>
              
              <div className="bg-gradient-to-br from-ivory-mist to-white rounded-xl p-8 shadow-lg mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-night-charcoal mb-2">Street Address</h3>
                    <p className="text-gray-600">
                      Kapuhempala, Godaduwa Rd<br />
                      Galle 80000, Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <SafeIcon icon={FiNavigation} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-night-charcoal mb-2">Plus Code</h3>
                    <p className="text-gray-600">368Q+Q4</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-night-charcoal mb-2">Distance to City</h3>
                    <p className="text-gray-600">Just 10-15 minutes to Galle city & Fort</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/The%20Mountain%20Breeze%20Galle?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-ivory-mist to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-night-charcoal">Phone & WhatsApp</h3>
                      <p className="text-gray-600">+94 77 514 5131</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-ivory-mist to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-night-charcoal">Email</h3>
                      <p className="text-gray-600">contact@themountainbreezegalle.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-ivory-mist to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiClock} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-night-charcoal">Check-in/Check-out</h3>
                      <p className="text-gray-600">
                        Check-in: 14:00<br />
                        Check-out: 10:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/94775145131?text=Hello! I'd like to get directions to The Mountain Breeze Galle Cabanas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+94775145131"
                  className="flex-1 text-center px-6 py-3 border-2 border-emerald-canopy text-emerald-canopy font-semibold rounded-lg hover:bg-emerald-canopy hover:text-white transition-all duration-200"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
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
              Nearby Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore historic sites, beautiful beaches, and cultural landmarks within easy reach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-night-charcoal">{attraction.name}</h3>
                  <span className="bg-emerald-canopy text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <div className="flex items-center space-x-2 text-sm text-emerald-canopy">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{attraction.travelTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Options */}
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
              Transportation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various transportation options to make your journey comfortable and convenient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={option.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <p className="text-sm text-emerald-canopy font-medium">{option.details}</p>
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
              Ready to Visit Us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us for directions, transportation arrangements, or any questions about our location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I need directions and transportation information for The Mountain Breeze Galle Cabanas."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Directions
              </a>
              <a
                href="https://www.google.com/maps/search/The%20Mountain%20Breeze%20Galle?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Location;