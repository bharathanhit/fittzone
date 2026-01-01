import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './assets/logo.png'; // Assuming you have a logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-lg shadow-md border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex flex-col leading-none">
            <div className="flex items-center space-x-1">
              <img src={logo} alt="Logo" className="h-9 w-23 sm:h-13 sm:w-36" />
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-extrabold tracking-wide text-black">
                  MEENAKSHI
                </span>
                <span className="text-xs md:text-sm text-red-600  tracking-[0.3em] font-semibold">
                  CONSTRUCTION
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden font-semibold md:flex space-x-4">
            <Link to="/#home" className="text-blue-900 hover:text-blue-400">Home</Link>
            <Link to="/#services" className="text-blue-900 hover:text-blue-400">Services</Link>
            <Link to="/#pricing" className="text-blue-900 hover:text-blue-400">Pricing</Link>
            <Link to="/#contact" className="text-blue-900 hover:text-blue-400">Contact</Link>
            <Link to="/ask" className="text-blue-900 hover:text-blue-400">Ask Question</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
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
          className="md:hidden px-4 pb-4 space-y-2 flex flex-col items-end"
        >
          <div className="flex flex-col items-end w-full space-y-2">
            <Link to="/#home" className="block font-semibold text-blue-900 hover:text-blue-400">Home</Link>
            <hr className="w-full border-black" />
            <Link to="/#services" className="block font-semibold text-blue-900 hover:text-blue-400">Services</Link>
            <hr className="w-full border-black" />
            <Link to="/#pricing" className="block font-semibold text-blue-900 hover:text-blue-400">Pricing</Link>
            <hr className="w-full border-black" />
            <Link to="/#contact" className="block font-semibold text-blue-900 hover:text-blue-400">Contact</Link>
            <hr className="w-full border-black" />
            <Link to="/ask" className="block font-semibold text-blue-900 hover:text-blue-400">Ask Question</Link>
            <hr className="w-full border-black" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;