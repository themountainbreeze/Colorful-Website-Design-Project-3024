import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiUsers, FiAward } = FiIcons;
const { FaPaw, FaLeaf } = FaIcons;

function About() {
  const values = [
    {
      icon: FiHeart,
      title: 'Authentic Hospitality',
      description: 'Genuine Sri Lankan warmth and personalized service in every interaction'
    },
    {
      icon: FaLeaf,
      title: 'Sustainable Tourism',
      description: 'Eco-friendly practices that preserve our beautiful natural environment'
    },
    {
      icon: FaPaw,
      title: 'Pet-Friendly Welcome',
      description: 'Your furry family members are always welcome in our peaceful retreat'
    },
    {
      icon: FiUsers,
      title: 'Community Connection',
      description: 'Supporting local communities and sharing authentic cultural experiences'
    }
  ];

  const stats = [
    { number: '4.9', label: 'Average Rating', suffix: '/5' },
    { number: '44', label: 'Happy Guests', suffix: '+' },
    { number: '2', label: 'Luxury Cabanas', suffix: '' },
    { number: '100', label: 'Guest Satisfaction', suffix: '%' }
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
            src="/images/hero/mountain-breeze-galle-location-hero.jpg"
            alt="About Mountain Breeze"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover the story behind The Mountain Breeze Galle Cabanas—where luxury meets nature 
            in the heart of Sri Lanka's southern hills.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Nestled in the verdant hills of Galle, The Mountain Breeze Galle Cabanas was born 
                from a vision to create an intimate retreat where guests could experience the true 
                essence of Sri Lankan hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: that the most memorable experiences come 
                from authentic connections—with nature, with culture, and with each other. Every 
                detail of our cabanas has been thoughtfully designed to foster these connections 
                while providing the comfort and luxury our guests deserve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be recognized as one of Galle's premier boutique accommodations, 
                with a 4.9-star rating from our delighted guests who return again and again to 
                experience our mountain breezes and warm hospitality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/hero/mountain-breeze-galle-about-property.jpg"
                alt="Mountain Breeze property"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at The Mountain Breeze
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}<span className="text-3xl">{stat.suffix}</span>
                </div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/more/mountain-breeze-galle-scenic-mountain-garden-view.jpg"
                alt="Sustainable practices"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-night-charcoal mb-6">
                Sustainability & Community
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe in responsible tourism that benefits both our guests and our local community. 
                Our commitment to sustainability is woven into every aspect of our operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FaLeaf} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Eco-Friendly Practices</h4>
                    <p className="text-gray-600">Water conservation, waste reduction, and organic gardening</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Local Community Support</h4>
                    <p className="text-gray-600">Sourcing from local suppliers and employing local staff</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FaPaw} className="w-6 h-6 text-emerald-canopy mt-1" />
                  <div>
                    <h4 className="font-semibold text-night-charcoal">Wildlife Conservation</h4>
                    <p className="text-gray-600">Protecting local wildlife and maintaining natural habitats</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                A Message from Our Team
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed italic">
                "Every guest who stays with us becomes part of our extended family. We take pride in 
                creating not just comfortable accommodations, but meaningful experiences that connect 
                you with the natural beauty and rich culture of Sri Lanka. From the moment you arrive 
                until your departure, our goal is to ensure your stay exceeds your expectations."
              </p>
              <div className="text-center">
                <p className="font-semibold text-night-charcoal">The Mountain Breeze Team</p>
                <p className="text-emerald-canopy">Your Hosts in Galle</p>
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
              Experience Our Story
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Come and be part of our story. Book your stay and discover what makes 
              The Mountain Breeze Galle Cabanas truly special.
            </p>
            <a
              href="https://wa.me/94775145131?text=Hello! I'd love to experience The Mountain Breeze Galle Cabanas. Please help me plan my stay."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Your Experience
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;