import { css } from 'styled-components';

import style from '../constants/style';
import propValidator from '../utils/propValidator';

const positionMixin = ({
  top, right, left, bottom,
}) => css`
  ${(top || left || right || bottom) ? 'position: absolute;' : ''}
  ${top ? `top: ${style.spaces[top]};` : ''};
  ${right ? `right: ${style.spaces[right]};` : ''};
  ${bottom ? `bottom: ${style.spaces[bottom]};` : ''};
  ${left ? `left: ${style.spaces[left]};` : ''};
`;

const allowedSpaces = [...Object.keys(style.spaces), undefined];

export const positionTypes = {
  top: propValidator('top', allowedSpaces),
  right: propValidator('right', allowedSpaces),
  bottom: propValidator('bottom', allowedSpaces),
  left: propValidator('left', allowedSpaces),
};

export const positionDefaults = {
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
};

export default positionMixin;
