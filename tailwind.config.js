/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#6B4A8D", // Deep plum for better contrast
          50: "#F4EFF7",
          100: "#E3D8EE",
          200: "#C1ADD7",
          300: "#9F82BF",
          400: "#7D57A8",
          500: "#6B4A8D", // Main primary color
          600: "#55397A",
          700: "#402966",
          800: "#2A1A53",
          900: "#150A3B",
        },
        secondary: {
          DEFAULT: "#A8DADC", // Soft pastel sea blue for a calm accent
          50: "#F0FAFA",
          100: "#D7F1F1",
          200: "#B0E4E5",
          300: "#89D7D8",
          400: "#62CACC",
          500: "#4BAEB0", // Main secondary color
          600: "#3A898B",
          700: "#2A6566",
          800: "#1A4142",
          900: "#0A1E1E",
        },
      },
    },
  },
  plugins: [],
};
