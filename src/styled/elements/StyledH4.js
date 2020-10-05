import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';
import headlineMixin, { headlineTypes, headlineDefaults } from '../../mixins/headlineMixin';

const StyledH4 = styled.h4`
  font-size: ${style.fontSizes.small};
  font-weight: ${(props) => style.fontWeights[props.fontWeight]};

  margin: ${style.spaces.small} 0;

  ${headlineMixin}
`;

StyledH4.propTypes = {
  breakSize: PropTypes.string,
  fontWeight: PropTypes.string,
  ...headlineTypes,
};

StyledH4.defaultProps = {
  breakSize: 'laptop',
  fontWeight: 'light',
  ...headlineDefaults,
};

export default StyledH4;
