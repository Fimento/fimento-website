import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';
import headlineMixin, { headlineTypes, headlineDefaults } from '../../mixins/headlineMixin';
import colourMixin, { colourTypes, colourDefaults } from '../../mixins/colourMixin';

const StyledH2 = styled.h2`
  font-size: 1.625rem;
  font-weight: ${(props) => style.fontWeights[props.fontWeight]};

  margin: ${style.spaces.regular} 0;

  ${style.media.tablet`
    font-size: 2rem;
  `}

  ${headlineMixin}
  ${colourMixin}
`;

StyledH2.propTypes = {
  breakSize: PropTypes.string,
  fontWeight: PropTypes.string,
  ...headlineTypes,
  ...colourTypes,
};

StyledH2.defaultProps = {
  breakSize: 'laptop',
  fontWeight: 'bold',
  ...headlineDefaults,
  ...colourDefaults,
};

export default StyledH2;
