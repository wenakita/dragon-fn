// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "500px", // add custom breakpoint *without removing md*
        bmb: "635px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
