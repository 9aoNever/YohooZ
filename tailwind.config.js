/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        school: {
          mint: "#10B981",
          bright: "#00ff9f",
          dark: "#064E3B",
          night: "#022C22",
          paper: "#D1FAE5"
        }
      },
      fontFamily: {
        sans: ["Noto Sans Thai", "Leelawadee UI", "Tahoma", "sans-serif"],
        display: ["Prompt", "Noto Sans Thai", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 255, 159, .14)"
      }
    }
  },
  plugins: []
};
