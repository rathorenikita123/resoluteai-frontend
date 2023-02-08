/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    fontFamily: {
      IBM: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      textColor: "rgba(0, 0, 0, 0.6)",
      boxColor: "rgba(0, 0, 0, 0.2)",
      logoColor: "rgba(88, 74, 74, 0.74)",
    },
  },
  plugins: [],
};
