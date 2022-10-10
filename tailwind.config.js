/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        DMSans: "DMSans",
        KronaOne: "KronaOne",
        Syne: "Syne"
      },
      keyframes: {
        trackingExpand: {
          "0%": { tracking: "-0.5em", opacity: "0" },
          "40%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
