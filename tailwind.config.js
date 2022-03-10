module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '100': '450px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '1100': '1100px',
        '1-px': '1px'
      },
      
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
