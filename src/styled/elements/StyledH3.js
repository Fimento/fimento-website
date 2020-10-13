import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';
import headlineMixin, { headlineTypes, headlineDefaults } from '../../mixins/headlineMixin';
import colourMixin, { colourTypes, colourDefaults } from '../../mixins/colourMixin';

const StyledH3 = styled.h3`
  font-size: ${style.fontSizes.regular};
  font-weight: ${(props) => style.fontWeights[props.fontWeight]};

  margin: ${style.spaces.big} 0 ${style.spaces.tiny};

  ${headlineMixin}
  ${colourMixin}
`;

StyledH3.propTypes = {
  breakSize: PropTypes.string,
  fontWeight: PropTypes.string,
  ...headlineTypes,
  ...colourTypes,
};

StyledH3.defaultProps = {
  breakSize: 'laptop',
  fontWeight: 'light',
  ...headlineDefaults,
  ...colourDefaults,
};

export default StyledH3;
