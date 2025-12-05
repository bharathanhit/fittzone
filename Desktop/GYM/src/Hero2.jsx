import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import img from "./assets/card1.jpg"; // Replace with your image path

const AboutSection = () => {
  return (
    <section className="hidden relative bg-gray-900 text-white overflow-hidden px-1">
      {/* Particles Background */}
      <Particles
        options={{
          fullScreen: { enable: false },
          background: { color: "#1f2937" },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex items-center sm-gap-6 gap-1 relative z-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-32 sm:w-48 md:w-60">
          <img
            src={img}
            alt="James Clark"
            className="w-full h-[260px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 relative">
          <h2 className="text-red-600 text-md sm:text-base font-semibold mb-2">ABOUT</h2>
          <h1 className="text-xl sm:text-3xl font-bold mb-4">JAMES CLARK</h1>
          <p className="text-gray-300 text-md sm:text-base mb-6 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          </p>

          {/* Animated Button */}
          <motion.button
            initial={{ opacity: 0, x: -100, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, backgroundColor: "#b91c1c", color: "#ffffff" }}
            className="bg-yellow-400 text-black text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition relative
                       -left-[200px] -top-[20px] md:left-0 md:top-0"
          >
            READ MORE →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;