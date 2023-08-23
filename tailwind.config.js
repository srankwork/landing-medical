/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor:{
        'appointment-btn':'#785546',
        'doctor-info':'#EEE4DE'
      },
      borderColor:{
        'input-border':'102,49,48'
      },
      lineHeight: {
        '128': '1.28',
      },
      textColor:{
        'primary-color':'#663130'
      }
    },
  },
  plugins: [],
}
