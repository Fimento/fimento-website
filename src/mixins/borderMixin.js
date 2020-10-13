import { css } from 'styled-components';

import style from '../constants/style';
import propValidator from '../utils/propValidator';

const borderMixin = (props) => css`
${style.colours[props.borderLeftColour] ? `border-left: 7px solid ${style.colours[props.borderLeftColour]}` : ''};
`;

const allowedColours = [...Object.keys(style.colours), undefined];

export const borderTypes = {
  borderLeftColour: propValidator('color', allowedColours),
};

export const borderDefaults = {
  borderLeftColour: undefined,
};

export default borderMixin;
