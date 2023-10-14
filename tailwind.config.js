/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lochmara: {
          50: "#f0f8ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7ec7fb",
          400: "#39abf7",
          500: "#0f91e8",
          600: "#0379d3",
          700: "#045ba0",
          800: "#084e84",
          900: "#0c416e",
          950: "#082949",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
