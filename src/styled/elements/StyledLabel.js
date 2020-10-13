import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';

const StyledLabel = styled.label`
  display: block;
  color: ${({ textColour }) => style.colours[textColour] || 'inherit'};
  font-size: ${style.fontSizes.small};
  font-weight: ${style.fontWeights.bold};
  margin: 0.25rem 0;
`;

StyledLabel.propTypes = {
  textColour: PropTypes.string,
};

StyledLabel.defaultProps = {
  textColour: null,
};

export default StyledLabel;
