/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "expert-image": "url('/images/Mom-photo.svg')",
        "expert-image1": "url('/images/Mom-photo1.svg')",
        "ext-img":
          "url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d')",
      },
      fontFamily: {
        proximaNova: ["var(--font-proximaNova)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#FFFFFF",
        100: "#F5F5F5",
        101: "#E9D7FE",
      },
      green: {
        100: "#02843F",
        101: "#00853E",
        102: "#057037",
        103: "#CAE1D4",
        104: "#F2FFF9",
        105: "#D2F1E3",
        106: "#F9F5FF",
      },
      black: {
        DEFAULT: "#000000",
        100: "#52525B",
        101: "#4E4E4E",
        102: "#5F5F5F",
        103: "#18181B",
        104: "#18191F",
        105: "#474A57",
        106: "#EAEAEA",
        107: "#666F7B",
        108: "#717C8B",
        109: "#475467",
        110: "#667085",
      },
      cherry: {
        100: "#FF4444",
        101: "#F88787",
      },
    },
  },
  plugins: [],
};
