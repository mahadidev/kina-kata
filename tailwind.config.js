module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'title': ['Nunito'],
      },
      backgroundColor: {
        gray: "#F1F1F2",
        white: "#fff",
        black: "#202020",
        primary: "#5c59ff",
        primaryLight: "#cfdeff",
        secondary: "#fde74c",
      },
      colors: {
        black: "#4c4c4c",
        white: "#fff",
        blackLight: "#878787",
        primary: "#5c59ff",
        secondary: "#3c3c3c"
      },
    },
  },
  plugins: [],
};