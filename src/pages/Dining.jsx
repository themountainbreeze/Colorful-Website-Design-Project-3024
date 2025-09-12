import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiSun, FiMoon, FiClock } = FiIcons;

function Dining() {
  const breakfastOptions = [
    {
      name: 'Full English/Irish Breakfast',
      description: 'Traditional hearty breakfast featuring eggs, bacon, sausages, baked beans, grilled tomatoes, and toast. Perfect for starting your day with energy.',
      image: '/images/more/mountain-breeze-galle-full-english-breakfast.jpg',
      highlights: ['Farm-fresh eggs', 'Local bacon & sausages', 'Homemade bread', 'Fresh tomatoes']
    },
    {
      name: 'Asian Breakfast',
      description: 'Authentic Sri Lankan breakfast specialties including string hoppers, coconut roti, curry, and traditional accompaniments.',
      image: '/images/more/mountain-breeze-galle-asian-breakfast-specialties.jpg',
      highlights: ['String hoppers', 'Coconut roti', 'Local curries', 'Traditional spices']
    },
    {
      name: 'Halal Breakfast',
      description: 'Halal-certified breakfast options prepared according to Islamic dietary laws, featuring fresh and flavorful dishes.',
      image: '/images/dining/mountain-breeze-galle-halal-breakfast-sri-lankan.jpg',
      highlights: ['Halal certified', 'Fresh ingredients', 'Traditional flavors', 'Dietary compliance']
    }
  ];

  const diningTimes = [
    {
      icon: FiSun,
      title: 'Breakfast',
      time: '7:00 AM - 10:00 AM',
      description: 'Start your day with our variety of breakfast options'
    },
    {
      icon: FiCoffee,
      title: 'Lunch',
      time: '12:00 PM - 2:00 PM',
      description: 'Light meals and local specialties available'
    },
    {
      icon: FiMoon,
      title: 'Dinner',
      time: '6:00 PM - 9:00 PM',
      description: 'Evening dining with authentic Sri Lankan cuisine'
    },
    {
      icon: FiCoffee,
      title: 'Tea & Snacks',
      time: '3:00 PM - 5:00 PM',
      description: 'Afternoon tea service with light refreshments'
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
            src="/images/hero/mountain-breeze-galle-dining-hero.jpg"
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
            Dining Experience
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Savor authentic Sri Lankan flavors and international cuisine in the serene setting 
            of our mountain retreat.
          </motion.p>
        </div>
      </section>

      {/* Breakfast Options */}
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
              Breakfast Selections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a hearty breakfast—Full English/Irish, Asian, or Halal—then savor 
              evening tea and snacks as the garden turns gold.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {breakfastOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-night-charcoal mb-3">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-emerald-canopy">Highlights:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {option.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-ceylon-gold rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Schedule */}
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
              Dining Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy meals at the perfect times throughout your stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diningTimes.map((meal, index) => (
              <motion.div
                key={meal.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={meal.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-2">
                  {meal.title}
                </h3>
                <p className="text-emerald-canopy font-semibold mb-3">{meal.time}</p>
                <p className="text-gray-600 text-sm">{meal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-6">
                Authentic Sri Lankan Cuisine
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Experience the rich flavors of Sri Lankan cuisine prepared with fresh, 
                local ingredients. Our kitchen takes pride in serving traditional dishes 
                alongside international favorites.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Fresh Daily Preparation</h4>
                    <p className="text-gray-600">All meals prepared fresh daily with locally sourced ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCoffee} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Dietary Accommodations</h4>
                    <p className="text-gray-600">Special dietary requirements and preferences catered for</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiSun} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Garden Setting</h4>
                    <p className="text-gray-600">Dine surrounded by lush tropical gardens and mountain views</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/more/666493110.jpg"
                alt="Authentic Sri Lankan dining setup at Mountain Breeze Galle"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Features */}
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
              Special Dining Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiCoffee} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-4">
                Room Service
              </h3>
              <p className="text-gray-600">
                Enjoy meals in the privacy of your cabana with our convenient room service option.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiSun} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-4">
                Garden Dining
              </h3>
              <p className="text-gray-600">
                Dine al fresco in our beautiful gardens surrounded by tropical plants and mountain views.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiMoon} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-4">
                Romantic Setups
              </h3>
              <p className="text-gray-600">
                Special candlelit dinner arrangements for romantic occasions and celebrations.
              </p>
            </motion.div>
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
              Taste the Authentic Flavors
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your stay and experience the delicious cuisine and warm hospitality 
              that makes The Mountain Breeze special.
            </p>
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas and learn more about your dining options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Your Culinary Experience
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Dining;