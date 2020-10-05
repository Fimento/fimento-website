import { css } from 'styled-components';

import style from '../constants/style';
import propValidator from '../utils/propValidator';

const colourMixin = (props) => css`
  color: ${style.colours[props.textColour]};
  background-color: ${style.colours[props.backgroundColour]};
`;

const allowedColours = [...Object.keys(style.colours), undefined];

export const colourTypes = {
  textColour: propValidator('textColour', allowedColours),
  backgroundColour: propValidator('backgroundColour', allowedColours),
};

export const colourDefaults = {
  textColour: undefined,
  backgroundColour: undefined,
};

export default colourMixin;
