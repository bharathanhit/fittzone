import { motion } from 'framer-motion';

const memberships = [
  {
    title: "Basic",
    price: "₹999 / month",
    features: ["Gym Access", "Locker Room", "1 Group Class / Week"],
  },
  {
    title: "Pro",
    price: "₹1,999 / month",
    features: ["Everything in Basic", "Unlimited Group Classes", "1 Personal Training / Week"],
    popular: true,
  },
  {
    title: "Elite",
    price: "₹2,999 / month",
    features: ["Everything in Pro", "Custom Diet Plan", "Weekly Progress Report", "Priority Support"],
  },
];

const sharedGradient = "from-gray-800 via-indigo-600 to-gray-900";

const Membership = () => {
  return (
    <div className="bg-black min-h-screen px-4 py-16 md:px-16 lg:px-32 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Membership <span className='text-yellow-300'> Plans</span></h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {memberships.map(({ title, price, features, popular }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl shadow-xl p-6 bg-gradient-to-br ${sharedGradient} text-white border border-gray-700 ${
              popular ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            {popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-xl font-semibold mb-4">{price}</p>
            <ul className="space-y-2 text-sm text-gray-200">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-white text-black font-bold py-2 px-4 rounded-full shadow hover:bg-gray-200 transition"
            >
              Join Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Membership;