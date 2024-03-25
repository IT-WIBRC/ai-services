/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#151515",
          800: "#282828",
          750: "#262626",
        },
        cyan: {
          550: "#6693AC",
          520: "#39B3DD",
        },
        gray: {
          550: "#4D4A4A",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [],
};
