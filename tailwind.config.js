/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    colors: {
      primary: "#F97316",
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
