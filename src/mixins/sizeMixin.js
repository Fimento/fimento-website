import { css } from 'styled-components';
import PropTypes from 'prop-types';

const sizeMixin = ({
  width, maxWidth, height, maxHeight,
}) => css`
  ${width ? `width: ${width};` : ''};
  ${maxWidth ? `max-width: ${maxWidth};` : ''};
  ${height ? `height: ${height};` : ''};
  ${maxHeight ? `max-height: ${maxHeight};` : ''};
`;

export const sizeTypes = {
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
};

export const sizeDefaults = {
  width: undefined,
  maxWidth: undefined,
  height: undefined,
  maxHeight: undefined,
};

export default sizeMixin;
