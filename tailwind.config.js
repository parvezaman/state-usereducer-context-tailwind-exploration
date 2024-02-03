/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-blue-8xl': {
          fontSize: '6rem', // Adjust the font size as needed
          color: '#1e40af', // Adjust the color as needed
          fontFamily: 'monospace',
          fontStyle: 'oblique',
          fontVariant: 'small-caps',
          textDecoration: 'underline',
        },
        '.text-header-title': {
          fontSize: '3rem', // Adjust the font size as needed
          color: '#204d31', // Adjust the color as needed
          fontFamily: 'monospace',
          fontStyle: 'oblique',
          fontVariant: 'small-caps',
          textDecoration: 'underline',
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

