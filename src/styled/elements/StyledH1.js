import styled from 'styled-components';

import style from '../../constants/style';
import headlineMixin, { headlineTypes, headlineDefaults } from '../../mixins/headlineMixin';

const StyledH1 = styled.h1`
  font-size: ${style.fontSizes.bigger};
  font-weight: ${style.fontWeights.bold};

  margin: ${style.spaces.big} 0 ${style.spaces.small};

  ${headlineMixin}
`;

StyledH1.propTypes = headlineTypes;

StyledH1.defaultProps = headlineDefaults;

export default StyledH1;
