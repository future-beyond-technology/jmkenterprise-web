/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: "#1C1C1C",
          accent: "#C40000",
          surface: "#ECEFF1"
        }
      },
      fontFamily: {
        sans: ["Rajdhani", "Segoe UI", "sans-serif"],
        heading: ["Oswald", "Arial Narrow", "sans-serif"]
      },
      boxShadow: {
        panel: "0 10px 30px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
