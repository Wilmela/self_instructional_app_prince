/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        APP_BG: "#EFF9FE",
        APP_BLUE: "#55C3FA",
        APP_YELLOW: "#F4AE3B",
        APP_GREEN: "#54AD67",
        APP_VIOLET: "#6C62F8",
      },
      colors: {
        APP_GRAY: "#A6A6A6",
        APP_BLACK: "#060708",
        APP_VIOLET: "#6C62F8",
      },
    },
  },
  plugins: [],
};
