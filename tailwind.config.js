/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        toggle: "#4A5568", // Adjust the color as needed
      },
      borderColor: {
        toggle: "#2D3748", // Adjust the color as needed
      },

      fontFamily: {
        Rampart: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
