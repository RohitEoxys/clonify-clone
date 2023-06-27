/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      boxShadow: {
        a: "2px 2px 10px -2px #00000040",
      },
    },

    colors: {
      main: "#5F6368",
      main2: "#1967D2",
      white: "#ffffff",
      black: "#000",
      bod: "#d9d9d9",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },

    fontSize: {
      title: "25px",
      subTitle: "20px",
      xSmall: "12px",
    },
  },
  plugins: [],
};
