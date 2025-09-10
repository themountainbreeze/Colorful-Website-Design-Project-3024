import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiClock, FiUsers, FiCoffee } = FiIcons;

function Packages() {
  const [selectedGuests, setSelectedGuests] = useState(2);

  const packages = [
    {
      id: 'full-board',
      name: 'Full Board',
      subtitle: 'Complete Experience',
      basePrice: 21500,
      description: 'The ultimate getaway with all meals, overnight stay, and full amenities access.',
      checkIn: '10:00 AM or 5:00 PM',
      checkOut: '9:00 AM or 4:00 PM',
      duration: 'Flexible timing',
      inclusions: [
        'Welcome drinks on arrival',
        'All meals (breakfast, lunch, dinner)',
        'Overnight accommodation',
        'Hot tub access',
        'Free Wi-Fi & amenities',
        'Daily housekeeping'
      ],
      image: 'https://lh3.googleusercontent.com/p/AF1QipNDok67CTjFiS3XK5O0wBdzZCOH6_X_ekx2222L=w800',
      popular: true
    },
    {
      id: 'cabana-only',
      name: 'Cabana Only',
      subtitle: 'Pure Relaxation',
      basePrice: 14500,
      description: 'Peaceful overnight stay with full access to amenities and facilities.',
      checkIn: '2:00 PM',
      checkOut: '10:00 AM',
      duration: 'Overnight',
      inclusions: [
        'Overnight accommodation',
        'Hot tub access',
        'Kitchenette facilities',
        'Free Wi-Fi',
        'Daily housekeeping',
        'Garden access'
      ],
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np441yu0CwqGXSg1baB9jW-8bGetSqgxAAnMkogE8t_tUYuizUijgnLYQHOjx3HDpCCwE86sHJiWh0xVOTXk67O0mxRa3cTVyCFH99WRoGt9WVrlJnpYHCTSdTg2YBQvrlT_Fpt2-eyqOQ=w800'
    },
    {
      id: 'night-out-meals',
      name: 'Night Out with Meals',
      subtitle: 'Evening Escape',
      basePrice: 14000,
      description: 'Perfect evening retreat with dinner, overnight stay, and breakfast.',
      checkIn: '5:00 PM',
      checkOut: '9:00 AM',
      duration: '16 hours',
      inclusions: [
        'Welcome drinks',
        'Dinner & breakfast',
        'Overnight accommodation',
        'Hot tub access',
        'Evening ambiance setup',
        'Free Wi-Fi'
      ],
      image: 'https://lh3.googleusercontent.com/p/AF1QipMoJoxE2XzXDU_NFavMwoPZxVP1-A6NZ0HPxhyC=w800'
    },
    {
      id: 'night-out-only',
      name: 'Night Out Only',
      subtitle: 'Simple Stay',
      basePrice: 8500,
      description: 'Comfortable overnight accommodation without meal packages.',
      checkIn: '5:00 PM',
      checkOut: '9:00 AM',
      duration: '16 hours',
      inclusions: [
        'Overnight accommodation',
        'Hot tub access',
        'Kitchenette access',
        'Free Wi-Fi',
        'Basic amenities',
        'Garden access'
      ],
      image: 'https://lh3.googleusercontent.com/p/AF1QipPMmk-zdoXqsgi3Tn-OFUl2rgVNWORe3_qLjb48=w800'
    },
    {
      id: 'day-out-meals',
      name: 'Day Out with Meals',
      subtitle: 'Perfect Day Trip',
      basePrice: 11500,
      description: 'Relaxing day retreat with lunch, dessert, and full facility access.',
      checkIn: '10:00 AM',
      checkOut: '4:00 PM',
      duration: '6 hours',
      inclusions: [
        'Welcome drinks',
        'Lunch & dessert',
        'Hot tub access',
        'Day use amenities',
        'Free Wi-Fi',
        'Garden relaxation'
      ],
      image: 'https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w800'
    },
    {
      id: 'day-out-only',
      name: 'Day Out Only',
      subtitle: 'Facilities Access',
      basePrice: 7500,
      description: 'Day use of facilities without meal packages.',
      checkIn: '10:00 AM',
      checkOut: '4:00 PM',
      duration: '6 hours',
      inclusions: [
        'Day use facilities',
        'Hot tub access',
        'Free Wi-Fi',
        'Garden access',
        'Basic amenities',
        'Relaxation areas'
      ],
      image: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90AXI4z7n5hUIgYYVACGidSJSI0Hb0qPzwwS8fZuVf_niEMvUbWvUWsJjRJyqQ6cKfw8xWx-Xc6KlK8c_QqptN2AnMbo5Kx7v_4pdFGWKc-iCVPyaWZ37wttuI237HZ6bIvOpf5R1ZdORxXW=w800'
    }
  ];

  const calculatePrice = (basePrice, guests) => {
    if (guests <= 2) return basePrice;
    return basePrice + ((guests - 2) * 10000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('LKR', 'Rs.');
  };

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
            src="https://lh3.googleusercontent.com/p/AF1QipNDok67CTjFiS3XK5O0wBdzZCOH6_X_ekx2222L=w1200"
            alt="Dining at Mountain Breeze"
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
            Packages & Offers
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Choose from our carefully crafted experiences designed for every type of getaway—
            from romantic escapes to peaceful day retreats.
          </motion.p>
        </div>
      </section>

      {/* Guest Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-ivory-mist to-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-4">
                Calculate Your Package Price
              </h2>
              <p className="text-gray-600">
                Base price is for 2 persons. Each additional person: +Rs. 10,000 (Max 4 persons)
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-emerald-canopy" />
                <span className="text-lg font-semibold text-night-charcoal">Number of Guests:</span>
                <div className="flex space-x-2">
                  {[2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedGuests(num)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        selectedGuests === num
                          ? 'bg-emerald-canopy text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-ceylon-gold' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-emerald-canopy text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.subtitle}
                    </span>
                    {pkg.popular && (
                      <span className="bg-ceylon-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-2">
                    {pkg.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-canopy">
                      {formatPrice(calculatePrice(pkg.basePrice, selectedGuests))}
                    </span>
                    <span className="text-gray-500 ml-2">for {selectedGuests} guests</span>
                  </div>

                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  {/* Timing */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <SafeIcon icon={FiClock} className="w-4 h-4 text-emerald-canopy mr-2" />
                      Check-in: {pkg.checkIn}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <SafeIcon icon={FiClock} className="w-4 h-4 text-emerald-canopy mr-2" />
                      Check-out: {pkg.checkOut}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-night-charcoal mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.inclusions.slice(0, 4).map((inclusion, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <SafeIcon icon={FiStar} className="w-3 h-3 text-ceylon-gold mr-2 flex-shrink-0" />
                          {inclusion}
                        </li>
                      ))}
                      {pkg.inclusions.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{pkg.inclusions.length - 4} more inclusions
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <a
                    href={`https://wa.me/94775145131?text=Hello! I'd like to book the ${pkg.name} package for ${selectedGuests} guests at The Mountain Breeze Galle Cabanas. Price: ${formatPrice(calculatePrice(pkg.basePrice, selectedGuests))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-ivory-mist to-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6 text-center">
              Pricing Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-canopy mb-4">Guest Capacity</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Base price includes 2 persons</li>
                  <li>• Each additional person: +Rs. 10,000</li>
                  <li>• Maximum occupancy: 4 persons per cabana</li>
                  <li>• Children under 5: Free (with parents)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-canopy mb-4">Contact & Booking</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Email: contact@themountainbreezegalle.com</li>
                  <li>• WhatsApp: +94 77 514 5131</li>
                  <li>• Instant confirmation available</li>
                  <li>• Flexible payment options</li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is here to help you select the perfect package for your getaway. 
              Contact us for personalized recommendations and special arrangements.
            </p>
            <a
              href="https://wa.me/94775145131?text=Hello! I need help choosing the right package for my stay at The Mountain Breeze Galle Cabanas. Can you provide some recommendations?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Personalized Recommendations
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Packages;