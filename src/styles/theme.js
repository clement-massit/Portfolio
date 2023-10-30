//theme.js
const tailwindColors = require("tailwindcss/colors");

const darkShade = 600;
const lightShade = 300;
const defaultShade = 500;
const neutralLightShade = 50;
const neutralDarkShade = 950;

export const colors = {
  shakespeare: {
    50: "#f1fafe",
    100: "#e3f2fb",
    200: "#c0e7f7",
    300: "#88d4f1",
    border: "#49bde7",
    500: "#34b2df",
    background: "#1486b5",
    700: "#116b93",
    800: "#125b7a",
    text: "#154c65",
    950: "#0e3143",
  },

  danube: {
    50: "#f0f8fe",
    100: "#ddeffc",
    200: "#c3e3fa",
    300: "#9bd3f5",
    border: "#6bbaef",
    500: "#53a3ea",
    background: "#3382dd",
    700: "#2a6ccb",
    800: "#2858a5",
    text: "#264c82",
    950: "#1b2f50",
  },

  neutral: tailwindColors.slate,
  brand: tailwindColors.violet,
  success: tailwindColors.teal,
  warn: tailwindColors.orange,
  danger: tailwindColors.red,
  info: tailwindColors.cyan,
};

export const getThemeColors = (color) => {
  return {
    DEFAULT: color[defaultShade],
    l: color[lightShade],
    d: color[darkShade],
    ...color,
  };
};

export const getNeutral = (shade) => {
  return shade === "light"
    ? neutralLightShade
    : shade === "dark"
    ? neutralDarkShade
    : colors.neutral[shade];
};
