import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronRight, FiHome } = FiIcons;

const Breadcrumbs = ({ breadcrumbs, className = '' }) => {
  if (!breadcrumbs || breadcrumbs.length <= 1) return null;

  return (
    <nav 
      className={`py-4 ${className}`}
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.ol 
          className="flex items-center space-x-2 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && (
                <SafeIcon 
                  icon={FiChevronRight} 
                  className="w-4 h-4 text-gray-400 mx-2" 
                />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // Current page - not a link
                <span 
                  className="text-gray-600 font-medium"
                  aria-current="page"
                >
                  {index === 0 && <SafeIcon icon={FiHome} className="w-4 h-4 mr-1 inline" />}
                  {crumb.name}
                </span>
              ) : (
                // Link to previous pages
                <Link
                  to={crumb.url}
                  className="text-emerald-canopy hover:text-ocean-teal transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <SafeIcon icon={FiHome} className="w-4 h-4 mr-1" />}
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </motion.ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
