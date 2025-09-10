import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiDollarSign, FiHome, FiShield, FiAlertTriangle, FiGavel } = FiIcons;

function TermsOfConditions() {
  const sections = [
    {
      icon: FiFileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing our website or making a reservation, you agree to these Terms and Conditions',
        'These terms constitute a legally binding agreement between you and The Mountain Breeze Galle Cabanas',
        'If you do not agree with any part of these terms, you must not use our services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Continued use of our services after changes constitutes acceptance of new terms',
        'These terms apply to all guests, visitors, and users of our website and services'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Booking and Payment Terms',
      content: [
        'All bookings are subject to availability and confirmation',
        'A deposit of 50% is required to secure your reservation',
        'Full payment is due upon check-in unless otherwise arranged',
        'Prices are subject to change without notice until booking is confirmed',
        'All rates are quoted in Sri Lankan Rupees (LKR) unless otherwise specified',
        'Additional charges may apply for extra services, damages, or policy violations'
      ]
    },
    {
      icon: FiHome,
      title: 'Accommodation Terms',
      content: [
        'Check-in time: 2:00 PM, Check-out time: 10:00 AM',
        'Maximum occupancy limits must be strictly observed',
        'Guests are responsible for the conduct of all members of their party',
        'Smoking is prohibited inside all cabanas and common areas',
        'Pets are welcome but must be supervised at all times',
        'Quiet hours are from 10:00 PM to 7:00 AM'
      ]
    },
    {
      icon: FiShield,
      title: 'Liability and Insurance',
      content: [
        'Guests stay at their own risk and are responsible for their personal safety',
        'We are not liable for loss, theft, or damage to personal belongings',
        'Guests are liable for any damage caused to the property during their stay',
        'We recommend comprehensive travel insurance for all guests',
        'Our liability is limited to the amount paid for accommodation',
        'We are not responsible for injuries resulting from guest negligence'
      ]
    },
    {
      icon: FiAlertTriangle,
      title: 'Cancellation Policy',
      content: [
        'Free cancellation up to 24 hours before check-in date',
        'Cancellations within 24 hours will forfeit the deposit',
        'No-show bookings will be charged the full amount',
        'Peak season bookings may have different cancellation terms',
        'Force majeure events may allow for flexible cancellation terms',
        'Refunds will be processed within 7-14 business days'
      ]
    },
    {
      icon: FiGavel,
      title: 'Governing Law',
      content: [
        'These terms are governed by the laws of Sri Lanka',
        'Any disputes will be subject to the jurisdiction of Sri Lankan courts',
        'We will attempt to resolve disputes through mediation first',
        'Legal proceedings must be initiated within one year of the incident',
        'If any provision is found invalid, the remaining terms remain in effect',
        'These terms supersede all previous agreements and understandings'
      ]
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
            src="/images/hero/overview-all-landscape.jpg"
            alt="Terms of Conditions"
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
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Please read these terms carefully before making a reservation or using our services.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg opacity-90"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
              Welcome to The Mountain Breeze Galle Cabanas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of our website, booking services, 
              and accommodation at The Mountain Breeze Galle Cabanas. By making a reservation or 
              using our services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gradient-to-br from-ivory-mist to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={section.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-night-charcoal">
                    {section.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-ceylon-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10 rounded-2xl p-8">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Website Usage Terms
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our website is provided for informational and booking purposes only. You may not use 
                  our website for any unlawful purpose or in any way that could damage, disable, or 
                  impair our services.
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• All content on this website is protected by copyright and intellectual property laws</li>
                  <li>• You may not reproduce, distribute, or modify any content without written permission</li>
                  <li>• We reserve the right to suspend or terminate access for violations of these terms</li>
                  <li>• User-generated content (reviews, comments) must be truthful and respectful</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ceylon-gold/10 to-ivory-mist rounded-2xl p-8">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Force Majeure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We shall not be liable for any failure or delay in performance under these Terms 
                which is due to fire, flood, earthquake, pandemic, government action, war, terrorism, 
                or other causes beyond our reasonable control. In such events, we will work with 
                guests to reschedule or provide appropriate remedies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-ocean-teal/10 to-emerald-canopy/10 rounded-2xl p-8">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Privacy and Data Protection
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information. By using our services, 
                you consent to the collection and use of your information as described in our 
                Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you have any questions about these Terms and Conditions or need clarification 
              on any policies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@themountainbreezegalle.com"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/94775145131?text=Hello! I have questions about your terms and conditions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                These Terms and Conditions are effective as of the date last updated above. 
                We reserve the right to modify these terms at any time. Changes will be 
                posted on this page with an updated revision date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default TermsOfConditions;
