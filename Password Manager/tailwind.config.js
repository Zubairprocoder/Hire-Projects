/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React files scan
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors (optional)
        primaryPurple: "#a78bfa",
        primaryPink: "#f9a8d4",
        primaryGreen: "#4ade80",
        primaryYellow: "#facc15",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        slideLeft: "slideLeft 0.8s ease-out forwards",
        slideRight: "slideRight 0.8s ease-out forwards",
        slideDown: "slideDown 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
