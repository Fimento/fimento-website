import styled from 'styled-components';
import style from '../../constants/style';

import StyledH3 from '../elements/StyledH3';
import StyledImg from '../elements/StyledImg';
import StyledAnchor from '../elements/StyledAnchor';
import StyledFlexBox from './StyledFlexBox';

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
  height: 4rem;
  width: 100%;
  max-width: 70rem;
  margin-top: ${style.spaces.regular};
  ${StyledH3} {
    margin: 0;
  }

  ${StyledImg} {
    height: 3rem;
    margin-right: ${style.spaces.small};
  }
  ${StyledFlexBox} {
    align-items: center;
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
  height: 4rem;
  padding: 0 1rem;
  position: absolute;

  background: transparent;

  ${style.media.tablet`
    height: 6rem;
    padding: 0 2rem;
  `}

  ${style.media.laptop`
    height: 6rem;
  `}
`;

export default StyledHeader;
