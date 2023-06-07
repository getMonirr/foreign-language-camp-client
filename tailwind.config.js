/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "camp-mon": "Montserrat",
      },
      colors: {
        "camp-primary": "#17543E",
        "camp-secondary": "#CFA649",
        "camp-primary-hover": "#093626",
        "camp-text": "#525C58",
        "camp-bg": "#D6ECE1",
        "camp-icon-bg": "#BDEAD9",
        "camp-icon-hover": "#7dceaf",
        "camp-nav": "#16563f",
      },
    },
  },
  plugins: [require("daisyui")],
};
