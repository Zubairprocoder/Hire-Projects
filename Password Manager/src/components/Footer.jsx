import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10 mt-10">
      <div className="container mx-auto  px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🔹 Column 1 — App Info */}
        <div>
          <h2 className="text-yellow-500 font-bold text-xl mb-2 cursor-pointer">
            Password Manager
          </h2>
          <p className="text-sm">
            Securely store, manage, and access your passwords anywhere. Built
            with React, Firebase, and Tailwind CSS.
          </p>
        </div>

        {/* 🔹 Column 2 — GitHub Section */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-yellow-500">GitHub</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/Zubairprocoder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 font-bold transition"
              >
                GitHub Profile
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Zubairprocoder/Password-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 font-bold transition"
              >
                Project Repository
              </a>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 3 — Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-yellow-500">
            {" "}
            Password Manager
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/passwordmanager"
                className="hover:text-blue-800 font-bold transition"
              >
                Password Manager
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-800 font-bold transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-800 font-bold transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-800 font-bold transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Copyright */}
      <div className="text-center mt-8 border-t border-purple-400 pt-4 text-sm">
        © {new Date().getFullYear()} Zubair Pro Coder — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
