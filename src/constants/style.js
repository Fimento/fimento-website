import { css } from 'styled-components';

const colours = {
  primary: '#000000',
  secondary: '#707070',
  white: '#FFFFFF',
  beige: '#F3CCA7',
  lightBeige: '#F2F0ED',
  grey: '#8E8986',
  orange: '#D58E48',
  darkOrange: '#A3471F',
  error: '#D65C47',
  lightError: '#DF806F',
};

const fontSizes = {
  tiny: '0.875rem',
  smaller: '1rem',
  small: '1.25rem',
  regular: '1.5rem',
  big: '2rem',
  bigger: '2.5rem',
  huge: '3.5rem',
};

const fontWeights = {
  lighter: '200',
  light: '300',
  regular: '400',
  bold: '600',
  bolder: '800',
};

const spaces = {
  auto: 'auto',
  negativeTiny: '-0.5rem',
  negativeSmall: '-1rem',
  negativeRegular: '-1.5rem',
  negativeBig: '-2rem',
  negativeHuge: '-4rem',
  none: '0rem',
  tinier: '0.25rem',
  tiny: '0.5rem',
  small: '1rem',
  regular: '1.5rem',
  big: '2rem',
  huge: '2.5rem',
};

const minSizes = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const zLevels = {
  raised: 1,
  priority: 2,
};

const media = Object.keys(minSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${minSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  colours,
  fontSizes,
  fontWeights,
  spaces,
  zLevels,
  media,
};
