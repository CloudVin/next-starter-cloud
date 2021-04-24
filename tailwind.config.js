module.exports = {
  // presets:[],
  purge: [],

  darkMode: false, // or 'media' or 'class'
  theme: {
    height:{
      h300:"300px",
      h400:'400px',
      h500:'500px'
    },
    extend: {
      keyframes:{
        show:{
          "0%,100%":{opacity:1},
          "50%":{opacity:0.5},
          '80%':{opacity:0}
          
        },
        down:{
          "0%,100%":{transform: 'translateY(-50%)',opacity:0.5 },
          "50%":{transform: 'translateY(0)',opacity:1},
          
        }
      },
      animation:{
        show:'show 1s ease infinite',
        down:'down 1.2s ease infinite'
      }

    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
