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
      'text-base': 'var(--theme-text-base)',
      customBlue: '#2F4D88',
      cutomText: '2px 2px 4px rgba(47, 188, 72, 0.7)'
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
