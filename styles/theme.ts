const fontSizes = {
  xsmall: '0.9em',
  small: '1em',
  medsmall: '1.25em',
  medium: '1.75em',
  large: '2em',
  xlarge: '2.5em',
};

const ColgateReady = '"Colgate Ready", serif';

const theme = {
  colors: {
    primary: '#d9291c',
    secondary: '#3b6999',
  },
  fonts: ['"Colgate Ready", serif'],
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
      color: 'rgba(0,0,0,0.8)',
      fontFamily: ColgateReady,
    },
    subheading: {
      fontSize: [
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medium,
      ],
      color: 'rgba(0,0,0,0.6)',
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
    paragraph: {
      fontSize: [
        fontSizes.xsmall,
        fontSizes.small,
      ],
      color: 'rgba(0,0,0,0.8)',
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
    heroHeading: {
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
    heroSubheading: {
      fontSize: [
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medsmall,
        fontSizes.medium,
      ],
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
    heroBody: {
      fontSize: [
        fontSizes.xsmall,
        fontSizes.small,
      ],
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
    thumbnailTitle: {
      fontSize: [
        fontSizes.xsmall,
      ],
      color: 'rgba(0,0,0,0.8)',
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
    thumbnailPrice: {
      fontSize: [
        fontSizes.medsmall,
      ],
      color: 'rgba(0,0,0,0.8)',
      fontWeight: 400,
      fontFamily: ColgateReady,
    },
  },
};

export default theme;
