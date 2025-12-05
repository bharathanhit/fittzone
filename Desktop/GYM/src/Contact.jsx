import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function ContactGrid() {
  const contactInfo = [
    {
      icon: <MdLocationOn size={40} />,
      label: 'Location',
      href: 'https://www.google.com/maps',
    },
    {
      icon: <MdEmail size={40} />,
      label: 'Email',
      href: 'mailto:example@email.com',
    },
    {
      icon: <MdPhone size={40} />,
      label: 'Phone',
      href: 'tel:+1234567890',
    },
    {
      icon: <FaInstagram size={40} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/yourprofile',
    },
    {
      icon: <FaWhatsapp size={40} />,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
    },
    {
      icon: <FaXTwitter size={40} />,
      label: 'X',
      href: 'https://twitter.com/yourhandle',
    },
  ];

  return (
    <div
      id="contact"
      className="relative w-full h-screen bg-cover bg-center bg-[url('./assets/contactbg.jpg')] text-gray-900 dark:text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-3xl lg:max-w-4xl text-center space-y-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg">
            Get in <span className="text-yellow-500 dark:text-yellow-400">Touch</span>
          </h1>

          {/* Glass Grid */}
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl p-6 md:p-8 lg:p-12 grid grid-cols-2 sm:grid-cols-3 gap-6 shadow-lg">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 transition transform hover:scale-110 hover:text-yellow-500 dark:hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
                aria-label={item.label}
              >
                {item.icon}
                <span className="text-base md:text-lg font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Ask Button */}
      <Link
        to="/ask"
        className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-xl flex items-center justify-center animate-pulse focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        <BiMessageDetail size={28} />
      </Link>
    </div>
  );
}