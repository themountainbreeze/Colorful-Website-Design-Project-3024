import React from 'react';
import { motion } from 'framer-motion';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-ivory-mist">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-canopy to-ocean-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Terms and conditions for your stay
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg opacity-90"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Booking and Reservations
              </h2>
              <p className="text-gray-600 mb-6">
                By making a reservation at The Mountain Breeze Galle, you agree to these terms and conditions:
              </p>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• All bookings are subject to availability</li>
                <li>• A deposit may be required to secure your reservation</li>
                <li>• Check-in time is 2:00 PM, check-out time is 11:00 AM</li>
                <li>• Valid identification is required at check-in</li>
                <li>• Rates are quoted in USD and LKR and are subject to change</li>
              </ul>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Cancellation Policy
              </h2>
              <p className="text-gray-600 mb-6">
                Our cancellation policy is as follows:
              </p>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Free cancellation up to 48 hours before check-in</li>
                <li>• Cancellations within 48 hours may incur charges</li>
                <li>• No-shows will be charged the full amount</li>
                <li>• Refunds will be processed within 7-10 business days</li>
              </ul>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Guest Responsibilities
              </h2>
              <p className="text-gray-600 mb-6">
                As our guest, you agree to:
              </p>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Respect other guests and maintain reasonable noise levels</li>
                <li>• Take care of the property and report any damages</li>
                <li>• Follow all safety guidelines and property rules</li>
                <li>• Not exceed the maximum occupancy limits</li>
                <li>• Not engage in illegal activities on the premises</li>
              </ul>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Property Rules
              </h2>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Smoking is prohibited inside all cabanas</li>
                <li>• Pets are not allowed unless pre-approved</li>
                <li>• Quiet hours are from 10:00 PM to 7:00 AM</li>
                <li>• Swimming and hot tub use is at your own risk</li>
                <li>• Outside food and beverages may be restricted</li>
              </ul>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Liability and Insurance
              </h2>
              <p className="text-gray-600 mb-8">
                The Mountain Breeze Galle is not responsible for loss, theft, or damage to personal belongings. 
                Guests participate in all activities at their own risk. We recommend travel insurance for your protection.
              </p>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Force Majeure
              </h2>
              <p className="text-gray-600 mb-8">
                We are not liable for any failure to perform our obligations due to circumstances beyond our control, 
                including but not limited to natural disasters, government actions, or other unforeseeable events.
              </p>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Modifications to Terms
              </h2>
              <p className="text-gray-600 mb-8">
                We reserve the right to modify these terms at any time. Changes will be posted on our website 
                and will take effect immediately upon posting.
              </p>

              <h2 className="text-3xl font-playfair font-bold text-night-charcoal mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="text-gray-600 space-y-2">
                <p>📧 Email: contact@themountainbreezegalle.com</p>
                <p>📱 WhatsApp: +94 77 514 5131</p>
                <p>📍 Address: The Mountain Breeze Galle, Galle, Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
