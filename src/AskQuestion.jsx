 import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const MeenakshiHelpSection = () => {
  const [formData, setFormData] = useState({ name: '', question: '' });
  const [faqs] = useState([
    { q: 'உங்கள் அலுவலக நேரம் என்ன?', a: 'எங்கள் அலுவலகம் திங்கள்–சனி காலை 9:00 மணி முதல் 11:30 மணி வரை மற்றும் மாலை 7:00 மணி முதல் 9:00 மணி வரை திறந்திருக்கும்.' },
    { q: 'நீங்கள் கட்டிட வடிவமைப்பு (Architectural Design) செய்து தருகிறீர்களா?', a: 'ஆம், நாங்கள் 2D, 3D வடிவமைப்பு மற்றும் Structural Design செய்து தருகிறோம்.' },
    { q: 'சதுர அடிக்கு கட்டுமான விலை என்ன?', a: 'விலை திட்டத்தின் தன்மை மற்றும் பொருட்கள் அடிப்படையில் மாறுபடும். விரிவான மதிப்பீடு எங்கள் குழுவிடம் கிடைக்கும்.' },
    { q: 'Renovation (புதுப்பிப்பு) வேலைகளும் செய்வீர்களா?', a: 'ஆம், வீடு, ஆபீஸ் மற்றும் Commercial Space-க்கு Renovation வேலைகள் மேற்கொள்கிறோம்.' },
  ]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const message = `வணக்கம், என் பெயர் ${formData.name}. எனக்கு ஒரு கேள்வி உள்ளது: ${formData.question}`;
    const url = `https://wa.me/7339310823?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id='/ask' className="min-h-screen bg-gradient-to-b from-blue-200 via-blue-500 to-blue-600 text-white pt-34 px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* FAQ Section */}
        <div className="bg-black/70 p-8 rounded-2xl shadow-xl border border-[#222] backdrop-blur-md">
          <h2 className="text-3xl text-gray-200 font-bold mb-4">மீனாட்சி கட்டுமானம் - அடிக்கடி கேட்கப்படும் கேள்விகள்</h2>
          <p className="text-gray-300 mb-6">எங்கள் கட்டுமான சேவைகள், விலை மற்றும் திட்டங்களைப் பற்றி சில விரைவான பதில்கள்.</p>
     
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black/40 rounded-lg">
                <button
                  className="w-full text-left p-4 font-medium text-white flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.q}
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-300">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ask a Question Form */}
        <div className="bg-black/70 p-8 rounded-2xl shadow-xl border border-[#222] backdrop-blur-md">
          <h2 className="text-3xl text-gray-200 font-semibold text-center mb-4">உங்களுக்குக் கேள்வியா?</h2>
          <p className="text-gray-300 text-center mb-8">எங்கள் கட்டுமான சேவைகள், சதுர அடி விலை, திட்டம் அல்லது பிற விவரங்கள் பற்றி கேளுங்கள்.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-200 mb-1">உங்கள் பெயர்</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="உதாரணம்: ராஜா"
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-sm text-gray-200 mb-1">உங்கள் கேள்வி</label>
              <textarea
                id="question"
                name="question"
                rows="4"
                required
                value={formData.question}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="உதாரணம்: சதுர அடிக்கு எவ்வளவு செலவு ஆகும்?"
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-medium rounded-lg hover:opacity-90 transition"
              >
                <FaWhatsapp className="w-5 h-5" />
                வாட்ஸ்அப்பில் கேளுங்கள்
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MeenakshiHelpSection;