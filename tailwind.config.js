/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./index.html"],
  theme: {
    fontFamily: {
      Montserrat: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      colors: {
        greenLightDot: "#1dbf73",
        darkGreenPrimary: "#013914",
        bgWhite: "#fafafa",
        bgWhiteLightGray: "#f1fdf7",
        bgBlueDark: "#0d084d",
        goldStar: "#ffc108",
      },
    },
  },
  plugins: [],
};
