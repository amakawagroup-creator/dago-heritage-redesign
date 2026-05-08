export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'golf-green': '#1a5c38',
        'golf-gold': '#c9a84c',
        'dark-bg': '#0f1a14',
        'light-bg': '#f5f0e8',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
