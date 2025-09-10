import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'exterior', name: 'Exterior & Gardens' },
    { id: 'cabanas', name: 'Cabana Interiors' },
    { id: 'dining', name: 'Dining & Food' },
    { id: 'romantic', name: 'Romantic Setups' },
    { id: 'amenities', name: 'Amenities' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/p/AF1QipNYq_lAQlNwYMdzkA3ug0TCN6QSUz8pfEH0uoOl=w1200',
      alt: 'Cabana exterior and garden views',
      category: 'exterior',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np441yu0CwqGXSg1baB9jW-8bGetSqgxAAnMkogE8t_tUYuizUijgnLYQHOjx3HDpCCwE86sHJiWh0xVOTXk67O0mxRa3cTVyCFH99WRoGt9WVrlJnpYHCTSdTg2YBQvrlT_Fpt2-eyqOQ=w1200',
      alt: 'Mountain-view cabana interior',
      category: 'cabanas',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 3,
      src: 'https://lh3.googleusercontent.com/p/AF1QipNDok67CTjFiS3XK5O0wBdzZCOH6_X_ekx2222L=w1200',
      alt: 'Dining setup and food presentation',
      category: 'dining',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 4,
      src: 'https://lh3.googleusercontent.com/p/AF1QipMoJoxE2XzXDU_NFavMwoPZxVP1-A6NZ0HPxhyC=w1200',
      alt: 'Romantic evening setup with lighting',
      category: 'romantic',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 5,
      src: 'https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w1200',
      alt: 'Garden and outdoor amenities',
      category: 'amenities',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 6,
      src: 'https://lh3.googleusercontent.com/p/AF1QipPMmk-zdoXqsgi3Tn-OFUl2rgVNWORe3_qLjb48=w1200',
      alt: 'Evening ambiance and garden lighting',
      category: 'romantic',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 7,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90AXI4z7n5hUIgYYVACGidSJSI0Hb0qPzwwS8fZuVf_niEMvUbWvUWsJjRJyqQ6cKfw8xWx-Xc6KlK8c_QqptN2AnMbo5Kx7v_4pdFGWKc-iCVPyaWZ37wttuI237HZ6bIvOpf5R1ZdORxXW=w1200',
      alt: 'Guest photo of cozy interior',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 8,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90D4Dh8pKDVPTzFdjB3fpXiNs0AwwoYKIHCb-opE0cG1gjUkK-uCFlO8BezxNpnInuR5C5HKFJyhFxATKtFWqOiCVyevZ7IPTAz-BNc3S9LecT5934Mvu0PO2ZNhLyieY61S05LpSz0iEj_r=w1200',
      alt: 'Guest photo of cabana facilities',
      category: 'cabanas',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 9,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90AYoLl8jLpWJwzjScBdt6ORRUCWLY4_Jm6vMGBkXR6AhlWeOdnLNRFKd6jch4Zhoqxeka2nTkWvxlBCZv6EnqLfamAymG0nwwk2-EcWt0SiyiFPwqgdNNPEKtZnxKaVMsHaXjbcW5oWIdhp=w1200',
      alt: 'Interior details and amenities',
      category: 'amenities',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 10,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90Dvd542vv4qCrsTWxo9XzWrqBUMskfFn1Urz8dj1M56tE0gRXfPaUrH15tRa02d9cBIoYhtCOQrfMvSfG8_bbIuKaOqmpY2DgyOqYS3o-z8E6n5FGEgwf84cROPLHU-Bjyv5TgYjsFuPo6T=w1200',
      alt: 'Garden and outdoor spaces',
      category: 'exterior',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 11,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90Aw1xsXMSU6UYHCg0SltAuQUYtksKIS63Vht9em5nAsNgFSgpb_j0512foIy_vY-5uTTM_G24QpNY3wXIItpkZ2CoqowWvRnaWqgq6pRuoBuIG1Ugl3HSgLlXTq-LM1sxzTgc0x=w1200',
      alt: 'Peaceful garden setting',
      category: 'exterior',
      credit: 'Guest photo via Google - Nimesha Thennakoon'
    },
    {
      id: 12,
      src: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90D3GRYOSghGiizcNRFMnwZ4NpiwxoB03l9Osqij75Irs4sQ4Z86jrhkvN7gxKhj7doYWLunW2YPWLb4VtVmxWnwCj8IW3wMyIIIQN8i5zbHKsmNq2BTWTy_d0wb_SJYhttKZZjnZLYz8jAd=w1200',
      alt: 'Dining area and meal presentation',
      category: 'dining',
      credit: 'Guest photo via Google - Bunny bro'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
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
            src="https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w1200"
            alt="Mountain Breeze Gallery"
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
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Explore romantic cabana moments, balcony views, and lush garden scenes 
            captured by our guests and team.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                        <p className="text-white/80 text-xs">{image.credit}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <SafeIcon icon={FiX} className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                  >
                    <SafeIcon icon={FiChevronLeft} className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
                  >
                    <SafeIcon icon={FiChevronRight} className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <p className="font-medium">{selectedImage.alt}</p>
                <p className="text-sm text-gray-300">{selectedImage.credit}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your stay and experience the beauty of The Mountain Breeze Galle Cabanas firsthand. 
              Your perfect getaway awaits in the green hills of Galle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas after seeing your beautiful gallery."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Book Your Stay
              </a>
              <a
                href="https://www.facebook.com/p/The-Mountain-Breeze-Galle-61574130654874/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Gallery;