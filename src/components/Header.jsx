import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Cabanas',
      href: '/cabanas',
      submenu: [
        { name: 'Overview', href: '/cabanas' },
        { name: 'Luxury Cabana', href: '/cabanas/luxury' },
        { name: 'Supreme Deluxe Cabana', href: '/cabanas/supreme-deluxe' }
      ]
    },
    { name: 'Packages', href: '/packages' },
    { name: 'Dining', href: '/dining' },
    { name: 'Gallery', href: '/gallery' },
    {
      name: 'More',
      href: '#',
      submenu: [
        { name: 'Amenities', href: '/amenities' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Location', href: '/location' },
        { name: 'About', href: '/about' },
        { name: 'FAQs', href: '/faqs' }
      ]
    },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/booking', highlight: true }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo/mountain-breeze-galle-logo.png"
              alt="The Mountain Breeze Galle Cabanas"
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-playfair font-bold text-emerald-canopy">
                The Mountain Breeze
              </h1>
              <p className="text-sm text-ocean-teal">Galle Cabanas</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="flex items-center space-x-1 text-night-charcoal hover:text-emerald-canopy transition-colors duration-200">
                      <span>{item.name}</span>
                      <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-2 text-night-charcoal hover:text-emerald-canopy hover:bg-ivory-mist transition-colors duration-200"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`transition-all duration-200 ${
                      item.highlight
                        ? 'px-6 py-2 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105'
                        : `text-night-charcoal hover:text-emerald-canopy ${location.pathname === item.href ? 'text-emerald-canopy font-semibold' : ''}`
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>



          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-night-charcoal hover:text-emerald-canopy"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-night-charcoal hover:text-emerald-canopy"
                      >
                        <span>{item.name}</span>
                        <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transform transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-night-charcoal hover:text-emerald-canopy"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 transition-all duration-200 ${
                        item.highlight
                          ? 'mx-3 mt-2 bg-gradient-to-r from-emerald-canopy to-ocean-teal text-white text-center font-semibold rounded-lg'
                          : 'text-night-charcoal hover:text-emerald-canopy'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;