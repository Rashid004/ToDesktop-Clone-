/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     blue: "#3238f2",
      //     darkBlue: "#2a30d7e1",
      //     green: "#fff6cc",
      //     darkGreen: "#f8f0cd",
      //     yellow: "#ffc127",
      //   },
      // },

      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
