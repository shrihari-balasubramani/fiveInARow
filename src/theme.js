const theme = {
  colors: {
    primary: {
      lighter: '#75C1F0',
      light: '#54AFE8',
      main: '#3498DB',
      dark: '#2D88CD',
      darker: '#2B6EB1',
      background: '#EBF8FF'
    },
    secondary: {
      lighter: '#DDDDDD',
      light: '#CCCCCC',
      main: '#666666',
      dark: '#505050',
      darker: '#333333',
      background: 'white'
    },
    shadows: {
      main: 'rgba(0, 0, 0, 0.25)'
    },
    player1: '#6C9F3C',
    player2: '#EB8F1E',
    modes: {
      dark: {
        // same as light mode
        primary: {
          lighter: '#2B6EB1',
          light: '#54AFE8',
          main: '#EBF8FF',
          dark: '#A2D9F6',
          darker: '#75C1F0',
          background: '#3498DB'
        },
        secondary: {
          lighter: '#333333',
          light: '#CCCCCC',
          main: '#EEEEEE',
          dark: '#F5F5F5',
          darker: '#DDDDDD',
          background: '#505050'
        },
        shadows: {
          main: 'rgba(100, 100, 100, 0.25)'
        },
        player1: '#6C9F3C',
        player2: '#EB8F1E'
      }
    }
  },
  fonts: {
    product: 'Roboto,sans-serif;',
    brand: 'Roboto Slab,serif;'
  },
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  radii: [0, 4, 8, 12],
  fontSizes: [
    '0.625rem',
    '0.75rem',
    '0.8125rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.5rem',
    '2rem',
    '3rem',
    '3.75rem',
    '4.5rem'
  ],
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  letterSpacings: [0, '0.15em', '0.2em', '1em'],
  lineHeights: [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.75rem',
    '4rem',
    '4.5rem',
    '5rem'
  ]
};

export default theme;
