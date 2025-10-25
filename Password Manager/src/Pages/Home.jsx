import React from "react";
import { motion } from "framer-motion";
import PasswordManager from "./PasswordManager";

const Home = () => {
  const features = [
    {
      title: "Add Passwords",
      desc: "Easily add new passwords.",
      bg: "bg-purple-200",
      initial: { x: -100, opacity: 0 },
    },
    {
      title: "View & Edit and Delete",
      desc: "View your saved passwords.",
      bg: "bg-pink-200",
      initial: { x: 100, opacity: 0 },
    },
    {
      title: "Search & Filter",
      desc: "Quickly find passwords.",
      bg: "bg-green-200",
      initial: { y: -100, opacity: 0 },
    },
    {
      title: "Secure & Private",
      desc: "All data stored safely.",
      bg: "bg-yellow-200",
      initial: { y: 100, opacity: 0 },
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-blue-700">Password Manager</span>
      </motion.h1>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 text-left">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={`${feature.bg} p-6 rounded shadow-lg cursor-pointer`}
            initial={feature.initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="font-bold text-xl mb-2">{feature.title}</h2>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      <PasswordManager />
    </div>
  );
};

export default Home;
