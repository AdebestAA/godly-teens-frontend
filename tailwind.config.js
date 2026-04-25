/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-900": "#073d21",
        "green-800": "#0b6b3a",
        "green-600": "#148248",
        "green-500": "#4caf50",
        "green-100": "#e8f3ec",
        "green-50": "#f3f8f4",
        gold: "#d4af37",
        "gold-soft": "#e7c977",
        "gold-dark": "#9c7e1f",
        ink: "#1a1a1a",
        "ink-60": "#4a4a4a",
        "ink-40": "#8a8a8a",
        paper: "#fafaf7",
        white: "#ffffff",
        line: "rgba(11, 107, 58, 0.12)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      animation: {
        slide: "slide 40s linear infinite",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
