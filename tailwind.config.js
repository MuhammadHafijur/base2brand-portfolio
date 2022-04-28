module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "5k": "1580px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
