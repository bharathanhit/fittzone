import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative text-white pt-24 pb-12 px-6 bg-no-repeat bg-center bg-cover bg-[url('./assets/footer.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-20 h-20 border border-white rounded-full bg-black/80 flex items-center justify-center text-2xl font-bold shadow-xl">
          GYM
        </div>
      </div>

      {/* Grid Layout: 2 columns on all screens */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 gap-6 sm:gap-10 text-sm text-center sm:text-left">
        {/* Left Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-yellow-400 drop-shadow-md">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-1">
              <li><Link to="/services" className="hover:text-red-400">All Services</Link></li>
              <li><Link to="/membership" className="hover:text-red-400">Gym Memberships</Link></li>
              <li><Link to="/training-programs" className="hover:text-red-400">Training Programs</Link></li>
              <li><Link to="/fitness-gear" className="hover:text-red-400">Fitness Gear</Link></li>
              <li><Link to="/meal-plans" className="hover:text-red-400">Meal Plans</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-yellow-400 drop-shadow-md">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy" className="hover:text-red-400">Get Support</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-400">Find a Trainer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-400">Your Account</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-400">Privacy & Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Socials + Quote Centered Under Columns */}
      <div className="relative z-10 mt-10 flex flex-col items-center space-y-4">
        <div className="flex space-x-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-red-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-red-400"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-red-400"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube" className="hover:text-red-400"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="text-white/80 text-sm italic">Train insane or remain the same.</p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-10 border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-white/80 gap-2 px-4 text-center md:text-left">
        <span>&copy; {new Date().getFullYear()} GYM Powerhouse. All rights reserved.</span>
        <span>Built with <span className="text-red-400">♥</span> by YourName</span>
      </div>
    </footer>
  );
}