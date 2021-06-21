module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#42AAC5',
      title: '#333333',
      info: '#666666',
      light: '#888888',
      black: '#000000',
      white: '#ffffff',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#42AAC5',
    }),
    backgroundImage: () => ({
      'home-theme': "url('src/assets/images/home/bg.png')",
    }),
    fontSize: {
      fs12: '12px',
      fs14: '14px',
      fs16: '16px',
      fs18: '18px',
      fs20: '20px',
    },
    borderRadius: {
      br4: '4px',
      br6: '6px',
    },
    lineHeight: {
      lh30: '30px',
      lh38: '38px',
      lh40: '40px',
      lh50: '50px',
      lh60: '60px',
    },
    padding: {
      p12: '12px',
      p6: '6px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
