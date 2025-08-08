import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    mtConfig(),
    // mtConfig({
    //   colors: {
    //     background: "#fafafa",
    //     foreground: "#546e7a",
    //     surface: {
    //       default: "#e6e6e6",
    //       dark: "#cccccc",
    //       light: "#fafafa",
    //       foreground: "#546e7a",
    //     },
    //     primary: {
    //       default: "#546e7a",
    //       dark: "#455a63",
    //       light: "#78909c",
    //       foreground: "#cfd8dc",
    //     },
    //     secondary: {
    //       default: "#ff7806",
    //       dark: "#b35000",
    //       light: "#ff811a",
    //       foreground: "#c6d8d5",
    //     },
    //   },
    //   darkColors: {
    //     background: "#221c17",
    //     foreground: "#c6d8d5",
    //     surface: {
    //       default: "#322c26",
    //       dark: "#494036",
    //       light: "#221c17",
    //       foreground: "#c6d8d5",
    //     },
    //     primary: {
    //       default: "#5b4b3e",
    //       dark: "#4c3f34",
    //       light: "#89714d",
    //       foreground: "#c6d8d5",
    //     },
    //     secondary: {
    //       default: "#ff7806",
    //       dark: "#b35000",
    //       light: "#ff811a",
    //       foreground: "#c6d8d5",
    //     },
    //   },
    // }),
  ],
};
