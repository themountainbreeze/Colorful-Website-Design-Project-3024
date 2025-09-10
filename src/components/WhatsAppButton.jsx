import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FaWhatsapp } = FaIcons;

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/94775145131?text=Hello! I'd like to book a stay at The Mountain Breeze Galle Cabanas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SafeIcon icon={FaWhatsapp} className="w-6 h-6" />
      <span className="sr-only">Book on WhatsApp</span>
    </motion.a>
  );
}

export default WhatsAppButton;