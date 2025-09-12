import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiWifi, FiCoffee, FiHeart, FiUsers } = FiIcons;
const { FaHotTub } = FaIcons;

function CabanasOverview() {
  const cabanas = [
    {
      id: 'luxury',
      name: 'Luxury Cabana',
      subtitle: 'Premium Comfort',
      image: '/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-mountain-view.jpeg',
      description: 'Experience luxury with two comfortable beds - one deluxe king bed and one double bed. Perfect for families or groups of up to 4 guests seeking premium comfort.',
      features: [
        { icon: FiCoffee, text: 'Deluxe king bed + Double bed' },
        { icon: FiUsers, text: 'Accommodates 4 guests' },
        { icon: FiWifi, text: 'Free Wi-Fi & AC' },
        { icon: FaHotTub, text: 'Hot water & romantic bath tub' }
      ],
      highlights: ['Two beds for 4 guests', 'Mountain views', 'Fully air-conditioned', 'Private kitchen']
    },
    {
      id: 'supreme-deluxe',
      name: 'Supreme Deluxe Cabana',
      subtitle: 'Ultimate Luxury',
      image: '/images/cabanas/supreme_deluxe/mountain-breeze-galle-supreme-deluxe-cabana-king-bed-sofa.jpeg',
      description: 'The ultimate luxury experience with a deluxe king size bed and comfortable sofa bed. Accommodates up to 4 guests with premium amenities and stunning mountain views.',
      features: [
        { icon: FiCoffee, text: 'Deluxe king size bed + Sofa bed' },
        { icon: FiUsers, text: 'Accommodates 4 guests' },
        { icon: FiWifi, text: 'Free Wi-Fi & Smart Android TV' },
        { icon: FaHotTub, text: 'Hot water & romantic bath tub' }
      ],
      highlights: ['King bed + Sofa bed', 'Smart Android TV', 'Private kitchen with ingredients', 'Stunning mountain view']
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
              Included Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Mountain Breeze Galle – More than just a luxury cabana, it's a romantic place that gives you an amazing feeling!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FiWifi, title: 'Fully Air-Conditioned Cabana', desc: 'Climate controlled comfort' },
              { icon: FaHotTub, title: 'Hot Water & Romantic Bath Tub', desc: 'Luxurious bathing experience' },
              { icon: FiWifi, title: 'Free WiFi & Smart Android TV', desc: 'Stay connected and entertained' },
              { icon: FiCoffee, title: 'Private Kitchen with Ingredients', desc: 'Cook your own meals' },
              { icon: FiCoffee, title: 'Free Water Bottle & Parking', desc: 'Complimentary amenities' },
              { icon: FiHeart, title: 'Stunning Mountain View', desc: 'Breathtaking natural scenery' }
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