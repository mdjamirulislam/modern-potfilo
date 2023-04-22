/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    color: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#863E96",
      primaryDark: "#58E6D9",
    },
    backgroundImage: {
      circle:
        "repeating-radial-gradient(rgba(0,0,0,4) 2px,#FAFAFA 5px, #f5f5f5 100px);",
    },
  },
  plugins: [],
};
