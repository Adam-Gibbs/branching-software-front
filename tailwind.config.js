const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: "Roboto",
      display: "Roboto, sans-serif",
      body: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        midGreen: '#30a51b',
        backgroundGreen: "#e9f5e7",
        startGrad: "#5a5a2d",
        endGrad: "#0de30d",
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
};
