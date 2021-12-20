module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '12rem'
      },
      colors: {
        'brand': {
          50: '#ece8e1',
          100: '#f5f2ed',
          450: '#8c826b',
          900: '#4c473b',
        }
      },
    },
  },
  plugins: [],
}