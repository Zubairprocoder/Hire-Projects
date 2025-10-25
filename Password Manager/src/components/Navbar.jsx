import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 text-white p-4 sticky top-0 z-50 overflow-hidden ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link
            to="/passwordmanager"
            className="hover:text-blue-800 transition "
          >
            🔐 Password Manager
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:text-blue-800 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-800 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-800 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger / Close Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-purple-600 text-center py-10 font-bold shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-8 text-white text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Password Manager
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
