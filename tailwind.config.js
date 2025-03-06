module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        LightRed : 'hsl(0, 100%, 63%)',
      },
      fontFamily:{
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open sans', 'sans-serif']
      }, 
      backgroundImage: () => ({
        'logo-dark-mode':"url('../images/logo-dark-mode.svg')",
      })
    },
  },
  plugins: [],
}
