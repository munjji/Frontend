module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        base: '16px',
        large: '24px',
      },
      borderRadius: {
        description: '16px',
      },
      boxShadow: {
        description: '0px 4px 4px 0px #000',
      },
      dropShadow: {
        triangle: '0px 4px 4px 0px #000',
      },
      lineHeight: {
        title: '33.6px',
        content: '24px',
      },
      colors: {
        txt_primary: '#000000',
        txt_secondary: '#616272',
        main_primary: '#F7FF00',
        background_elevated: '#f5f6f8',
        gray: {
          950: '#303136',
          900: '#52535d',
          800: '#616272',
          700: '#77798b',
          600: '#8a8ba1',
          500: '#a0a3b4', // Main_primary
          400: '#b4b8c5',
          300: '#d7d7de',
          200: '#dfe1e6',
          100: '#edeff2',
          50: '#f5f6f8',
        },
        white: '#ffffff',
        main: {
          900: '#745B0F',
          800: '#89700A',
          700: '#A69002',
          600: '#D1C500',
          500: '#F7FF00', // Main_primary
          400: '#EBFF0D',
          300: '#E6FF41',
          200: '#EAFF86',
          100: '#F2FFC1',
        },

        // System 색상
        red: {
          400: '#CE3E57',
          300: '#FF4D6C',
          200: '#FFCAD3',
          100: '#FFF5F6',
        },
        blue: {
          300: '#067DFD',
          200: '#CAE8FF',
          100: '#EEF7FF',
        },
        green: {
          300: '#0CD380',
          200: '#9FF3D0',
          100: '#D8FBED',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
