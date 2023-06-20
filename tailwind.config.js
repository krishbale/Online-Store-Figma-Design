/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/bg.png')",
        'image-overlay': "url('src/assets/Imageoverlay.png')",
      }
    },
  },
  plugins: [],
}

