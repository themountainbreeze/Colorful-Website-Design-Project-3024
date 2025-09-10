import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiExternalLink } = FiIcons;

function Reviews() {
  const googleReviews = [
    {
      text: "The place was wonderful, clean,neat with best security and privacy😍 We had an amazing time at there 😍",
      author: "Sanduni Hansamali",
      rating: 5,
      date: "4 months ago",
      source: "Google"
    },
    {
      text: "I am staying two days this place. Delicious food and Friendly service. Recommended to anyone to staying this place.Thanks for your Hospitality.",
      author: "indika kanaththage",
      rating: 5,
      date: "2 months ago",
      source: "Google"
    },
    {
      text: "Highly recommended! We really enjoyed our one-night stay — great value for money. The host was also very helpful and welcoming. We'll definitely visit again!",
      author: "Mohanashiyaam Balasubramaniam",
      rating: 5,
      date: "2 months ago",
      source: "Google"
    },
    {
      text: "We had an amazing experience… Great hospitality… place was clean, peaceful and beautifully arranged… Definitely a great spot for a calm getaway.",
      author: "Akash Snenevirathne",
      rating: 5,
      date: "1 month ago",
      source: "Google"
    },
    {
      text: "We had a wonderful stay at the cabana! …clean, peaceful, and beautifully maintained. The staff… made us feel truly welcome.",
      author: "Madhushanka WicramaArachchi",
      rating: 4,
      date: "1 month ago",
      source: "Google"
    },
    {
      text: "Absolutely… worth the price… friendly service… very calm environment. Highly recommend.",
      author: "Yemesha Kayangi",
      rating: 5,
      date: "4 months ago",
      source: "Google"
    },
    {
      text: "Everything was beautifully arranged… better than I asked for… I will recommend it to anyone.",
      author: "Nelum Nimalshika",
      rating: 5,
      date: "2 weeks ago",
      source: "Google"
    },
    {
      text: "Quiet and beautiful environment… excellent service… inside cleaning very good… sleeping is very comfortable.",
      author: "Experiments By Madushanka",
      rating: 5,
      date: "3 weeks ago",
      source: "Google"
    },
    {
      text: "Truly wonderful experience… peaceful, green setting… rooms clean, cozy… homemade breakfast was delicious.",
      author: "Bunny bro",
      rating: 5,
      date: "1 month ago",
      source: "Google"
    }
  ];

  const tripReviews = [
    {
      text: "Amazing experience, loved the view and the quietness of the place. Very relaxing and very tidy. The place is well maintained.",
      author: "Hadeer Eweda",
      rating: 5,
      date: "Jun 17, 2025",
      source: "Trip.com"
    },
    {
      text: "It was really good time and nice place.",
      author: "Umayanga",
      rating: 5,
      date: "Apr 29, 2025",
      source: "Trip.com"
    },
    {
      text: "The house is new and pretty… kitchen in the room… bathroom is large with a bathtub and a washing machine… many trees… and naughty monkeys.",
      author: "Guest User",
      rating: 4,
      date: "Jul 26, 2025",
      source: "Trip.com"
    }
  ];

  const allReviews = [...googleReviews, ...tripReviews].sort((a, b) => {
    // Sort by rating first (5 stars first), then by recency
    if (a.rating !== b.rating) return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const averageRating = 4.9;
  const totalReviews = 46;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <SafeIcon 
        key={i} 
        icon={FiStar} 
        className={`w-5 h-5 ${i < rating ? 'text-ceylon-gold fill-current' : 'text-gray-300'}`} 
      />
    ));
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
            src="https://lh3.googleusercontent.com/geougc-cs/AB3l90D3GRYOSghGiizcNRFMnwZ4NpiwxoB03l9Osqij75Irs4sQ4Z86jrhkvN7gxKhj7doYWLunW2YPWLb4VtVmxWnwCj8IW3wMyIIIQN8i5zbHKsmNq2BTWTy_d0wb_SJYhttKZZjnZLYz8jAd=w1200"
            alt="Guest reviews"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex space-x-1 mr-4">
              {renderStars(5)}
            </div>
            <span className="text-4xl font-bold">{averageRating}/5</span>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            Guest Reviews
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Rated by {totalReviews}+ guests on Google and Trip.com. 
            Read authentic experiences from our valued visitors.
          </motion.p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-8">
              What Our Guests Say
            </h2>
            
            {/* Rating Breakdown */}
            <div className="bg-gradient-to-br from-ivory-mist to-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-canopy mb-2">{averageRating}</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-gray-600">Based on {totalReviews}+ reviews</p>
                </div>
              </div>
              
              {/* Rating Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const percentage = stars === 5 ? 85 : stars === 4 ? 15 : 0;
                  return (
                    <div key={stars} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{stars}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-ceylon-gold h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating and Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    review.source === 'Google' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{review.text}"
                </blockquote>

                {/* Author and Date */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-night-charcoal">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-8">
              Most Praised Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Cleanliness", 
                percentage: 98, 
                description: "Spotless cabanas and facilities",
                icon: "✨"
              },
              { 
                title: "Peaceful Setting", 
                percentage: 96, 
                description: "Tranquil mountain environment",
                icon: "🌿"
              },
              { 
                title: "Hospitality", 
                percentage: 97, 
                description: "Friendly and welcoming hosts",
                icon: "🤝"
              },
              { 
                title: "Value for Money", 
                percentage: 95, 
                description: "Excellent quality for the price",
                icon: "💎"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-ivory-mist to-white shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-night-charcoal mb-2">{feature.title}</h3>
                <div className="text-3xl font-bold text-emerald-canopy mb-2">{feature.percentage}%</div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Review Links */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Read More Reviews
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              See all our reviews on Google and Trip.com, or share your own experience after your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/search/The%20Mountain%20Breeze%20Galle?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Google Reviews
                <SafeIcon icon={FiExternalLink} className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://us.trip.com/hotels/galle-hotel-detail-127304893/the-mountain-breeze-galle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                View Trip.com Reviews
                <SafeIcon icon={FiExternalLink} className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-night-charcoal mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our happy guests and create your own memorable experience at The Mountain Breeze Galle Cabanas.
            </p>
            <a
              href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas after reading your amazing reviews."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Your Stay Now
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Reviews;