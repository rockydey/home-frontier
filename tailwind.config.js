/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      colorPrimary: "#ff214f",
      colorSecondary: "#535353",
      colorTertiary: "#262525",
    },
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
