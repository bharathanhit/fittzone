 import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import your local assets from /assets
import card1d1 from "./assets/card1d1.jpg";
import card1d2 from "./assets/card1d2.jpg";
import card1d3 from "./assets/card1d3.jpg";
import card1d4 from "./assets/card1d4.jpg";
import card1d5 from "./assets/card1d5.jpg";

import card22 from "./assets/card22.jpg";
import card222 from "./assets/card222.jpg";
import card2222 from "./assets/card2222.jpg";

import card2 from "./assets/card2.jpg";
import card23 from "./assets/card23.jpg";
import card3 from "./assets/card3.jpg";
import card32 from "./assets/card32.jpg";

const Services = () => {
  const navigate = useNavigate();

  // ✅ Local static data with hashtags
  const services = [
    {
      title: "வீட்டுத் திட்டங்கள்",
      images: [card1d1, card1d2, card1d3, card1d4, card1d5],
      items: ["3D & 2D வரைபடங்கள்"],
      button: "See All",
      hashtag: "3ddrawings",
    },
    {
      title: "மேம்பாட்டு பணிகள்",
      images: [card22, card222, card2222],
      items: ["உள்துறை மற்றும் புற  வேலைகள்"],
      button: "See All",
      hashtag: "ongoingsites",
    },
    {
      title: "முடிக்கப்பட்ட வேலைகள்",
      images: [card32, card2, card3, card23],
      items: [],
      button: "See Update",
      hashtag: "finishedsites",
    },
  ];

  const [imageIndexes, setImageIndexes] = useState(
    services.map(() => 0) // index for each service
  );

  const handleSlide = (serviceIndex, direction) => {
    setImageIndexes((prev) => {
      const newIndexes = [...prev];
      const total = services[serviceIndex].images.length;
      if (total > 0) {
        newIndexes[serviceIndex] =
          (newIndexes[serviceIndex] + direction + total) % total;
      }
      return newIndexes;
    });
  };

  return (
    <section id="/services" className="relative py-12 px-4">
      {/* ✅ semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80 -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl text-black font-bold mb-8">
          எங்கள் கட்டுமான சேவைகள்
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col"
            >
              <img
                src={
                  service.images.length > 0
                    ? service.images[imageIndexes[index]]
                    : "https://via.placeholder.com/400x300?text=No+Image"
                }
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="flex justify-center gap-2 mt-1">
                <button
                  onClick={() => handleSlide(index, -1)}
                  className="text-white bg-black bg-opacity-40 px-2 py-1 rounded hover:bg-opacity-70"
                >
                  ‹
                </button>
                <button
                  onClick={() => handleSlide(index, 1)}
                  className="text-white bg-black bg-opacity-40 px-2 py-1 rounded hover:bg-opacity-70"
                >
                  ›
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(`/instagram?tag=${service.hashtag}`)}
                  className="mt-4 w-fit bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 
                             hover:scale-105 transition-transform"
                >
                  {service.button}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;