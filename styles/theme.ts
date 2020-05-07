const fontSizes = {
  xsmall: '0.8em',
  small: '1em',
  medium: '1.75em',
  large: '2em',
  xlarge: '2.5em',
};

const ColgateReady = 'Colgate Ready, serif';

const theme = {
  colors: {
    primary: '#d9291c',
    secondary: '#3b6999',
  },
  fonts: ['Colgate Ready'],
  fontSizes,
  breakpoints: [
    '325px',
    '375px',
    '425px',
    '768px',
    '1024px',
    '1440px',
    '2560px',
  ],
  textStyles: {
    heading: {
      fontSize: [
        fontSizes.medium,
        fontSizes.medium,
        fontSizes.medium,
        fontSizes.medium,
        fontSizes.large,
      ],
      fontWeight: 700,
      fontFamily: ColgateReady,
    },
  },
};

export default theme;
