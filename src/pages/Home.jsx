import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiWifi, FiCoffee } = FiIcons;
const { FaPaw, FaHotTub } = FaIcons;

function Home() {
  const valueProps = [
    {
      icon: FiCoffee,
      title: "Luxury Cabanas",
      description: "Air-conditioned comfort with balcony views, private bath, and kitchenette—your personal oasis in the hills."
    },
    {
      icon: FiMapPin,
      title: "Breathtaking Green Views",
      description: "Wake to mountain vistas and tropical gardens from your private balcony sanctuary."
    },
    {
      icon: FaHotTub,
      title: "Hot Tub & Garden Lounge",
      description: "Unwind beneath the trees, then soak away the day in our Jacuzzi—a blissful end to your adventure."
    },
    {
      icon: FaPaw,
      title: "Pet-Friendly Comfort",
      description: "Bring your best friend—pets are welcome in our peaceful mountain retreat!"
    }
  ];

  const packages = [
    {
      name: "Full Board",
      price: "Rs. 21,500",
      description: "Complete experience with all meals and overnight stay",
      features: ["Welcome drinks", "All meals", "Overnight stay", "Amenities access"]
    },
    {
      name: "Cabana Only",
      price: "Rs. 14,500",
      description: "Peaceful overnight stay with full amenities",
      features: ["Overnight stay", "Kitchenette access", "Wi-Fi", "Hot tub access"]
    },
    {
      name: "Night Out",
      price: "Rs. 14,000",
      description: "Evening to morning experience (5PM-9AM)",
      features: ["Meals & drinks", "Evening ambiance", "Overnight stay"]
    },
    {
      name: "Day Out",
      price: "Rs. 11,500",
      description: "Perfect day retreat (10AM-4PM)",
      features: ["Lunch & dessert", "Welcome drinks", "Day use amenities"]
    }
  ];

  const testimonials = [
    {
      text: "Highly recommended! We really enjoyed our one-night stay — great value for money. The host was also very helpful and welcoming.",
      author: "Mohanashiyaam Balasubramaniam",
      rating: 5
    },
    {
      text: "We had an amazing experience… Great hospitality… place was clean, peaceful and beautifully arranged.",
      author: "Akash Snenevirathne",
      rating: 5
    },
    {
      text: "Absolutely… worth the price… friendly service… very calm environment. Highly recommend.",
      author: "Yemesha Kayangi",
      rating: 5
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
            src="/images/hero/cabana-exterior-landscape.jpg"
            alt="The Mountain Breeze Galle Cabanas exterior"
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
            Experience Tranquility
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Private cabanas, hot tub, and mountain breezes—tailor your stay for day, night, or a full board escape.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book on WhatsApp
            </a>
            <Link
              to="/cabanas"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-night-charcoal transition-all duration-200"
            >
              Explore Cabanas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
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
              Why Choose Mountain Breeze?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of luxury, nature, and authentic Sri Lankan hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-ivory-mist to-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={prop.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
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
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted experiences designed for every type of getaway
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-night-charcoal mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-emerald-canopy mb-3">{pkg.price}</div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-ceylon-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/packages"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-ceylon-gold fill-current" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-night-charcoal">4.9/5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-4">
              Guest Reviews
            </h2>
            <p className="text-xl text-gray-600">Rated by 44+ guests on Google</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ivory-mist to-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-ceylon-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-night-charcoal">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/reviews"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Read All Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Perfect Location in Galle
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Just 10-15 minutes to Galle city & Fort. Experience the best of both worlds—peaceful mountain retreat 
              with easy access to historic attractions, beaches, and local culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to know more about your location and nearby attractions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </a>
              <Link
                to="/location"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                View Location
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;