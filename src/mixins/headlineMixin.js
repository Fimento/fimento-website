import { css } from 'styled-components';
import PropTypes from 'prop-types';

import collapseMarginMixin from './collapseMarginMixin';

const headlineMixin = ({ textAlign }) => css`
  font-style: normal;
  font-stretch: normal;

  line-height: 1.25;

  text-align: ${textAlign};

  ${collapseMarginMixin}
`;

export const headlineTypes = {
  textAlign: PropTypes.string,
};

export const headlineDefaults = {
  textAlign: 'inherit',
};

export default headlineMixin;
