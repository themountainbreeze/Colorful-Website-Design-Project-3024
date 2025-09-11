import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiPhone, FiMail, FiCalendar, FiUsers, FiCoffee, FiHeart, FiMessageSquare } = FiIcons;

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    stayType: 'full-board',
    cabana: 'luxury',
    checkInDate: '',
    checkInTime: '14:00',
    checkOutDate: '',
    checkOutTime: '10:00',
    adults: 2,
    children: 0,
    breakfast: 'english',
    addOns: [],
    petTraveling: 'no',
    specialRequests: ''
  });

  const stayTypes = [
    { id: 'full-board', name: 'Full Board', price: 72, priceLKR: 21500 },
    { id: 'cabana-only', name: 'Cabana Only', price: 49, priceLKR: 14500 },
    { id: 'night-out-meals', name: 'Night Out with Meals', price: 47, priceLKR: 14000 },
    { id: 'night-out-only', name: 'Night Out Only', price: 29, priceLKR: 8500 },
    { id: 'day-out-meals', name: 'Day Out with Meals', price: 39, priceLKR: 11500 },
    { id: 'day-out-only', name: 'Day Out Only', price: 25, priceLKR: 7500 }
  ];

  const cabanas = [
    { id: 'luxury', name: 'Luxury Cabana' },
    { id: 'supreme-deluxe', name: 'Supreme Deluxe Cabana' }
  ];

  const breakfastOptions = [
    { id: 'english', name: 'Full English/Irish' },
    { id: 'asian', name: 'Asian' },
    { id: 'halal', name: 'Halal' }
  ];

  const addOnOptions = [
    { id: 'anniversary', name: 'Anniversary/Honeymoon Decor' },
    { id: 'airport', name: 'Airport Shuttle' },
    { id: 'late-checkout', name: 'Late Check-out' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        addOns: checked 
          ? [...prev.addOns, value]
          : prev.addOns.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = stayTypes.find(type => type.id === formData.stayType)?.price || 0;
    const totalGuests = parseInt(formData.adults) + parseInt(formData.children);
    const extraGuestPrice = totalGuests > 2 ? (totalGuests - 2) * 34 : 0; // $34 per extra guest
    return basePrice + extraGuestPrice;
  };

  const calculateTotalPriceLKR = () => {
    const basePriceLKR = stayTypes.find(type => type.id === formData.stayType)?.priceLKR || 0;
    const totalGuests = parseInt(formData.adults) + parseInt(formData.children);
    const extraGuestPriceLKR = totalGuests > 2 ? (totalGuests - 2) * 10000 : 0;
    return basePriceLKR + extraGuestPriceLKR;
  };

  const formatPrice = (price) => {
    return `$${price}`;
  };

  const formatPriceLKR = (price) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('LKR', 'Rs.');
  };

  const generateWhatsAppMessage = () => {
    const selectedStayType = stayTypes.find(type => type.id === formData.stayType);
    const selectedCabana = cabanas.find(cabana => cabana.id === formData.cabana);
    const selectedBreakfast = breakfastOptions.find(option => option.id === formData.breakfast);
    const totalPrice = calculateTotalPrice();

    const message = `Booking Request – The Mountain Breeze Galle Cabanas

Name: ${formData.name}
Contact: ${formData.email} / ${formData.phone}
Cabana: ${selectedCabana?.name}
Package: ${selectedStayType?.name}
Check-in: ${formData.checkInDate}, ${formData.checkInTime}
Check-out: ${formData.checkOutDate}, ${formData.checkOutTime}
Guests: ${formData.adults} adults, ${formData.children} children
Breakfast: ${selectedBreakfast?.name}
Add-ons: ${formData.addOns.length > 0 ? formData.addOns.join(', ') : 'None'}
Pet: ${formData.petTraveling === 'yes' ? 'Yes' : 'No'}
Special Requests: ${formData.specialRequests || 'None'}

Total Price: ${formatPrice(totalPrice)} (${formatPriceLKR(calculateTotalPriceLKR())})

Please confirm availability and provide payment instructions.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/94775145131?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
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
            src="/images/hero/booking-hero.jpg"
            alt="Book your stay"
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
            Book Your Stay
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Complete your booking details and send directly to WhatsApp for instant confirmation.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-ivory-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-night-charcoal mb-6">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiMail} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Stay Details */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-night-charcoal mb-6">
                  Stay Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiCoffee} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Package Type *
                    </label>
                    <select
                      name="stayType"
                      value={formData.stayType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    >
                      {stayTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name} - {formatPrice(type.price)} ({formatPriceLKR(type.priceLKR)})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Cabana Selection *
                    </label>
                    <select
                      name="cabana"
                      value={formData.cabana}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    >
                      {cabanas.map(cabana => (
                        <option key={cabana.id} value={cabana.id}>
                          {cabana.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates and Times */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-night-charcoal mb-6">
                  Check-in & Check-out
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      required
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      Check-in Time
                    </label>
                    <input
                      type="time"
                      name="checkInTime"
                      value={formData.checkInTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      required
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      Check-out Time
                    </label>
                    <input
                      type="time"
                      name="checkOutTime"
                      value={formData.checkOutTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-night-charcoal mb-6">
                  Guests & Preferences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiUsers} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Adults *
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      Children
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    >
                      {[0, 1, 2].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      Breakfast Preference
                    </label>
                    <select
                      name="breakfast"
                      value={formData.breakfast}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                    >
                      {breakfastOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-night-charcoal mb-6">
                  Add-ons & Special Requests
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Add-on Services
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {addOnOptions.map(option => (
                        <label key={option.id} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value={option.id}
                            checked={formData.addOns.includes(option.id)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-emerald-canopy border-gray-300 rounded focus:ring-emerald-canopy"
                          />
                          <span className="text-sm text-gray-700">{option.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Pet Traveling
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="petTraveling"
                          value="yes"
                          checked={formData.petTraveling === 'yes'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-canopy border-gray-300 focus:ring-emerald-canopy"
                        />
                        <span className="text-sm text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="petTraveling"
                          value="no"
                          checked={formData.petTraveling === 'no'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-canopy border-gray-300 focus:ring-emerald-canopy"
                        />
                        <span className="text-sm text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <SafeIcon icon={FiMessageSquare} className="w-4 h-4 mr-2 text-emerald-canopy" />
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-emerald-canopy transition-colors"
                      placeholder="Any special arrangements, dietary requirements, or other requests..."
                    />
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gradient-to-r from-emerald-canopy/10 to-ocean-teal/10 rounded-xl p-6">
                <h3 className="text-xl font-playfair font-bold text-night-charcoal mb-4">
                  Price Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Package ({formData.adults + formData.children} guests)</span>
                    <div className="text-right">
                      <span className="font-semibold">{formatPrice(calculateTotalPrice())}</span>
                      <div className="text-sm text-gray-500">({formatPriceLKR(calculateTotalPriceLKR())})</div>
                    </div>
                  </div>
                  {parseInt(formData.adults) + parseInt(formData.children) > 2 && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Extra guests ({parseInt(formData.adults) + parseInt(formData.children) - 2} × $34)</span>
                      <span>+{formatPrice((parseInt(formData.adults) + parseInt(formData.children) - 2) * 34)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between text-lg font-bold text-emerald-canopy">
                    <span>Total</span>
                    <div className="text-right">
                      <span>{formatPrice(calculateTotalPrice())}</span>
                      <div className="text-sm text-gray-500 font-normal">({formatPriceLKR(calculateTotalPriceLKR())})</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Send Booking Request via WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center">
                You'll be redirected to WhatsApp with your booking details pre-filled. 
                Our team will confirm availability and provide payment instructions.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Booking;