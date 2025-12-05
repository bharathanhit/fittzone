import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-lg shadow-md border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Fit<span className="text-yellow-600">Z</span>one
          </Link>
          <div className="hidden font-semibold md:flex space-x-4">
            <Link to="/#hero" className="text-yellow-600  hover:text-white ">Home</Link>
            <Link to="/#testimonial" className="text-yellow-600  hover:text-white ">Testimonial</Link>
            <Link to="/#pricing" className="text-yellow-600  hover:text-white ">Pricing</Link>
            <Link to="/#contact" className="text-yellow-600  hover:text-white ">Contact</Link>
            <Link to="/ask" className="text-yellow-600  hover:text-white ">Ask Question</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 space-y-2"
        >
          <Link to="/#hero" className="block font-semibold text-yellow-600 hover:text-blue-600">Home</Link>
          <Link to="/#testimonial" className="block font-semibold text-yellow-600  hover:text-white ">Testimonial</Link>
          <Link to="/#pricing" className="block font-semibold text-yellow-600  hover:text-white ">Pricing</Link>
          <Link to="/#contact" className="block font-semibold text-yellow-600 hover:text-white ">Contact</Link>
          <Link to="/ask" className="block font-semibold text-yellow-600  hover:text-white ">Ask Question</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;