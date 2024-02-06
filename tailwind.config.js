/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      primary: 'var(--theme-primary)',
      secondary: 'var(--theme-secondary)',
      'text-base': 'var(--theme-text-base)'
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        body: ['Nunito']
      },
      backgroundImage: {
        'cool-pattern': "url('/src/assets/svg/pie.svg')",
        'ribon-paper': "url('/src/assets/svg/sprinkle.svg')",
        'ribon-moon': "url('/src/assets/svg/bon.svg')",
        'ribon-shapes': "url('/src/assets/svg/moon.svg')",
        hero: "url('/src/assets/svg/pie.svg)"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
