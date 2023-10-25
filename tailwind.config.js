/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "440px", // tablet

      md: "668px",

      lg: "1024px", // desktop & laptop

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
