import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';
import { sendContactEmail } from '../api/contact';
import TawkToChat from '../components/TawkToChat';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend } = FiIcons;
const { FaWhatsapp, FaFacebook, FaInstagram } = FaIcons;

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          checkIn: '',
          checkOut: '',
          guests: '2'
        });
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+94 77 514 5131',
      link: 'tel:+94775145131'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'themountainbreezegalle@gmail.com',
      link: 'mailto:themountainbreezegalle@gmail.com'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      content: 'Galle, Southern Province, Sri Lanka',
      link: 'https://maps.google.com/?q=The+Mountain+Breeze+Galle'
    },
    {
      icon: FiClock,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TawkToChat />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-canopy to-ocean-teal text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero/overview-all-landscape.jpg"
            alt="Contact Us"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Get in touch with us to plan your perfect getaway at The Mountain Breeze Galle Cabanas.
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={info.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-night-charcoal">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-emerald-canopy hover:text-ocean-teal transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-night-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/94775145131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                  >
                    <SafeIcon icon={FaWhatsapp} className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/The-Mountain-Breeze-Galle-61574130654874/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <SafeIcon icon={FaFacebook} className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/themountainbreezegalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <SafeIcon icon={FaInstagram} className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all"
                    placeholder="Booking inquiry, general question, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-canopy focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your inquiry, special requests, or any questions you have..."
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactUs;
