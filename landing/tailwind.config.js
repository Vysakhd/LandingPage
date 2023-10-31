/** @type {import('tailwindcss').Config} */

export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {

    extend: {

      backgroundColor: {

        "reg-blue": "#2196F3",
      

        "green-primary": "#4CAF4F",

        "brand-secondary": "#263238",

        "neutral-grey": "#4D4D4D",

        "light-grey": "#717171",

        "neutral-light-grey": "#89939E",

      },

      colors: {

        "reg-blue": "#2196F3",

        "blue700": "#0D47A1",
    

        "writeblue": "#00BCD4",

        "neutral-grey": "#4D4D4D",

        "light-grey": "#717171",

        "neutral-light-grey": "#89939E",

      },

    },

  },

  plugins: [],

};