import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      title: "Add Passwords",
      desc: "Quickly add and organize your passwords for easy access.",
      bg: "bg-purple-200",
      initial: { x: -100, opacity: 0 },
    },
    {
      title: "Edit & Update and Delete",
      desc: "Easily update or modify saved passwords anytime.",
      bg: "bg-pink-200",
      initial: { y: 100, opacity: 0 },
    },
    {
      title: "Search & Filter",
      desc: "Find passwords instantly with smart search tools.",
      bg: "bg-green-200",
      initial: { x: 100, opacity: 0 },
    },
    {
      title: "Secure Encryption",
      desc: "Your passwords are stored safely with encryption.",
      bg: "bg-yellow-200",
      initial: { y: -100, opacity: 0 },
    },
  ];

  const feedbacks = [
    {
      user: "Ali",
      comment:
        "This Password Manager made my life so easy! Everything feels organized.",
    },
    {
      user: "Sara",
      comment:
        "I love how secure and simple it is to use — no more password stress!",
    },
    {
      user: "Ahmed",
      comment: "Beautiful UI and smooth experience. Definitely recommended!",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Intro Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-600">
          About Password Manager
        </h1>
        <p className="text-lg text-gray-700">
          Password Manager is a secure and simple way to store, manage, and
          access all your passwords in one place. Built with React, Tailwind
          CSS, and Firebase, it offers a seamless experience with responsive
          design and smooth animations.
        </p>
      </motion.div>

      {/* Features Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`${feature.bg} p-6 rounded shadow-lg cursor-pointer`}
              initial={feature.initial}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 p-6 bg-gray-100 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">
          Why Use Password Manager?
        </h2>
        <p className="text-gray-700">
          Managing multiple passwords can be stressful. Password Manager keeps
          all your credentials secure and accessible anytime. You get fast
          search, easy updates, and a clean interface built for real-world
          users. Your security, simplicity, and privacy — all in one app.
        </p>
      </div>

      {/* User Feedback Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          User Feedback
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white rounded shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="italic text-gray-700">"{f.comment}"</p>
              <p className="mt-3 font-bold text-right text-gray-800">
                - {f.user}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
