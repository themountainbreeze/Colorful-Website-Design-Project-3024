import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiCoffee, FiTv, FiCar, FiUmbrella, FiClock } = FiIcons;
const { FaHotTub, FaPaw, FaUtensils } = FaIcons;

function Amenities() {
  const onSiteAmenities = [
    {
      icon: FaHotTub,
      title: 'Hot Tub/Jacuzzi',
      description: 'Relax and unwind in our shared hot tub surrounded by lush gardens'
    },
    {
      icon: FiUmbrella,
      title: 'Garden & Outdoor Space',
      description: 'Beautiful tropical gardens with seating areas and relaxation spots'
    },
    {
      icon: FiTv,
      title: 'Shared Lounge/TV Area',
      description: 'Comfortable common area with satellite TV and entertainment'
    },
    {
      icon: FiWifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the property'
    },
    {
      icon: FiCar,
      title: 'Free Private Parking',
      description: 'Secure parking space for your vehicle at no extra cost'
    },
    {
      icon: FaUtensils,
      title: 'Shared Kitchen',
      description: 'Fully equipped shared kitchen facilities for guest use'
    }
  ];

  const services = [
    {
      icon: FiClock,
      title: 'Daily Housekeeping',
      description: 'Fresh linens, towels, and daily cleaning service'
    },
    {
      icon: FaUtensils,
      title: 'Room Service',
      description: 'In-room dining service available on request'
    },
    {
      icon: FiCar,
      title: 'Airport Shuttle',
      description: 'Paid transfer service to/from Koggala Airport (17km away)'
    },
    {
      icon: FiUmbrella,
      title: 'Tour & Ticket Desk',
      description: 'Local tour arrangements and attraction ticket booking'
    },
    {
      icon: FiClock,
      title: 'Express Check-in/out',
      description: 'Quick and efficient arrival and departure process'
    },
    {
      icon: FiCar,
      title: 'Car & Bicycle Rental',
      description: 'Vehicle rental services for exploring the area'
    }
  ];

  const roomAmenities = [
    'Air conditioning',
    'Private bathroom with toiletries',
    'Balcony with garden/mountain views',
    'Kitchenette with refrigerator',
    'Satellite TV',
    'Free Wi-Fi',
    'Fresh linens and towels',
    'Daily housekeeping'
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
            alt="Mountain Breeze Amenities"
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
            Amenities & Services
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Enjoy luxury amenities and personalized service designed for your comfort and convenience.
          </motion.p>
        </div>
      </section>

      {/* On-Site Amenities */}
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
              On-Site Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relax and unwind with our carefully selected amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onSiteAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ivory-mist to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={amenity.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-3 text-center">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-center">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              Guest Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized services to make your stay memorable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Amenities */}
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
              In-Room Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cabana comes fully equipped for your comfort
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ivory-mist to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roomAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-ceylon-gold rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pet Policy */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FaPaw} className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-4">
                Pet-Friendly Policy
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We welcome your furry friends! Pets are allowed at no extra charge.
              </p>
              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-night-charcoal mb-3">Pet Guidelines:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pets must be well-behaved and supervised at all times</li>
                  <li>• Please clean up after your pets in all areas</li>
                  <li>• Pets are welcome in cabanas and garden areas</li>
                  <li>• Additional cleaning may apply for excessive pet hair or damage</li>
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
              Experience Luxury & Comfort
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your stay and enjoy all our premium amenities and personalized services.
            </p>
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas and learn more about your amenities."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Amenities;