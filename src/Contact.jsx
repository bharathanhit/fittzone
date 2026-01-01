 import React, { useState, useEffect } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import background image
import contactBg from './assets/contactbgb.jpg';

export default function ContactGrid() {
  const [toast, setToast] = useState(null);

  // Auto-hide toast after 2.5s
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // 📞 Handle phone click
  const handlePhoneClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = "tel:+918778671208"; // 📱 Mobile dialer
    } else {
      try {
        navigator.clipboard.writeText("8778671208");
        setToast("📋 Phone number copied");
      } catch (err) {
        setToast("⚠ Copy failed. Please copy manually");
      }
    }
  };

  // ✅ Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const url = "https://wa.me/918778671208";
    try {
      navigator.clipboard.writeText("https://wa.me/918778671208");
      setToast("📋 WhatsApp link copied");
    } catch {
      setToast("⚠ Copy failed. Please open manually");
    }
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: <MdLocationOn size={40} />,
      label: 'Office',
      href: 'https://maps.app.goo.gl/x2FouuKTtxcm8WxdA?g_st=ac',
    },
    {
      icon: <MdEmail size={40} />,
      label: 'Gmail',
      href: 'mailto:balamurugank32@gmail.com',
    },
    {
      icon: <MdPhone size={40} />,
      label: 'Phone',
      onClick: handlePhoneClick,
    },
    {
      icon: <FaInstagram size={40} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/meenakshi_construction_?igsh=aGE4MzdoNzMxNng2',
    },
    {
      icon: <FaWhatsapp size={40} />,
      label: 'WhatsApp',
      onClick: handleWhatsAppClick,
    },
    {
      icon: <FaFacebook size={40} />,
      label: 'Facebook',
      href: 'https://www.facebook.com/TpkMeenakshiConstructions',
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-200/60" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-3xl lg:max-w-5xl text-black text-center space-y-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg text-black">
            Contact
          </h1>

          {/* Contact Grid */}
          <div className="bg-white/20 rounded-2xl p-6 md:p-8 lg:p-12 grid grid-cols-2 sm:grid-cols-3 gap-6 shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col items-center space-y-2 transition transform hover:scale-110 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded cursor-pointer"
                onClick={item.onClick ? item.onClick : undefined}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="text-black">{item.icon}</div>
                    <span className="text-base font-medium text-black">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <>
                    <div className="text-black">{item.icon}</div>
                    <span className="text-base font-medium text-black">
                      {item.label}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ask Question Button */}
      <Link
        to="/ask"
        className="fixed bottom-6 right-6 z-50 bg-blue-400 hover:bg-blue-500 text-black p-4 rounded-full shadow-xl flex items-center justify-center animate-pulse focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <BiMessageDetail size={28} />
      </Link>

      {/* ✅ Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
}