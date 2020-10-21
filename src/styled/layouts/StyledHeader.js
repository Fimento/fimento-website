import styled from 'styled-components';
import style from '../../constants/style';

import StyledH3 from '../elements/StyledH3';
import StyledImg from '../elements/StyledImg';
import StyledAnchor from '../elements/StyledAnchor';

export const StyledHomeLogo = styled(StyledAnchor)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: ${style.colours.primary};
  &:hover {
    text-decoration: none;
  }

`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${StyledH3} {
    margin: 0;
  }

  ${StyledImg} {
    height: 3rem;
    margin-right: ${style.spaces.small};
  }

  ${style.media.tablet`
    ${StyledImg} {
      height: 5.5rem;
    }
  `}
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${style.zLevels.priority};
  padding: 0.5rem 1rem;
  position: fixed;
  width: calc(100% - 2 * 1rem);

  transition: all 0.2s ease-in-out 0s;

  ${({ isOnTop, isScrollingDown, isScrollingUp }) => {
    if (isOnTop) {
      return `
        background: transparent;
      `;
    }

    if (isScrollingDown) {
      return `
        transform: translateY(-100%);
      `;
    }

    if (isScrollingUp) {
      return `
        background: ${style.colours.white};
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
        transform: translateY(0%);
      `;
    }

    return '';
  }}

  ${style.media.tablet`
    padding: 1rem 2rem;
    width: calc(100% - 2 * 2rem);
  `}

`;

export default StyledHeader;
