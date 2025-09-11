import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin } = FiIcons;
const { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } = FaIcons;

function Footer() {
  return (
    <footer className="bg-night-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://page.gensparksite.com/v1/base64_upload/5659ba61da5b2691bc0c882ee9be8d80" 
                alt="The Mountain Breeze Galle Cabanas" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-playfair font-bold text-ceylon-gold">
                  The Mountain Breeze
                </h3>
                <p className="text-gray-300">Galle Cabanas</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Romantic, nature-kissed luxury in the hills of Galle. Private cabanas with mountain breezes, 
              hot tub access, and personalized experiences for unforgettable stays.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/The-Mountain-Breeze-Galle-61574130654874/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-canopy rounded-full hover:bg-ocean-teal transition-colors duration-200"
              >
                <SafeIcon icon={FaFacebook} className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/reel/DLZCtVFIfpo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-canopy rounded-full hover:bg-ocean-teal transition-colors duration-200"
              >
                <SafeIcon icon={FaInstagram} className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@themountainbreezegalle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-canopy rounded-full hover:bg-ocean-teal transition-colors duration-200"
              >
                <SafeIcon icon={FaTiktok} className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/94775145131"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-canopy rounded-full hover:bg-ocean-teal transition-colors duration-200"
              >
                <SafeIcon icon={FaWhatsapp} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ceylon-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/cabanas" className="text-gray-300 hover:text-ceylon-gold transition-colors">Cabanas</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-ceylon-gold transition-colors">Packages</Link></li>
              <li><Link to="/amenities" className="text-gray-300 hover:text-ceylon-gold transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-ceylon-gold transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-ceylon-gold transition-colors">Reviews</Link></li>
              <li><Link to="/experiences" className="text-gray-300 hover:text-ceylon-gold transition-colors">Experiences</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-ceylon-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-emerald-canopy" />
                <span className="text-gray-300">+94 77 514 5131</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-emerald-canopy" />
                <span className="text-gray-300">contact@themountainbreezegalle.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-emerald-canopy mt-1" />
                <span className="text-gray-300">
                  Kapuhempala, Godaduwa Rd<br />
                  Galle 80000, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-400 text-sm">
              © 2025 The Mountain Breeze Galle Cabanas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-ceylon-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-ceylon-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/policies" className="text-gray-400 hover:text-ceylon-gold text-sm transition-colors">
                Policies
              </Link>
              <Link to="/faqs" className="text-gray-400 hover:text-ceylon-gold text-sm transition-colors">
                FAQs
              </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Built with ❤️ by{' '}
              <a
                href="https://charithhashana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ceylon-gold hover:text-emerald-canopy transition-colors"
              >
                CH
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;