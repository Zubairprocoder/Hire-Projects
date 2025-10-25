import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10 mt-10">




      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🔹 Column 1 — App Info */}
        <div className="w-full">
          <h2 className="text-yellow-500 font-bold text-xl mb-2 cursor-pointer">
            Password Manager
          </h2>
          <p className="text-sm">
            Securely store, manage, and access your passwords anywhere. Built with React, Firebase, and Tailwind CSS, this app helps you generate strong passwords, organize them by category, and sync across all devices. Stay safe online without the hassle of remembering multiple passwords.
          </p>
        </div>

        {/* 🔹 Columns 2 & 3 — GitHub & Navigation in one row on mobile */}
        <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
          {/* Column 2 — GitHub */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-yellow-500">GitHub</h3>
            <ul className="space-y-2 text-start">
              <li>
                <Link
                  to="https://github.com/Zubairprocoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 font-bold transition"
                >
                  GitHub Profile
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/Zubairprocoder/Hire-Projects.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 font-bold transition"
                >
                  Project Repository
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-yellow-500">Navigation</h3>
            <ul className="space-y-2 text-start">
              <li>
                <Link to="/passwordmanager" className="hover:text-blue-800 font-bold transition">
                  Password Manager
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-800 font-bold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-800 font-bold transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-800 font-bold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
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
