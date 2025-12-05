import React from 'react';
import { motion } from 'framer-motion';
import heroImage from './assets/herohome.jpg';
import heroImageLarge from './assets/herohome2.png';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex  bg-white/80 items-end justify-center  relative">
      <picture>
        <source srcSet={heroImageLarge} media="(min-width: 1024px)" />
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto  object-cover absolute inset-0 z-0 "
        />
      </picture>

      <motion.div
        className="relative z-10 bg-white/20 rounded-lg bottom-19 p-6 max-w-2xl shadow-xl text-black mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-2 text-blue-900">கனவுகள் பேசும் வீடுகள்!"</h1>
        <p className="text-lg mb-2 font-semibold">
         மீனாட்சி கன்ஸ்ட்ரக்ஷன் – உங்கள் கனவுகளை உயிர்ப்பிக்கும் அழகான வடிவமைப்புகள், வலிமையான கட்டுமானம், தரமான சேவை."
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;