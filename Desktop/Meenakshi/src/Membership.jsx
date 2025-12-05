 import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import bg from "./assets/plansbg.jpg";

const plans = [
  { 
    name: "BASIC", 
    from: 5000, 
    to: 2300,
    services: [
      "2D Plan",
      "3D Elevation",
      "full Construction Works"
    ]
  },
  { 
    name: "PREMIUM", 
    from:7000, 
    to: 2500,
    services: [
      "2D Plan",
      "3D Elevation",
      " full Construction work",
      "Wall Putty Primer",
      "Elevation Design (color only)"
    ]
  },
  { 
    name: "PREMIUM+", 
    from: 10000, 
    to: 2700,
    services: [
      "2D Plan",
      "3D Elevation",
      "Full  Construction work",
      "Wall Putty Primer",
      "Elevation ",
      "Interior Work"
    ]
  }
];

export default function SquarefeetPlans() {
  return (
    <section
      className="w-full px-4 py-10 relative lg:min-h-screen bg-cover bg-no-repeat bg-center lg:bg-top"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blue overlay */}
      <div
        className="absolute inset-0 w-full h-full -z-20"
        style={{ background: "rgba(37, 99, 235, 0.55)" }}
      />
      {/* White overlay */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{ background: "rgba(255,255,255,0.85)" }}
      />

      {/* Header */}
      <header className="mb-10 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold italic tracking-tight font-['Baloo_Thambi_2'] !text-black">
          சதுர அடி <span className="text-yellow-500">திட்டங்கள்</span>
        </h1>
      </header>

      {/* Plans in Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-12 sm:gap-20 relative z-10"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center sm:items-start sm:text-left max-w-xs"
          >
            {/* Price in Same Horizontal Alignment */}
            <div className="h-[70px] flex items-center justify-center">
              <AnimatedNumber from={plan.from} to={plan.to} />
            </div>

            {/* Plan Name */}
            <span className="mt-2 text-lg sm:text-xl font-semibold italic tracking-wide font-['Mukta_Malar'] !text-black">
              {plan.name === "PREMIUM+" ? (
                <>
                  PREMIUM<span className="text-yellow-500 ml-1">+</span>
                </>
              ) : (
                plan.name
              )}
            </span>

            {/* Services */}
            <ul className="mt-3 text-sm sm:text-base font-semibold leading-relaxed list-disc list-inside sm:list-outside sm:pl-5 !text-black text-center sm:text-left">
              {plan.services.map((service, i) => (
                <li key={i} className="leading-relaxed">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Confidence para */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 text-center relative z-10"
      >
        <p className="text-xl sm:text-2xl font-bold italic font-['Mukta_Malar'] leading-relaxed max-w-4xl mx-auto tracking-wide !text-black">
          மதுரையில் தரமான கட்டுமான சேவையின் முன்னணி நிறுவனம் –{" "}
          <span className="text-blue-700 font-extrabold italic">மீனாட்சி கன்ஸ்ட்ரக்ஷன்</span>. 
          வலிமையான அடித்தளம், அழகிய வடிவமைப்பு மற்றும் நேர்மையான சேவையுடன், 
          உங்கள் கனவு இல்லங்களையும் வணிக வளாகங்களையும் நினைவாக்கி தருகிறோம்.
        </p>
      </motion.div>
    </section>
  );
}

function AnimatedNumber({ from, to }) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + (to - start) * progress);
        setValue(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView, from, to]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl font-extrabold !text-black"
    >
      ₹ {value.toLocaleString("en-IN")}
    </span>
  );
}