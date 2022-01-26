const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero2bigger.jpg')",
      },
    },
    fontFamily: {
      display: ["Poppins"],
      body: ["Raleway"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
