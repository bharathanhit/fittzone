import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    {
      id: 1,
      title: "SILVER",
      price: "1000₹",
      description: "Forever free for individuals and small teams up to 3",
      features: ["Personalized training", "3 Users", "Unlimited Tasks"],
      buttonText: "Start for free",
    },
    {
      id: 2,
      title: "PLATINUM",
      price: "2000₹",
      description: "Per user/month billed yearly $39 billed monthly",
      features: [
        "Personalized training",
        "Unlimited Guests",
        "Preferred trainer",
        "12 months",
      ],
      buttonText: "Get Unlimited",
      badge: "New offers",
    },
    {
      id: 3,
      title: "GOLD",
      price: "1500₹",
      description: "Per user/month billed yearly $45 billed monthly",
      features: [
        "Personalized training",
        "Bulk Expert",
        "Advanced Analytics",
        "---",
      ],
      buttonText: "Get Enterprise",
    },
  ];

  return (
    <div
      id="pricing"
      className="w-full bg-[#140A2E] flex flex-col items-center py-8 pb-20"
    >
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#1A0F3A] to-[#3A1A4E] text-white rounded-xl shadow-md p-3 sm:p-4 flex flex-col items-center"
          >
            {/* Badge */}
            {plan.badge && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-purple-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-full mb-2"
              >
                {plan.badge}
              </motion.span>
            )}

            {/* Price */}
            <h2 className="text-lg sm:text-xl font-bold">{plan.price}</h2>

            {/* Title */}
            <h3 className="text-md sm:text-lg font-extrabold">{plan.title}</h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 text-center">
              {plan.description}
            </p>

            {/* Features */}
            <ul className="text-xs sm:text-sm text-gray-300 space-y-1 mb-3 mt-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Payment Button */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to={`/payment/${plan.id}`}
                className="bg-white text-[#1E0E3D] font-bold py-1 px-3 sm:px-4 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
              >
                {plan.buttonText}
                <motion.span
                  className="text-black inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
