import { css } from 'styled-components';
import PropTypes from 'prop-types';

import style from '../constants/style';

const backgroundMixin = ({
  background, backgroundImage,
}) => css`
  ${background ? `background-color: ${style.colours[background]};` : ''}
  ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
`;

export const backgroundTypes = {
  background: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export const backgroundDefaults = {
  background: undefined,
  backgroundImage: undefined,
};

export default backgroundMixin;
