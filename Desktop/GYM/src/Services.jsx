import { motion } from 'framer-motion';
import {
  FaDumbbell,
  FaUsers,
  FaLaptop,
} from 'react-icons/fa';
import {
  GiMuscleUp,
  GiMeditation,
} from 'react-icons/gi';
import {
  MdFastfood,
} from 'react-icons/md';

const services = [
  {
    title: "Personal Training",
    description: "1-on-1 customized fitness coaching tailored to your goals, with close tracking and motivation.",
    icon: FaDumbbell,
  },
  {
    title: "Group Classes",
    description: "Join high-energy classes like HIIT, Zumba, and Functional Training for motivation and fun.",
    icon: FaUsers,
  },
  {
    title: "Nutrition Guidance",
    description: "Get personalized diet plans from certified experts to complement your fitness journey.",
    icon: MdFastfood,
  },
  {
    title: "Strength Training",
    description: "Build muscle and improve endurance with our structured lifting programs.",
    icon: GiMuscleUp,
  },
  {
    title: "Yoga & Meditation",
    description: "Relax, stretch, and find your inner balance with our peaceful yoga sessions.",
    icon: GiMeditation,
  },
  {
    title: "Online Coaching",
    description: "Train from anywhere with our virtual workout programs and live trainer support.",
    icon: FaLaptop,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 min-h-screen px-4 py-12 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Our Services
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-700"
          >
            <motion.div
              whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
              className="mb-4 text-indigo-500"
            >
              <Icon className="text-4xl" />
            </motion.div>
            <h2 className="text-xl font-semibold text-white mb-2">
              {title}
            </h2>
            <p className="text-gray-400 text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;