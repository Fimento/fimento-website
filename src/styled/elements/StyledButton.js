import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';

const getPrimaryColor = ({ inverted, primary }) => (!inverted
  ? style.colours[primary]
  : 'transparent');
const getSecondaryColor = ({ inverted, primary }) => (!inverted
  ? 'transparent'
  : style.colours[primary]);
const getPrimaryTextColor = ({ inverted, primary, secondary }) => (!inverted
  ? style.colours[primary]
  : style.colours[secondary]);
const getSecondaryTextColor = ({ inverted, primary, secondary }) => (!inverted
  ? style.colours[secondary]
  : style.colours[primary]);

const StyledButton = styled('button')`
  font-size: ${style.fontSizes.smaller};
  font-weight: ${style.fontWeights.regular};
  text-decoration: none;
  width: max-content;
  padding: 0.75rem 2.5rem;

  cursor: pointer;

  background-color: ${getPrimaryColor}; // inverted => transparent
  color: ${getSecondaryTextColor};
  border: 1px solid ${getPrimaryColor};

  &:hover {
    background-color: ${getSecondaryColor}; // !inverted => transparent
    color: ${getPrimaryTextColor};
  }

  ${style.media.laptop`
    padding: 1rem 3rem;
    font-size: 1.125rem;
  `}
`;

StyledButton.propTypes = {
  inverted: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

StyledButton.defaultProps = {
  inverted: false,
  primary: 'orange',
  secondary: 'white',
};

export default StyledButton;
