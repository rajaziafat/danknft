const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roundo", ...defaultTheme.fontFamily.sans],
        varela: ["Varela Round"],
      },
      colors: {
        primary: "#37A300",
        body: "#171815",
        babyPink: "#FF437E",
        darkBg: "#10120E",
      },
    },
  },
  plugins: [],
};
