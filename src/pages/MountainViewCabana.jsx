import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiCoffee, FiTv, FiClock, FiUsers, FiMapPin } = FiIcons;
const { FaHotTub, FaPaw } = FaIcons;

function MountainViewCabana() {
  const amenities = [
    { icon: FiWifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout' },
    { icon: FiCoffee, title: 'Kitchenette', description: 'Fridge, basic cooking facilities' },
    { icon: FiTv, title: 'Satellite TV', description: 'Entertainment channels' },
    { icon: FaHotTub, title: 'Hot Tub Access', description: 'Shared jacuzzi in garden' },
    { icon: FaPaw, title: 'Pet-Friendly', description: 'Pets welcome at no extra charge' },
    { icon: FiCoffee, title: 'Daily Housekeeping', description: 'Fresh linens and cleaning' }
  ];

  const inclusions = [
    'Air-conditioned comfort',
    'Private bathroom with toiletries',
    'Balcony with garden/mountain views',
    'Kitchenette with refrigerator',
    'Satellite TV entertainment',
    'Free Wi-Fi throughout',
    'Daily housekeeping service',
    'Fresh linens and towels',
    'Hot tub access in garden',
    'Free private parking'
  ];

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np441yu0CwqGXSg1baB9jW-8bGetSqgxAAnMkogE8t_tUYuizUijgnLYQHOjx3HDpCCwE86sHJiWh0xVOTXk67O0mxRa3cTVyCFH99WRoGt9WVrlJnpYHCTSdTg2YBQvrlT_Fpt2-eyqOQ=w800',
      alt: 'Mountain-view cabana interior'
    },
    {
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90AXI4z7n5hUIgYYVACGidSJSI0Hb0qPzwwS8fZuVf_niEMvUbWvUWsJjRJyqQ6cKfw8xWx-Xc6KlK8c_QqptN2AnMbo5Kx7v_4pdFGWKc-iCVPyaWZ37wttuI237HZ6bIvOpf5R1ZdORxXW=w800',
      alt: 'Cozy interior with natural lighting'
    },
    {
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90D4Dh8pKDVPTzFdjB3fpXiNs0AwwoYKIHCb-opE0cG1gjUkK-uCFlO8BezxNpnInuR5C5HKFJyhFxATKtFWqOiCVyevZ7IPTAz-BNc3S9LecT5934Mvu0PO2ZNhLyieY61S05LpSz0iEj_r=w800',
      alt: 'Cabana facilities and amenities'
    },
    {
      src: 'https://lh3.googleusercontent.com/p/AF1QipNYq_lAQlNwYMdzkA3ug0TCN6QSUz8pfEH0uoOl=w800',
      alt: 'Garden and exterior views'
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4np441yu0CwqGXSg1baB9jW-8bGetSqgxAAnMkogE8t_tUYuizUijgnLYQHOjx3HDpCCwE86sHJiWh0xVOTXk67O0mxRa3cTVyCFH99WRoGt9WVrlJnpYHCTSdTg2YBQvrlT_Fpt2-eyqOQ=w1200"
            alt="Mountain-View Cabana interior"
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
            Mountain-View Cabana
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Awake to birdsong and breeze on your private balcony. With AC, Wi‑Fi, and a kitchenette, 
            it's effortless comfort amid green vistas.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book the Mountain-View Cabana at The Mountain Breeze Galle Cabanas."
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

      {/* Quick Info Bar */}
      <section className="py-6 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span>Check-in: 14:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span>Check-out: 10:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUsers} className="w-5 h-5" />
              <span>Max 4 Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FaPaw} className="w-5 h-5" />
              <span>Pets Allowed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore the comfort and beauty of our Mountain-View Cabana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Amenities */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-8">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={amenity.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-night-charcoal mb-1">{amenity.title}</h3>
                      <p className="text-gray-600 text-sm">{amenity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-8">
                What's Included
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ul className="space-y-4">
                  {inclusions.map((inclusion, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-ceylon-gold rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{inclusion}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Details */}
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
              Room Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Thoughtfully designed for comfort and tranquility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-night-charcoal mb-2">Sleeping</h3>
              <p className="text-gray-600">1 King bed (sleeps 2-4 guests)</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-night-charcoal mb-2">Spaces</h3>
              <p className="text-gray-600">Private balcony, seating area, kitchenette</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-night-charcoal mb-2">View</h3>
              <p className="text-gray-600">Garden and mountain vistas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breakfast Options */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-4">
              Breakfast Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your day with a hearty breakfast prepared to your preference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Full English/Irish',
                description: 'Traditional hearty breakfast with eggs, bacon, sausages, beans, and toast',
                image: 'https://lh3.googleusercontent.com/p/AF1QipNDok67CTjFiS3XK5O0wBdzZCOH6_X_ekx2222L=w600'
              },
              {
                name: 'Asian Breakfast',
                description: 'Local Sri Lankan specialties and Asian-style breakfast dishes',
                image: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90D3GRYOSghGiizcNRFMnwZ4NpiwxoB03l9Osqij75Irs4sQ4Z86jrhkvN7gxKhj7doYWLunW2YPWLb4VtVmxWnwCj8IW3wMyIIIQN8i5zbHKsmNq2BTWTy_d0wb_SJYhttKZZjnZLYz8jAd=w600'
              },
              {
                name: 'Halal Options',
                description: 'Halal-certified breakfast choices prepared according to Islamic dietary laws',
                image: 'https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w600'
              }
            ].map((breakfast, index) => (
              <motion.div
                key={breakfast.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={breakfast.image}
                  alt={breakfast.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-night-charcoal mb-2">{breakfast.name}</h3>
                  <p className="text-gray-600">{breakfast.description}</p>
                </div>
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
              Book Your Mountain-View Escape
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Wake up to mountain breezes and green vistas in your private cabana. 
              Perfect for couples seeking tranquility and natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to book the Mountain-View Cabana at The Mountain Breeze Galle Cabanas. Please let me know about availability and packages."
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

export default MountainViewCabana;