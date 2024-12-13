/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import flowbite from "flowbite/plugin";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#60376F",
        neutralGrey: "#717171",
        gray900: "#18191F",
        neutralPink: "#8f1fde",
        neutralBlue: "#231fde",
        green: "#60376F",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
        bgBrand: "#9e65b3",
        bgBrand2: "#9454ab",
      },
    },
  },
  plugins: [
    daisyui,
    flowbite,
    aspectRatio,
  ],
};
