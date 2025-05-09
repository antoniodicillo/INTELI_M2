/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#022B3A",
        mediumBlue: "#1F7A8C",
        lightBlue: "#BFDBF7",
        veryLightBlue: "#E1E5F2"
      }
    }
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
