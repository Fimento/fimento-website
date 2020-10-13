import { css } from 'styled-components';

import style from '../constants/style';
import propValidator from '../utils/propValidator';

const flexGapMixin = (props) => css`
  ${(props.flexGap && style.spaces[props.flexGap]) ? `
    margin: calc(-${style.spaces[props.flexGap]} / 2);
    width: 100%;
    transform: translateX(calc(${style.spaces[props.flexGap]} / 2));

    & > * {
      margin: calc(${style.spaces[props.flexGap]} / 2);
    }
  ` : ''}
`;

const allowedSpaces = Object.keys(style.spaces);

export const flexGapTypes = {
  flexGap: propValidator('flexGap', [...allowedSpaces, undefined]),
};

export const flexGapDefaults = {
  flexGap: undefined,
};

export default flexGapMixin;
