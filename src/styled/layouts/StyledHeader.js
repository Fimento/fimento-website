import styled from 'styled-components';
import style from '../../constants/style';

import StyledH3 from '../elements/StyledH3';
import StyledImg from '../elements/StyledImg';
import StyledAnchor from '../elements/StyledAnchor';

const headerHeight = {
  mobile: '3rem',
  tablet: '5.5rem',
};

const headerSidePadding = {
  tablet: '2rem',
  mobile: '1rem',
};

const headerContainer = {
  mobile: `
    padding: 0.5rem ${headerSidePadding.mobile};
    width: calc(100% - 2 * ${headerSidePadding.mobile});
    height: ${headerHeight.mobile};
    position: fixed;
  `,
  tablet: `
    padding: 1rem ${headerSidePadding.tablet};
    width: calc(100% - 2 * ${headerSidePadding.tablet});
    height: ${headerHeight.tablet};
    position: fixed;
  `,
};

export const StyledHomeLogo = styled(StyledAnchor)`
  height: 100%;

  &:hover {
    text-decoration: none;
  }

  ${StyledImg} {
    height: 100%;
    margin-right: ${style.spaces.small};
  }

  ${StyledH3} {
    margin: 0;
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StyledReplicatedHeader = styled.div`
  z-index: ${style.zLevels.priority};

  top: 0;

  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(200%)')};
  transition: all ease 250ms;

  ${headerContainer.mobile}

  ${style.media.tablet`
    ${headerContainer.tablet}
  `}
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${style.zLevels.raised};


  ${headerContainer.mobile}

  ${style.media.tablet`
    ${headerContainer.tablet}
  `}

  ${({ isOnTop, isScrollingDown, isScrollingUp }) => {
    if (isOnTop) {
      return `
        background: transparent;
      `;
    }

    if (isScrollingDown) {
      return `
        transform: translateY(-100%);
        transition: all 0.2s ease-in-out 0s;
      `;
    }

    if (isScrollingUp) {
      return `
        background: ${style.colours.white};
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);

        transform: translateY(0%);
        transition: all 0.2s ease-in-out 0s;
      `;
    }

    return '';
  }}
`;

export const StyledMenuButton = styled.div`
  cursor: pointer;
`;

export default StyledHeader;
