import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            📝 Zubair's Todo
          </h1>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#home" className="hover:text-gray-200 transition-colors">
              Home
            </a>
            <a href="#tasks" className="hover:text-gray-200 transition-colors">
              My Tasks
            </a>
            <a href="#about" className="hover:text-gray-200 transition-colors">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-white hover:text-gray-200 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-indigo-700">
        <a
          href="#home"
          className="block px-4 py-2 text-sm hover:bg-indigo-800 transition-colors"
        >
          Home
        </a>
        <a
          href="#tasks"
          className="block px-4 py-2 text-sm hover:bg-indigo-800 transition-colors"
        >
          My Tasks
        </a>
        <a
          href="#about"
          className="block px-4 py-2 text-sm hover:bg-indigo-800 transition-colors"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
