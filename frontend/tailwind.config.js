const path = require('path');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#FF6A4D",
          hover: "#E8583B",
          light: "#FFF0ED"
        },
        umber: {
          dark: "#1C1310",
          medium: "#2D221E"
        },
        gold: {
          DEFAULT: "#D8A657",
          light: "#FDF6E9"
        },
        emerald: {
          DEFAULT: "#0F5132",
          light: "#E8F5E9"
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
