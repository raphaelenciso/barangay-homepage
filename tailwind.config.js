/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/Login_Desktop_BG.png')",
      },
      colors: {
        "dark-blue": "#13163F",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
