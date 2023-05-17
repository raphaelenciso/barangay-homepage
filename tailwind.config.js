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
        "primary-blue": "#033aa9",
        "primary-blue-outline": "#033baa90",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
