import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const Button = ({ children, ...props }) => (
  <button
    className="bg-white/20 backdrop-blur-md text-white border border-white px-5 py-2 rounded-full hover:bg-white/30 transition"
    {...props}
  >
    {children}
  </button>
);

const slides = [
  {
    id: 1,
    title: "Elegance Redefined",
    text: "Experience seamless interaction with our next-gen interface.",
    cta: "Explore More",
    subtext: "Crafted with care and precision.",
    image: "https://via.placeholder.com/300x300.png?text=IMG1"
  },
  {
    id: 2,
    title: "Design that Inspires",
    text: "Form meets function in perfect harmony.",
    cta: "Discover Now",
    subtext: "A visual feast with purpose.",
    image: "https://via.placeholder.com/300x300.png?text=IMG2"
  },
  {
    id: 3,
    title: "Innovation in Motion",
    text: "Dynamic, intuitive, and made for you.",
    cta: "Start Today",
    subtext: "Driven by modern aesthetics.",
    image: "https://via.placeholder.com/300x300.png?text=IMG3"
  }
];

const ParticleOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="w-full h-full animate-pulse opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />
  </div>
);

const FlickerGlow = () => (
  <motion.div
    className="absolute inset-0 bg-white/5 mix-blend-soft-light pointer-events-none"
    animate={{ opacity: [0.02, 0.04, 0.03, 0.01, 0.05, 0.02] }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
  />
);

const LightSweep = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm pointer-events-none"
    animate={{ x: ['-100%', '100%'] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
);

export default function SlidingCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div {...swipeHandlers} className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <ParticleOverlay />
        <FlickerGlow />
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-10 z-10"
          >
            <div className="relative w-full md:w-1/2 text-white z-20 space-y-6">
              <h2 className="text-5xl font-bold leading-tight drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]">
                {slides[index].title}
              </h2>
              <p className="text-lg drop-shadow-sm max-w-md">{slides[index].text}</p>
              <Button>{slides[index].cta}</Button>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center items-end pt-12">
              <motion.div
                className="relative w-[250px] h-[250px] group"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <img
                  src={slides[index].image}
                  alt={slides[index].title}
                  className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                />
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 bg-gradient-to-tr from-cyan-400 to-blue-500 pointer-events-none animate-pulse" />
                <LightSweep />
              </motion.div>
            </div>
            <div className="absolute bottom-4 right-8 text-white text-sm italic opacity-70 z-10">
              {slides[index].subtext}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-6 px-4">
        <Button onClick={prevSlide}>Previous</Button>
        <Button onClick={nextSlide}>Next</Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}