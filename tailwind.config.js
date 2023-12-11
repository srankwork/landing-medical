/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#ac81b7',
        secondry: '#95b3b3',
        background: '#E5EDF4',
        'overlay-bg': '#060402',
      },
      borderColor: {
        border: '#9ECA3D',
        primary: '#08589F',
      },
      placeholderColor: {
        placeholder: '#636363',
      },
      lineHeight: {
        118: '1.18',
      },
      textColor: {
        primary: '#ac81b7',
        secondry: '#95b3b3',
        'info-color': '#B1C8DC',
        lightblue: '#4D83B2',
        header: '#4F4F4F',
      },
    },
  },
  plugins: [],
};
