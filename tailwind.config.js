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
        black: "#202020",
        primary: "#94abff",
        secondary: "#fde74c"
      },
      colors: {
        black: "#4c4c4c",
        blackLight: "#878787",
        primary: "#94abff",
        secondary: "#fde74c"
      },
    },
  },
  plugins: [],
};