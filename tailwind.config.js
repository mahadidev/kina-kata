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
        primary: "#F1F1F2",
        black: "#202020",
        purple: "#94abff",
        yellow: "#fde74c"
      },
      colors: {
        black: "#202020",
        primary: "#94abff",
        secondary: "#fde74c"
      },
    },
  },
  plugins: [],
};