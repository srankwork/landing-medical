/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary':'#08589F',
        'secondry':'#9ECA3D',
        'background':'#E5EDF4',
      },
      borderColor:{
        'border':'#9ECA3D',
        'primary':'#08589F'
      },
      placeholderColor:{
        'placeholder':'#636363',
      },
      lineHeight: {
        '118': '1.18',
      },
      textColor:{
        'primary':'#08589F',
        'secondry':'#9ECA3D',
        'info-color':'#B1C8DC',
        'lightblue':'#4D83B2',
        'header':'#4F4F4F'
      }
    },
  },
  plugins: [
    
  ],
}
