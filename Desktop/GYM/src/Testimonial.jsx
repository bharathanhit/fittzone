import React, { useState } from "react";
import { motion } from "framer-motion";
import testcard1 from "./assets/testcard1.jpg";
import testcard2 from "./assets/testcard2.jpg";
import testcard3 from "./assets/testcard3.jpg";

const TestimonialCard = ({ image, subtitle, title, backHeading, backText, extraText }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="relative w-full h-72 cursor-pointer perspective"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`transition-transform duration-700 w-full h-full preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="absolute w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center px-4 py-6">
            <p className="text-gray-200 text-sm uppercase tracking-wider mb-2">
              {subtitle}
            </p>
            <h1 className="text-xl font-extrabold uppercase leading-tight">
              {title}
            </h1>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl rotate-y-180 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white px-6 py-6 flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold uppercase mb-2 text-yellow-400">
            {backHeading}
          </h3>
          <p className="text-sm text-center opacity-90 leading-snug mb-4">{backText}</p>
          <p className="text-sm text-center opacity-80">{extraText}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  const cards = [
    {
      image: testcard1,
      subtitle: "More than",
      title: "10+ TRAINERS",
      backHeading: "Certified Coaches",
      backText: "Train under certified professionals with elite programs.",
      extraText: "Join our extensive network of experienced trainers who focus on personalized training."
    },
    {
      image: testcard2,
      subtitle: "Achieve",
      title: "100+ SPARTANS",
      backHeading: "Spartan Community",
      backText: "Join our tribe of strong, motivated and disciplined warriors.",
      extraText: "Our community is about pushing limits, supporting each other, and achieving greatness."
    },
    {
      image: testcard3,
      subtitle: "Transform",
      title: "30+ SUPPLEMENTS",
      backHeading: "Fuel Your Journey",
      backText: "Best-in-class supplements curated for performance.",
      extraText: "We provide carefully selected supplements that aid in recovery, energy, and strength."
    },
  ];

  return (
    <section id="testimonial" className="w-full bg-[#0D0628] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-white text-4xl font-extrabold uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why <span className="text-yellow-400">Us</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Flip through the cards to explore what makes us stand out. Our
          trainers, community, and supplements are all tailored for your success.
        </motion.p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <TestimonialCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;