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
      src: '/images/hero/cabana-exterior-landscape.jpg',
      alt: 'Cabana exterior and garden views',
      category: 'exterior',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 2,
      src: '/images/cabanas/mountain-view-cabana-interior.jpg',
      alt: 'Mountain-view cabana interior',
      category: 'cabanas',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 3,
      src: '/images/more/666493110.jpg',
      alt: 'Dining setup and food presentation',
      category: 'dining',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 4,
      src: '/images/more/740566563.jpg',
      alt: 'Romantic evening setup with lighting',
      category: 'romantic',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 5,
      src: '/images/hero/overview-all-landscape.jpg',
      alt: 'Garden and outdoor amenities',
      category: 'amenities',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 6,
      src: '/images/more/666497510.jpg',
      alt: 'Evening ambiance and garden lighting',
      category: 'romantic',
      credit: 'The Mountain Breeze Galle'
    },
    {
      id: 7,
      src: '/images/cabanas/supreme_deluxe/WhatsApp Image 2025-09-11 at 8.11.25 AM.jpeg',
      alt: 'Guest photo of cozy interior',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 8,
      src: '/images/more/740566563.jpg',
      alt: 'Guest photo of cabana facilities',
      category: 'cabanas',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 9,
      src: '/images/more/666493113.jpg',
      alt: 'Interior details and amenities',
      category: 'amenities',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 10,
      src: '/images/exterior/garden-outdoor-spaces-bunny-bro.jpg',
      alt: 'Garden and outdoor spaces',
      category: 'exterior',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 11,
      src: '/images/exterior/peaceful-garden-setting-nimesha.jpg',
      alt: 'Peaceful garden setting',
      category: 'exterior',
      credit: 'Guest photo via Google - Nimesha Thennakoon'
    },
    {
      id: 12,
      src: '/images/dining/dining-area-meal-presentation-bunny-bro.jpg',
      alt: 'Dining area and meal presentation',
      category: 'dining',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 13,
      src: '/images/more/666490021.jpg',
      alt: 'Beautiful exterior landscape and garden views',
      category: 'exterior',
      credit: 'Google Maps - The Mountain Breeze Galle'
    },
    {
      id: 14,
      src: '/images/more/742322809.jpg',
      alt: 'Evening ambiance with romantic lighting',
      category: 'romantic',
      credit: 'Google Maps - The Mountain Breeze Galle'
    },
    {
      id: 15,
      src: '/images/more/691481180.jpg',
      alt: 'Delicious food and drink presentation',
      category: 'dining',
      credit: 'Google Maps - The Mountain Breeze Galle'
    },
    {
      id: 16,
      src: '/images/cabanas/supreme_deluxe/WhatsApp Image 2025-09-11 at 8.11.27 AM (1).jpeg',
      alt: 'Comfortable interior with modern amenities',
      category: 'cabanas',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 17,
      src: '/images/cabanas/luxury/WhatsApp Image 2025-09-11 at 8.13.52 AM (1).jpeg',
      alt: 'Spacious cabana interior with natural light',
      category: 'cabanas',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 18,
      src: '/images/gallery/bunny-bro-interior-2.jpg',
      alt: 'Cozy interior setup with comfortable seating',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 19,
      src: '/images/gallery/bunny-bro-interior-3.jpg',
      alt: 'Interior view showcasing modern amenities',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 20,
      src: '/images/more/713844668.jpg',
      alt: 'Comfortable cabana interior with mountain views',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 21,
      src: '/images/gallery/bunny-bro-interior-5.jpg',
      alt: 'Well-appointed interior with natural lighting',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 22,
      src: '/images/cabanas/supreme_deluxe/WhatsApp Image 2025-09-11 at 8.11.25 AM (1).jpeg',
      alt: 'Spacious interior with comfortable furnishings',
      category: 'cabanas',
      credit: 'Guest photo via Google - Bunny bro'
    },
    {
      id: 23,
      src: '/images/gallery/akash-interior-3.jpg',
      alt: 'Modern cabana interior with excellent facilities',
      category: 'cabanas',
      credit: 'Guest photo via Google - Akash Snenevirathne'
    },
    {
      id: 24,
      src: '/images/gallery/nimesha-exterior-1.jpg',
      alt: 'Beautiful exterior view of the property',
      category: 'exterior',
      credit: 'Guest photo via Google - Nimesha Thennakoon'
    },
    {
      id: 25,
      src: '/images/gallery/property-exterior-1.jpg',
      alt: 'Beautiful property exterior view',
      category: 'exterior',
      credit: 'Property photo via Google Maps'
    },
    {
      id: 26,
      src: '/images/gallery/nimesha-exterior-3.jpg',
      alt: 'Peaceful garden setting with natural beauty',
      category: 'exterior',
      credit: 'Guest photo via Google - Nimesha Thennakoon'
    },
    {
      id: 27,
      src: '/images/gallery/nimesha-exterior-4.jpg',
      alt: 'Scenic outdoor views and landscaping',
      category: 'exterior',
      credit: 'Guest photo via Google - Nimesha Thennakoon'
    },
    {
      id: 28,
      src: '/images/more/666493089.jpg',
      alt: 'Romantic candlelit dinner',
      category: 'romantic',
      credit: 'Wikimedia Commons'
    },
    {
      id: 29,
      src: '/images/dining/candle-light-dinner-setup.jpg',
      alt: 'Elegant candle light dinner arrangement',
      category: 'romantic',
      credit: 'Wikimedia Commons'
    },
    {
      id: 30,
      src: '/images/gallery/property-exterior-2.jpg',
      alt: 'Stunning property landscape view',
      category: 'exterior',
      credit: 'Property photo via Google Maps'
    },
    {
      id: 31,
      src: '/images/more/684461305.jpg',
      alt: 'Scenic property surroundings',
      category: 'exterior',
      credit: 'Property photo via Google Maps'
    },
    {
      id: 32,
      src: '/images/romantic/candlelit-dinner-2.jpg',
      alt: 'Elegant candlelit dinner arrangement',
      category: 'romantic',
      credit: 'Wikimedia Commons'
    },
    {
      id: 33,
      src: '/images/more/742322813.jpg',
      alt: 'Guest photo of cabana facilities',
      category: 'cabanas',
      credit: 'Guest photo via Google'
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
            src="/images/hero/overview-all-landscape.jpg"
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