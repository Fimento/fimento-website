import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.img`
  margin: auto;
  height: ${(props) => props.iconHeight || 'auto'};
  width: ${(props) => props.iconWidth || 'auto'};

  ${({ circle }) => (circle ? 'border-radius: 50%' : '')};
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg)` : '')};

  ${({
    top, right, bottom, left,
  }) => (!!top || !!right || !!bottom || !!left ? `
    position: absolute;
    ${top ? `top: ${top};` : ''}
    ${right ? `right: ${right};` : ''}
    ${bottom ? `bottom: ${bottom};` : ''}
    ${left ? `left: ${left};` : ''}
  ` : '')}
`;

StyledIcon.propTypes = {
  circle: PropTypes.bool,
  rotate: PropTypes.number,
  top: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  bottom: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
};

StyledIcon.defaultProps = {
  circle: false,
  rotate: 0,
  top: null,
  right: null,
  left: null,
  bottom: null,
  iconHeight: null,
  iconWidth: null,
};

export default StyledIcon;
