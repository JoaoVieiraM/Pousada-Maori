/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maori-turquoise': '#1BB8CE',
        'maori-coral': '#FF6B6B',
        'maori-orange': '#FF9800',
        'maori-yellow': '#FFD54F',
        'maori-beige': '#F5F1E8',
        'maori-dark': '#2C3E50',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
