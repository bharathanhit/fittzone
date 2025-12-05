import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const GymHelpSection = () => {
  const [formData, setFormData] = useState({ name: '', question: '' });
  const [faqs] = useState([
    { q: 'What are your gym timings?', a: 'We’re open 5 AM – 11 PM, 7 days a week.' },
    { q: 'Do you offer personal training?', a: 'Yes! Certified trainers are available with flexible packages.' },
    { q: 'Is there a trial membership?', a: 'Absolutely. Get 3 days free to experience our vibe!' },
    { q: 'Are there group classes?', a: 'Yes – we offer HIIT, Zumba, Yoga & CrossFit classes daily.' },
  ]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const message = `Hi, my name is ${formData.name}. I have a question: ${formData.question}`;
    const url = `https://wa.me/7339310823?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white pt-34 px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-2xl shadow-xl border border-[#222] backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-4">Gym FAQs</h2>
          <p className="text-gray-400 mb-6">Quick answers about our gym, facilities, and programs.</p>
          <button className="mb-6 bg-gradient-to-r from-red-500 to-yellow-500 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Join Now →
          </button>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1e1e1e] rounded-lg">
                <button
                  className="w-full text-left p-4 font-medium text-white flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.q}
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ask a Question Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-2xl shadow-xl border border-[#222] backdrop-blur-md">
          <h2 className="text-3xl font-semibold text-center mb-4">Got a Fitness Question?</h2>
          <p className="text-gray-400 text-center mb-8">Want to know about memberships, diet plans, or workouts? Drop it below!</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-sm text-gray-300 mb-1">Your Question</label>
              <textarea
                id="question"
                name="question"
                rows="4"
                required
                value={formData.question}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Ask anything about our gym..."
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
                Ask on WhatsApp
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GymHelpSection;