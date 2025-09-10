import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiCoffee, FiTv, FiClock, FiUsers, FiHeart } = FiIcons;
const { FaHotTub, FaPaw } = FaIcons;

function HoneymoonCabana() {
  const amenities = [
    { icon: FiHeart, title: 'Romantic Decor', description: 'Custom romantic setups on request' },
    { icon: FiWifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout' },
    { icon: FiCoffee, title: 'Private Balcony', description: 'Intimate outdoor space' },
    { icon: FaHotTub, title: 'Hot Tub Access', description: 'Shared jacuzzi in garden' },
    { icon: FiTv, title: 'Satellite TV', description: 'Entertainment channels' },
    { icon: FaPaw, title: 'Pet-Friendly', description: 'Pets welcome at no extra charge' }
  ];

  const romanticFeatures = [
    'Candlelit dinner arrangements',
    'Floral bed decorations',
    'Soft ambient lighting',
    'Private balcony dining',
    'Anniversary surprise setups',
    'Rose petal arrangements',
    'Special occasion decorations',
    'Intimate garden access',
    'Romantic photo opportunities',
    'Personalized touches'
  ];

  const galleryImages = [
    {
      src: '/images/romantic/romantic-evening-setup.jpg',
      alt: 'Romantic evening setup with lighting'
    },
    {
      src: '/images/hero/evening-ambiance-latest.jpg',
      alt: 'Evening ambiance and garden lighting'
    },
    {
      src: '/images/cabanas/mountain-view-cabana-interior.jpg',
      alt: 'Intimate cabana interior'
    },
    {
      src: '/images/hero/overview-all-landscape.jpg',
      alt: 'Garden setting for romantic moments'
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
            src="/images/romantic/romantic-evening-setup.jpg"
            alt="Honeymoon Cabana romantic setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Honeymoon Cabana
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Designed for romance—soft lighting, intimate dinners, and dreamlike decor on request. 
            Celebrate under the stars in your own private paradise.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book the Honeymoon Cabana at The Mountain Breeze Galle Cabanas for a romantic getaway."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Romantic Getaway
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
              <span>Perfect for Couples</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
              <span>Romance Package Available</span>
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
              Romance Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Intimate moments and beautiful setups designed for love
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

      {/* Romantic Features */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-4">
              Romantic Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create unforgettable memories with our specially curated romantic touches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Amenities */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-playfair font-bold text-night-charcoal mb-8">
                Luxury Amenities
              </h3>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={amenity.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-night-charcoal mb-1">{amenity.title}</h4>
                      <p className="text-gray-600 text-sm">{amenity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Romantic Features */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-playfair font-bold text-night-charcoal mb-8">
                Romance Package Includes
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ul className="space-y-4">
                  {romanticFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <SafeIcon icon={FiHeart} className="w-4 h-4 text-rose-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Occasions */}
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
              Perfect for Special Occasions
            </h2>
            <p className="text-xl text-gray-600">
              Celebrate life's most precious moments in style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Honeymoons',
                description: 'Start your new life together in paradise',
                icon: '💕',
                color: 'from-rose-400 to-pink-500'
              },
              {
                title: 'Anniversaries',
                description: 'Celebrate years of love and commitment',
                icon: '🥂',
                color: 'from-purple-400 to-indigo-500'
              },
              {
                title: 'Proposals',
                description: 'Pop the question in a magical setting',
                icon: '💍',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                title: 'Romantic Getaways',
                description: 'Reconnect and create new memories',
                icon: '🌹',
                color: 'from-red-400 to-rose-500'
              }
            ].map((occasion, index) => (
              <motion.div
                key={occasion.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-ivory-mist to-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${occasion.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {occasion.icon}
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-2">{occasion.title}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Romance Add-ons */}
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
              Romance Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your romantic experience with our special add-on services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Candlelit Dinner',
                description: 'Private dinner setup with candles and flowers on your balcony or in the garden',
                price: 'Available on request',
                image: '/images/romantic/romantic-evening-setup.jpg'
              },
              {
                title: 'Floral Arrangements',
                description: 'Fresh flower decorations for your room and bed with rose petals',
                price: 'Available on request',
                image: '/images/romantic/romantic-evening-setup.jpg'
              },
              {
                title: 'Surprise Setup',
                description: 'Custom surprise arrangements for proposals or special celebrations',
                price: 'Available on request',
                image: '/images/hero/evening-ambiance-romantic.jpg'
              }
            ].map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={addon.image}
                  alt={addon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-night-charcoal mb-2">{addon.title}</h3>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-canopy font-semibold">{addon.price}</span>
                    <a
                      href={`https://wa.me/94775145131?text=Hello! I'd like to add ${addon.title} to my Honeymoon Cabana booking.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-canopy hover:text-ocean-teal transition-colors"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Create Magical Memories Together
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book our Honeymoon Cabana and let us help you create the perfect romantic experience. 
              From intimate dinners to surprise setups, every detail is crafted with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to book the Honeymoon Cabana at The Mountain Breeze Galle Cabanas. Please help me plan a romantic getaway with special arrangements."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-rose-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book Romantic Package
              </a>
              <Link
                to="/booking"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-600 transition-all duration-200"
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

export default HoneymoonCabana;