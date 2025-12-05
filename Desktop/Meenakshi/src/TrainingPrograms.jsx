 import React from "react";
import { motion } from "framer-motion";

// Import service images
import foundationImg from "./assets/foundation.jpg";
import vasthuImg from "./assets/vasthu.jpg";
import materialImg from "./assets/material.jpg";
import beforeAfterImg from "./assets/beforeafter.jpg";
import drawingImg from "./assets/drawing.jpg";

export default function AboutUs() {
  const services = [
    {
      title: "🏗 உறுதியான அடித்தளம்",
      desc: "Meenakshi Construction உறுதியான மற்றும் நிலைத்தன்மை கொண்ட அடித்தள வேலைகளில் சிறப்பு பெற்றது. உங்கள் கனவு இல்லத்திற்கு நீண்ட ஆயுள் உறுதி செய்கின்றோம்.",
      img: foundationImg,
    },
    {
      title: "📐 வாஸ்து",
      desc: "எங்கள் கட்டுமானங்கள் வாஸ்து விதிகளுக்கு ஏற்ப வடிவமைக்கப்படும். இது உங்களுக்கு ஆரோக்கியம், அமைதி மற்றும் முன்னேற்றம் கொண்டுவரும்.",
      img: vasthuImg,
    },
    {
      title: "🧱 உயர்தர பொருட்கள்",
      desc: "சிறந்த தரமான சிமெண்ட், இரும்பு மற்றும் கட்டுமானப் பொருட்களை மட்டுமே பயன்படுத்துகிறோம். எப்போதும் தரத்தில் சலுகை இல்லை.",
      img: materialImg,
    },
    {
      title: "🛠 புதுப்பிப்பு (Renovation)",
      desc: "பழைய வீடுகள் மற்றும் கட்டிடங்களை நவீனமாக மாற்றும் திறமை எங்களுக்கு உள்ளது. புதுப்பிக்கப்பட்ட தோற்றத்துடன் புதிய வாழ்க்கை அளிக்கிறோம்.",
      img: beforeAfterImg,
    },
    {
      title: "🎨 2D & 3D வரைபடங்கள்",
      desc: "உங்கள் கனவு இல்லத்தை 2D மற்றும் 3D வடிவமைப்புகளின் மூலம் முன்கூட்டியே காண்பித்து, உங்களுக்கு முழுமையான கண்ணோட்டம் அளிக்கிறோம்.",
      img: drawingImg,
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 
                     text-black font-['Baloo_Thambi_2'] italic"
        >
          About us –{" "}
          <span className="font-['Baloo_Thambi_2'] italic">மீனாட்சி கட்டுமானம்</span>
        </motion.h1>

        {/* Intro Para */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-800 font-bold italic 
                     font-['Mukta_Malar'] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          நாங்கள் <span className="text-blue-700 italic"></span> —
          உங்கள் கனவு இல்லத்தை வலுவான அடித்தளம், வாஸ்து, மற்றும் உயர்தர பொருட்கள் கொண்டு
          உருவாக்குகிறோம்.{" "}
          <span className="text-blue-600 italic">நம்பிக்கை</span>,{" "}
          <span className="text-blue-600 italic">தரம்</span>,{" "}
          <span className="text-blue-600 italic">புதுமை</span> எங்கள் அடையாளம்.
        </motion.p>

        {/* Services Section */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="text-left lg:w-1/2">
                <h2
                  className="text-2xl md:text-3xl font-extrabold mb-4 
                             text-black font-['Baloo_Thambi_2'] italic"
                >
                  {service.title}
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-700 font-bold italic 
                             font-['Mukta_Malar'] leading-relaxed tracking-wide"
                >
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}