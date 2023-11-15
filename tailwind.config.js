/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "min-sm": "320px",
      },
    },
  },
  plugins: [],
};
