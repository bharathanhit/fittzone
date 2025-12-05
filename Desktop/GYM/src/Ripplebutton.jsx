import React from "react";
import { motion } from "framer-motion";
import item from "./assets/dumbelss.png";
import itemm from "./assets/ketell.png";
import bodybuilder from "./assets/bodybuilder.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat text-white overflow-hidden flex items-center justify-center">
      {/* Floating Left Dumbbell */}
      <motion.img
        src={item}
        alt="dumbbell"
        className="absolute top-6 left-0 w-20 sm:w-34 opacity-50 pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Floating Right Kettlebell */}
      <motion.img
        src={itemm}
        alt="kettlebell"
        className="absolute top-6 right-0 w-20 sm:w-30 opacity-60 pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

<div className="relative w-full h-screen flex items-center overflow-hidden">
  {/* Text Section */}
  <div className="z-10 w-full md:w-1/2 px-6 md:px-16 md:left-30 text-white">
    <p className="text-yellow-400 font-semibold tracking-wide text-sm md:text-base mb-2">
      FITNESS & EXERCISE
    </p>
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
      TRAIN LIKE A <span className="text-yellow-400">BEAST !</span>
      <br/><span className="hidden sm:block">HUSTLE FOR THAT MUSCLE</span>
    </h1>
    <button className="mt-6 bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition duration-300">
      Start Today
    </button>
  </div>

  {/* Image Section (no overlay) */}
  <div className="absolute right-0 sm:right-40 top-1/2 -translate-y-1/2 w-[300px] h-[400px] md:relative md:w-1/2 md:h-full z-0">
    <img
      src={bodybuilder}
      alt="Muscular man lifting weights"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </section>
  );
};

export default HeroSection;