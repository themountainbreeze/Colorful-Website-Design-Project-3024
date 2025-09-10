import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiEye, FiLock, FiMail, FiDatabase, FiUsers } = FiIcons;

function PrivacyPolicy() {
  const sections = [
    {
      icon: FiDatabase,
      title: 'Information We Collect',
      content: [
        'Personal identification information (name, email address, phone number)',
        'Booking and reservation details (check-in/out dates, guest preferences)',
        'Payment information (processed securely through third-party providers)',
        'Communication records (emails, messages, phone calls)',
        'Website usage data (IP address, browser type, pages visited)',
        'Location data (when you visit our property or use location services)'
      ]
    },
    {
      icon: FiEye,
      title: 'How We Use Your Information',
      content: [
        'Process and manage your bookings and reservations',
        'Provide customer service and respond to inquiries',
        'Send booking confirmations and important updates',
        'Improve our services and website functionality',
        'Comply with legal obligations and regulations',
        'Prevent fraud and ensure security of our systems'
      ]
    },
    {
      icon: FiUsers,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with trusted service providers (payment processors, booking platforms)',
        'Data may be disclosed if required by law or legal proceedings',
        'Anonymous, aggregated data may be used for statistical purposes',
        'Information shared with emergency services if necessary for guest safety',
        'Marketing partners only with explicit consent'
      ]
    },
    {
      icon: FiLock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission and storage',
        'Secure servers with regular security updates and monitoring',
        'Limited access to personal information on a need-to-know basis',
        'Regular security audits and vulnerability assessments',
        'Secure disposal of data when no longer needed',
        'Staff training on data protection and privacy practices'
      ]
    },
    {
      icon: FiShield,
      title: 'Your Rights',
      content: [
        'Access your personal information we hold about you',
        'Request correction of inaccurate or incomplete data',
        'Request deletion of your personal information (subject to legal requirements)',
        'Object to processing of your data for marketing purposes',
        'Request data portability in a structured, machine-readable format',
        'Withdraw consent for data processing where applicable'
      ]
    },
    {
      icon: FiMail,
      title: 'Cookies and Tracking',
      content: [
        'Essential cookies for website functionality and security',
        'Analytics cookies to understand website usage and improve services',
        'Marketing cookies for personalized advertising (with consent)',
        'Third-party cookies from integrated services (booking platforms, maps)',
        'You can control cookie preferences through your browser settings',
        'Some features may not work properly if cookies are disabled'
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
            alt="Privacy Policy"
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
              Our Commitment to Your Privacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At The Mountain Breeze Galle Cabanas, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website, make a reservation, or 
              stay at our property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Data Retention */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Booking and guest information: 7 years for tax and legal compliance</li>
                <li>• Marketing communications: Until you unsubscribe or request deletion</li>
                <li>• Website analytics: 26 months (Google Analytics default)</li>
                <li>• Security logs: 12 months for fraud prevention and security purposes</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-16 bg-gradient-to-br from-ivory-mist to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
              International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your information may be transferred to and processed in countries other than Sri Lanka. 
              We ensure that such transfers are conducted in accordance with applicable data protection 
              laws and that appropriate safeguards are in place to protect your personal information.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-emerald-canopy mb-3">Third-Party Services</h3>
              <p className="text-gray-600">
                We use trusted third-party services for payment processing, email communications, 
                and website analytics. These services may process your data in their respective 
                jurisdictions under their own privacy policies and security measures.
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
              Questions About Your Privacy?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@themountainbreezegalle.com"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/94775145131?text=Hello! I have questions about your privacy policy."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                This Privacy Policy may be updated from time to time. We will notify you of any 
                significant changes by posting the new Privacy Policy on this page and updating 
                the "Last updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default PrivacyPolicy;
