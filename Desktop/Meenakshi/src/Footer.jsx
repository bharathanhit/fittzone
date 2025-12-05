 import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Logo
import footerbg from './assets/footer.jpg'; // Background

export default function Footer() {
  return (
    <footer
      className="relative text-blue-600 pt-24 pb-12 px-6 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      {/* Overlay (increased opacity with blue tint) */}
      <div className="absolute inset-0 bg-blue-200/60"></div>

      {/* Floating Logo (Black Border) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 border border-black rounded-full bg-blue-100 flex items-center justify-center shadow-xl overflow-hidden">
          <img src={logo} alt="Company Logo" className="object-contain w-20 h-20" />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 gap-6 sm:gap-10 text-sm text-center sm:text-left">
        {/* Left Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-black drop-shadow-lg">
            <h3 className="text-lg font-semibold">எங்களை பற்றி</h3>
            <ul className="space-y-1">
              <li><Link to="/niruvanam" className="hover:text-blue-700">நிறுவனம்</Link></li>

              <li><Link to="/#services" className="hover:text-blue-700">சேவைகள்</Link></li>
      
              <li><Link to="/#contact" className="hover:text-blue-700">தொடர்பு கொள்ள</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 col-span-1">
          <div className="space-y-3 text-black drop-shadow-md">
            <h3 className="text-lg font-semibold">ஆதரவு</h3>
            <ul className="space-y-1">
              <li><Link to="/ask" className="hover:text-blue-700">அடிக்கடி கேட்கப்படும் கேள்விகள்</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-blue-700">தனியுரிமை & விதிமுறைகள்</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separation Line */}
      <div className="relative z-10 max-w-7xl mx-auto my-8">
        <div className="border-t-2 border-black/50 w-full"></div>
      </div>

      {/* Socials + Slogan */}
      <div className="relative z-10 mt-6 flex flex-col items-center space-y-4">
        <div className="flex space-x-4 text-xl text-black">
          <a href="#" aria-label="Facebook" className="hover:text-blue-700"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-700"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-700"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube" className="hover:text-blue-700"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="text-black text-base italic font-semibold">
          “வீடு என்பது உணர்வு! – மீனாட்சி கட்டுமானம்”
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-10 border-t border-black/30 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-black gap-2 px-4 text-center md:text-left">
        <span>&copy; {new Date().getFullYear()} மதுரை கட்டிடம் சேவைகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</span>
        <span>Build by <span className="text-blue-700">♥</span>-BIXSOL-</span>
      </div>
    </footer>
  );
}