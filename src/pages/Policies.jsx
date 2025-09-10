import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiDollarSign, FiAlertTriangle, FiUsers, FiShield } = FiIcons;
const { FaPaw, FaSmokingBan } = FaIcons;

function Policies() {
  const policies = [
    {
      icon: FiClock,
      title: 'Check-in & Check-out Policy',
      content: [
        'Standard check-in: 2:00 PM',
        'Standard check-out: 10:00 AM',
        'Early check-in subject to availability',
        'Late check-out available until 12:00 PM (additional charges may apply)',
        'Valid photo ID required at check-in',
        'Different package types may have flexible timing options'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Cancellation & Payment Policy',
      content: [
        'Free cancellation up to 24 hours before check-in',
        '50% deposit required to secure booking',
        'Balance payable upon arrival',
        'No-show bookings will be charged full amount',
        'Peak season bookings may have different cancellation terms',
        'Payment accepted: Cash, bank transfer, major credit cards'
      ]
    },
    {
      icon: FiUsers,
      title: 'Guest Capacity & Pricing',
      content: [
        'Base price includes 2 persons',
        'Maximum occupancy: 4 persons per cabana',
        'Additional guests: +Rs. 10,000 per person',
        'Children under 5: Free (when sharing bed with parents)',
        'Extra beds available on request (subject to space and additional charges)',
        'Group bookings may qualify for special rates'
      ]
    },
    {
      icon: FaPaw,
      title: 'Pet Policy',
      content: [
        'Pets are welcome at no additional charge',
        'Pets must be well-behaved and house-trained',
        'Owners responsible for pet supervision at all times',
        'Clean up after pets in all areas',
        'Pets not allowed on furniture or beds',
        'Additional cleaning fees may apply for excessive pet hair or damage',
        'Aggressive pets may be asked to leave'
      ]
    },
    {
      icon: FaSmokingBan,
      title: 'Smoking & Substance Policy',
      content: [
        'Smoking prohibited inside all cabanas',
        'Designated smoking areas available in outdoor spaces',
        'No smoking in shared indoor areas',
        'Illegal substances strictly prohibited',
        'Violation may result in immediate eviction without refund',
        'Disposal of cigarette butts only in designated receptacles'
      ]
    },
    {
      icon: FiShield,
      title: 'Property & Damage Policy',
      content: [
        'Guests responsible for any damage to property',
        'Report any pre-existing damage upon check-in',
        'Lost keys: Rs. 2,000 replacement fee',
        'Excessive cleaning required: Additional charges apply',
        'Intentional damage will be charged at replacement cost',
        'Security deposit may be required for extended stays'
      ]
    },
    {
      icon: FiAlertTriangle,
      title: 'Safety & Conduct Policy',
      content: [
        'Quiet hours: 10:00 PM - 7:00 AM',
        'Maximum noise levels to respect other guests',
        'No parties or large gatherings without prior approval',
        'Children must be supervised at all times',
        'Hot tub usage at own risk - no lifeguard on duty',
        'Emergency contact information provided at check-in',
        'Guests must follow all safety instructions'
      ]
    },
    {
      icon: FiUsers,
      title: 'Visitor Policy',
      content: [
        'Day visitors allowed with prior notification',
        'Visitor access: 9:00 AM - 6:00 PM',
        'Maximum 2 additional day visitors per cabana',
        'Overnight visitors require approval and additional charges',
        'All visitors must register at reception',
        'Guests responsible for visitor conduct'
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
            src="https://lh3.googleusercontent.com/p/AF1QipNFJ7s18OqqIOZeqGk1ZVKIEnntyeULruVnl_q9=w1200"
            alt="Policies"
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
            Policies & Guidelines
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Please review our policies to ensure a comfortable and enjoyable stay for all guests.
          </motion.p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-ivory-mist to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-canopy to-ocean-teal rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={policy.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-night-charcoal">
                    {policy.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {policy.content.map((item, i) => (
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

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy/10 to-ocean-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6 text-center">
              Important Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-canopy mb-4">Emergency Procedures</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency contact numbers provided at check-in</li>
                  <li>• First aid kit available at reception</li>
                  <li>• Nearest hospital: Karapitiya Hospital (15 minutes)</li>
                  <li>• Fire extinguishers located in each cabana</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-emerald-canopy mb-4">Environmental Responsibility</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Water conservation practices encouraged</li>
                  <li>• Waste separation bins provided</li>
                  <li>• No single-use plastics policy</li>
                  <li>• Respect for local wildlife and plants</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-canopy/10 to-ocean-teal/10 rounded-lg">
              <h3 className="text-xl font-semibold text-night-charcoal mb-3">
                Policy Updates
              </h3>
              <p className="text-gray-600">
                These policies are subject to change without prior notice. The most current version 
                will always be available on our website and at the property. For any clarifications 
                or special requests, please contact our team directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Clarifications */}
      <section className="py-20 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is happy to clarify any policies or discuss special arrangements for your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94775145131?text=Hello! I have questions about your policies at The Mountain Breeze Galle Cabanas."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-canopy font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:contact@themountainbreezegalle.com"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-canopy transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Policies;