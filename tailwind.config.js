export const content = ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#4fcda9",
      secondary: "#4abdc0",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimGreen: "rgba(95, 190, 163, 0.43)",
    },
    fontFamily: {
      sans: ['Inter', 'open-sans', 'Arial', 'sans-serif'],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];