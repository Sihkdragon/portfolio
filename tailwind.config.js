const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/atoms/typography/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ["18px", "28px"],
      },
      fontFamily: {
        basic: ["Plus Jakarta Sans", "system-ui"],
      },
      container: {
        center: true,
      },
      colors: {
        main: "#006064",
        dark: "#212121",
        light: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
