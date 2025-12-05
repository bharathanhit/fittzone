import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      body: "We collect information you provide directly to us, such as your name, email, and other details when you use our services.  usage patterns for analytics and improvements.",
    },
    {
      title: "2. How We Use Your Information",
      body: "We use your information to provide, maintain, and improve our services. This includes personalizing your experience, sending updates, responding to inquiries, and securing our platform.",
    },
    {
      title: "3. Sharing Your Information",
      body: "We do not sell your personal data. We may share information with third-party partners who help us operate the platform, comply with legal obligations, or protect our rights.",
    },
    {
      title: "4. Your Choices",
      body: "You can opt out of marketing emails, request data deletion, or manage cookies via your browser settings. For data requests, please contact us directly.",
    },
    {
      title: "5. Updates to This Policy",
      body: "We may update this privacy policy occasionally. When we do, we will revise the 'Effective Date' and notify you via our platform or email.",
    },
    {
      title: "6. Contact Us",
      body: "If you have any questions or concerns about this policy, feel free to contact us at support@gympowerhouse.com.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <div id='privacy-policy' className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-center mb-2">Privacy Policy</h1>
          <p className="text-center text-gray-400 text-sm">Effective Date: April 24, 2025</p>
        </motion.header>

        {/* Animated Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed text-sm sm:text-base">
          {sections.map((sec, i) => (
            <motion.section
              key={sec.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <h2 className="text-xl font-semibold text-white mb-2">{sec.title}</h2>
              <p>{sec.body}</p>
            </motion.section>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={sections.length}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <a
            href="/"
            className="inline-block px-6 py-3 bg-yellow-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </section>
  );
}