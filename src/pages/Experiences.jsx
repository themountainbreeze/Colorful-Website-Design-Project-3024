import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiCamera, FiNavigation, FiSun, FiMoon } = FiIcons;

function Experiences() {
  const experiences = [
    {
      name: 'Galle Fort & Lighthouse',
      distance: '5.4 km',
      duration: '2-3 hours',
      description: 'Wander the UNESCO-era ramparts, snap photos of the iconic palm-framed Galle Lighthouse, explore boutiques and cafes, and visit museums like the National Maritime Museum inside the fort walls.',
      highlights: ['UNESCO World Heritage site', 'Historic lighthouse', 'Colonial architecture', 'Boutique shopping', 'Maritime museum'],
      image: '/images/experiences/galle-lighthouse.jpg',
      bestTime: 'Morning or late afternoon'
    },
    {
      name: 'Japanese Peace Pagoda (Rumassala)',
      distance: '8 km',
      duration: '1-2 hours',
      description: 'A serene white stupa perched atop Rumassala Hill with wide coastal views; built by Japanese Buddhist monks as a symbol of peace. Combine it with a short hike or a beach stop below.',
      highlights: ['Panoramic ocean views', 'Buddhist temple', 'Peaceful meditation', 'Rumassala Hill hike', 'Sunset views'],
      image: '/images/experiences/japanese-peace-pagoda.jpg',
      bestTime: 'Sunset for best views'
    },
    {
      name: 'Jungle Beach Snorkeling',
      distance: '12 km',
      duration: '3-4 hours',
      description: 'Sheltered cove with calm, clear water; great for easy snorkeling from shore and spotting reef fish. Local dive/snorkel centers offer guided sessions and gear.',
      highlights: ['Crystal clear waters', 'Coral reef snorkeling', 'Tropical fish spotting', 'Beach relaxation', 'Equipment rental available'],
      image: '/images/experiences/jungle-beach.jpg',
      bestTime: 'Morning for calm waters'
    },
    {
      name: 'Koggala Lake Boat Safari',
      distance: '15 km',
      duration: '2-3 hours',
      description: 'A scenic lake cruise through islets and mangroves, with stops at a temple island and a hands-on cinnamon demonstration at Cinnamon Island. Birdlife is abundant; tours range 2–3 hours.',
      highlights: ['Mangrove exploration', 'Cinnamon Island tour', 'Temple island visit', 'Bird watching', 'Traditional boat ride'],
      image: '/images/experiences/koggala-lake.jpg',
      bestTime: 'Early morning or late afternoon'
    },
    {
      name: 'Handunugoda Tea Estate',
      distance: '18 km',
      duration: '2-3 hours',
      description: 'Tour a low-country tea estate famed for "Virgin White Tea." Factory visit, tea fields walk, and tasting are typically included; many travelers pair it with Galle or Koggala excursions.',
      highlights: ['Virgin White Tea tasting', 'Tea plantation tour', 'Factory demonstration', 'Scenic tea fields', 'Educational experience'],
      image: '/images/experiences/tea-plantation.jpg',
      bestTime: 'Morning for factory operations'
    },
    {
      name: 'Sea Turtle Hatchery (Habaraduwa)',
      distance: '10 km',
      duration: '1-2 hours',
      description: 'A conservation-focused visit to see rescued turtles, learn about nesting and releases, and support protection efforts on Sri Lanka\'s south coast.',
      highlights: ['Turtle conservation', 'Baby turtle releases', 'Educational programs', 'Marine conservation', 'Photography opportunities'],
      image: '/images/experiences/turtle-hatchery.jpg',
      bestTime: 'Evening for turtle releases'
    }
  ];

  const dayItineraries = [
    {
      title: '48 Hours in Galle Fort',
      duration: '2 Days',
      description: 'Complete cultural immersion in historic Galle',
      activities: ['Fort exploration', 'Lighthouse visit', 'Museum tours', 'Local dining', 'Shopping']
    },
    {
      title: 'Nature & Wildlife Day',
      duration: '1 Day',
      description: 'Perfect for nature lovers and wildlife enthusiasts',
      activities: ['Turtle hatchery', 'Koggala Lake safari', 'Bird watching', 'Mangrove exploration']
    },
    {
      title: 'Beach & Water Activities',
      duration: '1 Day',
      description: 'Sun, sand, and underwater adventures',
      activities: ['Jungle Beach snorkeling', 'Beach relaxation', 'Water sports', 'Coastal walks']
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
            src="/images/experiences/galle-lighthouse.jpg"
            alt="Experiences near Mountain Breeze"
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
            Experiences & Activities
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover handpicked activities within the Galle–Unawatuna–Koggala corridor 
            that pair perfectly with your stay.
          </motion.p>
        </div>
      </section>

      {/* Experiences Grid */}
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
              Top Experiences Near Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From historic forts to pristine beaches, explore the best of Galle's attractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-playfair font-bold text-night-charcoal">
                      {experience.name}
                    </h3>
                    <span className="bg-emerald-canopy text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.distance}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiSun} className="w-4 h-4" />
                      <span>{experience.bestTime}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-night-charcoal mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-emerald-canopy/10 text-emerald-canopy px-2 py-1 rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/94775145131?text=Hello! I'd like to arrange a visit to ${experience.name} during my stay at The Mountain Breeze Galle Cabanas.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Arrange via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Itineraries */}
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
              Suggested Itineraries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated day plans to help you make the most of your visit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dayItineraries.map((itinerary, index) => (
              <motion.div
                key={itinerary.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair font-bold text-night-charcoal mb-2">
                    {itinerary.title}
                  </h3>
                  <span className="bg-ceylon-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {itinerary.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-center">
                  {itinerary.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-emerald-canopy">Includes:</h4>
                  <ul className="space-y-1">
                    {itinerary.activities.map((activity, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-ceylon-gold rounded-full mr-2"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation & Booking */}
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
                We Arrange Everything
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Don't worry about the logistics! Our team can arrange transportation, 
                tickets, and guided tours for all nearby attractions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiNavigation} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Transportation Services</h4>
                    <p className="text-gray-600">Car rentals, tuk-tuk arrangements, and guided tours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCamera} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Photography Tours</h4>
                    <p className="text-gray-600">Professional guides for the best photo opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Local Expertise</h4>
                    <p className="text-gray-600">Insider knowledge of the best times and hidden gems</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-6 text-center">
                Frequently Asked
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-canopy mb-1">Do you arrange transport?</h4>
                  <p className="text-gray-600 text-sm">Yes—chat with us on WhatsApp for current rates and availability.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-canopy mb-1">Can you book tickets?</h4>
                  <p className="text-gray-600 text-sm">We can arrange entry tickets and guided tours for most attractions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-canopy mb-1">Best time to visit?</h4>
                  <p className="text-gray-600 text-sm">We'll advise on optimal timing based on weather and crowd levels.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-canopy mb-1">Group discounts?</h4>
                  <p className="text-gray-600 text-sm">Special rates available for groups and multiple bookings.</p>
                </div>
              </div>
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
              Ready to Explore Galle?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us to plan your perfect itinerary and arrange all the experiences 
              that interest you during your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to plan some experiences and activities during my stay at The Mountain Breeze Galle Cabanas."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Plan My Activities
              </a>
              <a
                href="https://wa.me/94775145131?text=Hello! I need transportation arrangements for visiting attractions around Galle."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                Arrange Transport
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Experiences;