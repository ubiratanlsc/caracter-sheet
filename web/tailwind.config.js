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
        'vermelho': '#ff0000',
        'verde':'#00ff00',
        
      },
      gridTemplateColumns:{
        'gridBadeba': '1fr 9fr 1fr',
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
    plugins: [],
  }
}