/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/img/montain.jpg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      colors: {
        'regal-blue': '#243c5a',
        'tormenta': '#800000',
        
      },
      gridTemplateColumns:{
        'gridBadeba': '1fr 9fr 1fr',
      }
    },
    plugins: [],
  }
}