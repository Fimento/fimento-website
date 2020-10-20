/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from '../../styled/elements/StyledIcon';

const getSafelyWrappedSvg = (Svg) => ({
  iconHeight,
  iconWidth,
  circle,
  ...props
}) => <Svg {...props} />;

const Icon = ({ icon, ...rest }) => ((!icon || typeof icon === 'string')
  ? <StyledIcon src={icon} {...rest} />
  : <StyledIcon as={getSafelyWrappedSvg(icon)} {...rest} />);

Icon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
  ]).isRequired,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
  circle: PropTypes.bool,
};

Icon.defaultProps = {
  iconHeight: null,
  iconWidth: null,
  circle: false,
};

export default Icon;
