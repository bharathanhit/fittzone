import React, { useRef, useState } from "react"; import { motion, AnimatePresence } from "framer-motion"; import item from "./assets/dumbelss.png"; import itemm from "./assets/ketell.png"; import bodybuilder from "./assets/bodybuilder.png"; import demoVideo from "./assets/demo.mp4";
const Hero = () => { 
  const rippleRef = useRef(null); 
  const [isDemoOpen, setDemoOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [textHidden, setTextHidden] = useState(false);

const createRipple = (e) => { const button = e.currentTarget; const circle = document.createElement("span"); const diameter = Math.max(button.clientWidth, button.clientHeight); const radius = diameter / 2;

circle.style.width = circle.style.height = `${diameter}px`;
circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
circle.style.position = "absolute";
circle.style.borderRadius = "9999px";
circle.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
circle.style.pointerEvents = "none";
circle.style.transform = "scale(0)";
circle.style.animation = "ripple-animation 0.6s linear";
circle.classList.add("ripple");

const existing = button.getElementsByClassName("ripple")[0];
if (existing) existing.remove();

if (button) {
  button.appendChild(circle);
}

};

return ( <section
id="home"
className="relative w-full min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat text-white overflow-hidden flex items-center justify-center"
> {/* Floating Dumbbell */} <motion.img src={item} alt="dumbbell" className="absolute top-6 left-0 w-20 sm:w-34 opacity-50 pointer-events-none drop-shadow-lg" animate={{ y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} />

{/* Floating Kettlebell */}
  <motion.img
    src={itemm}
    alt="kettlebell"
    className="absolute top-6 right-0 w-20 sm:w-30 opacity-60 pointer-events-none drop-shadow-lg"
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 14, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
  />

  <div className="relative w-full h-screen flex items-center overflow-hidden">
    {/* Text Content */}
    <div className="z-10 w-full md:w-1/2 px-6 md:px-16 text-white">
      <p className="text-yellow-400 font-semibold tracking-wide text-sm md:text-base mb-2">
        FITNESS & EXERCISE
      </p>
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
        TRAIN LIKE A <span className="text-yellow-400">BEAST!</span>
        <br />
        <span className="hidden sm:block text-lg font-medium text-gray-300">
          HUSTLE FOR THAT MUSCLE
        </span>
      </h1>

      <div className="flex items-center space-x-4 mt-6">
        {/* Primary CTA */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={createRipple}
          className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 relative overflow-hidden shadow-lg transform hover:scale-105"
          ref={rippleRef}
        >
          Start Today
        </motion.button>

        {/* Secondary CTA - Watch Demo */}
{/* Secondary CTA - Watch Demo with animated play icon */}
<motion.button
  onClick={() => {
    setClicked(true);
    setTextHidden(true);

    // Start video after 0.5 sec
    setTimeout(() => {
      setDemoOpen(true);
    }, 500);

    // Reset icon/text after 1 sec
    setTimeout(() => {
      setClicked(false);
      setTextHidden(false);
    }, 1000);
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 1.1 }}
  className="flex items-center overflow-hidden space-x-2 px-4 py-2 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full transition duration-300 min-w-[150px]"
>
  <motion.svg
    key={clicked ? "clicked" : "still"}
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 24 24"
    initial={{ x: 0, opacity: 1 }}
    animate={clicked ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <path d="M8 5v14l11-7z" />
  </motion.svg>

  {!textHidden && (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: clicked ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="whitespace-nowrap"
    >
      Watch Video
    </motion.span>
  )}
</motion.button>
      </div>
    </div>

    {/* Image Section */}
    <div className="absolute right-0 sm:right-40 top-1/2 -translate-y-1/2 w-[300px] h-[400px] md:relative md:w-1/2 md:h-full z-0">
      <img
        src={bodybuilder}
        alt="Muscular man lifting weights"
        className="w-full h-full object-cover shadow-xl rounded-lg transform hover:scale-105 transition duration-500 ease-in-out"
      />
    </div>
  </div>

  {/* Demo Modal */}
  <AnimatePresence>
    {isDemoOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 rounded-lg overflow-hidden max-w-lg w-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <video
            src={demoVideo}
            controls
            autoPlay
            className="w-full h-auto"
          />
          <button
            onClick={() => setDemoOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl leading-none"
          >
            &times;
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Ripple Animation Keyframes */}
  <style>{`
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `}</style>
</section>

); };

export default Hero;
