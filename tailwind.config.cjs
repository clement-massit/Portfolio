import { colors, getNeutral, getThemeColors } from "./src/styles/theme";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        shakespeare: getThemeColors(colors.shakespeare),
        dark: getNeutral("dark"),
        light: getNeutral("light"),
        neutral: getThemeColors(colors.neutral),
        brand: getThemeColors(colors.brand),
        success: getThemeColors(colors.success),
        warn: getThemeColors(colors.warn),
        danger: getThemeColors(colors.danger),
        info: getThemeColors(colors.info),
      },
    },
  },
};

module.exports = config;
