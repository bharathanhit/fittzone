import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Niruvanam() {
  // Counter function
  const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center justify-center p-6 bg-white/20 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-md">
          {count}+ 
        </h2>
        <p className="text-lg md:text-xl font-bold text-black mt-2">{label}</p>
      </motion.div>
    );
  };

  return (
    <div id="/niruvanam" className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-black mb-12"
        >
          நாங்கள் 
        </motion.h1>

        {/* Grid of Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <Counter target={50} label="வேலை ஆட்கள்" />
          <Counter target={40} label="கட்டப்பட்ட வீடுகள்" />
          <Counter target={10} label="வருட அனுபவம்" />
          <Counter target={100} label="முடிக்கப்பட்ட திட்டங்கள்" />
          <Counter target={30} label="புதுப்பிப்பு (Renovation)" />
          <Counter target={15} label="வாஸ்து ஆலோசனைகள்" />
        </div>

        {/* Extra Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-lg md:text-xl font-extrabold text-black max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-blue-600">Meenakshi Construction</span> – 
          எங்கள் நிறுவனம் *அடித்தளம் முதல் 3D வரை* அனைத்து வேலைகளையும் நம்பகத்தன்மையுடன் செய்து வருகிறது.
        </motion.p>
      </div>
    </div>
  );
}