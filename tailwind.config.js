/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    colors: {
      primary: "#F97316",
    },
    fontFamily: {
      sans: ["Manrope"],
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
