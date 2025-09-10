import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiCoffee, FiHeart } = FiIcons;
const { FaHotTub } = FaIcons;

function CabanasOverview() {
  const cabanas = [
    {
      id: 'mountain-view',
      name: 'Mountain-View Cabana',
      subtitle: 'Nature\'s Embrace',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np441yu0CwqGXSg1baB9jW-8bGetSqgxAAnMkogE8t_tUYuizUijgnLYQHOjx3HDpCCwE86sHJiWh0xVOTXk67O0mxRa3cTVyCFH99WRoGt9WVrlJnpYHCTSdTg2YBQvrlT_Fpt2-eyqOQ=w800',
      description: 'Awake to birdsong and breeze on your private balcony. With AC, Wi‑Fi, and a kitchenette, it\'s effortless comfort amid green vistas.',
      features: [
        { icon: FiCoffee, text: 'Balcony with garden views' },
        { icon: FiWifi, text: 'Free Wi-Fi & AC' },
        { icon: FiCoffee, text: 'Private kitchenette' },
        { icon: FaHotTub, text: 'Hot tub access' }
      ],
      highlights: ['Perfect for couples', 'Mountain views', 'Peaceful setting', 'Modern amenities']
    },
    {
      id: 'honeymoon',
      name: 'Honeymoon Cabana',
      subtitle: 'Romance Redefined',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMoJoxE2XzXDU_NFavMwoPZxVP1-A6NZ0HPxhyC=w800',
      description: 'Designed for romance—soft lighting, intimate dinners, and dreamlike decor on request. Celebrate under the stars.',
      features: [
        { icon: FiHeart, text: 'Romantic decor setups' },
        { icon: FiWifi, text: 'Free Wi-Fi & AC' },
        { icon: FiCoffee, text: 'Private balcony' },
        { icon: FaHotTub, text: 'Hot tub access' }
      ],
      highlights: ['Candlelit dinners', 'Floral arrangements', 'Intimate lighting', 'Special occasions']
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
            src="https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w1200"
            alt="Mountain Breeze Cabanas"
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
            Our Cabanas
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Choose your perfect retreat—mountain vistas or romantic ambiance, 
            both crafted for unforgettable experiences in Galle's green hills.
          </motion.p>
        </div>
      </section>

      {/* Cabanas Grid */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cabanas.map((cabana, index) => (
              <motion.div
                key={cabana.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cabana.image}
                    alt={cabana.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ceylon-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {cabana.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-playfair font-bold text-night-charcoal mb-4">
                    {cabana.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cabana.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {cabana.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <SafeIcon icon={feature.icon} className="w-5 h-5 text-emerald-canopy" />
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-night-charcoal mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cabana.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-emerald-canopy/10 text-emerald-canopy px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/cabanas/${cabana.id}`}
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/94775145131?text=Hello! I'd like to book the ${cabana.name} at The Mountain Breeze Galle Cabanas.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 border-2 border-emerald-canopy text-emerald-canopy font-semibold rounded-lg hover:bg-emerald-canopy hover:text-white transition-all duration-200"
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Both Cabanas Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury amenities and personalized service in every stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiWifi, title: 'Free Wi-Fi', desc: 'High-speed internet throughout' },
              { icon: FiCoffee, title: 'AC & Kitchenette', desc: 'Climate control & cooking facilities' },
              { icon: FaHotTub, title: 'Hot Tub Access', desc: 'Shared jacuzzi in garden setting' },
              { icon: FiHeart, title: 'Daily Housekeeping', desc: 'Fresh linens & daily cleaning' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-ivory-mist to-white shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
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
              Ready to Book Your Perfect Cabana?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us on WhatsApp for instant booking confirmation and personalized package recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to book a cabana at The Mountain Breeze Galle Cabanas. Please help me choose the perfect one for my stay."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/packages"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default CabanasOverview;