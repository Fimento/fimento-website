import { css } from 'styled-components';

import style from '../constants/style';
import propValidator from '../utils/propValidator';

const spaceMixin = (props) => css`
  padding-top: ${style.spaces[props.padding] || style.spaces[props.paddingTop]};
  padding-bottom: ${style.spaces[props.padding] || style.spaces[props.paddingBottom]};
  padding-left: ${style.spaces[props.padding] || style.spaces[props.paddingLeft]};
  padding-right: ${style.spaces[props.padding] || style.spaces[props.paddingRight]};
  margin-top: ${style.spaces[props.margin] || style.spaces[props.marginTop]};
  margin-bottom: ${style.spaces[props.margin] || style.spaces[props.marginBottom]};
  margin-left: ${style.spaces[props.margin] || style.spaces[props.marginLeft]};
  margin-right: ${style.spaces[props.margin] || style.spaces[props.marginRight]};
`;

const allowedSpaces = Object.keys(style.spaces);

export const spaceTypes = {
  paddingTop: propValidator('paddingTop', allowedSpaces),
  paddingBottom: propValidator('paddingBottom', allowedSpaces),
  paddingLeft: propValidator('paddingLeft', allowedSpaces),
  paddingRight: propValidator('paddingRight', allowedSpaces),
  padding: propValidator('padding', [...allowedSpaces, undefined]),
  marginTop: propValidator('marginTop', allowedSpaces),
  marginBottom: propValidator('marginBottom', allowedSpaces),
  marginLeft: propValidator('marginLeft', allowedSpaces),
  marginRight: propValidator('marginRight', allowedSpaces),
  margin: propValidator('margin', [...allowedSpaces, undefined]),
};

export const spaceDefaults = {
  paddingTop: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
  paddingRight: 'none',
  padding: undefined,
  marginTop: 'none',
  marginBottom: 'none',
  marginLeft: 'none',
  marginRight: 'none',
  margin: undefined,
};

export default spaceMixin;
