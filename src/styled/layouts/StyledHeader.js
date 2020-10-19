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
  width: 100%;
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
  padding: 0 1rem;
  position: absolute;
  width: calc(100% - 2 * 1rem);

  background: transparent;

  ${style.media.tablet`
    padding: 0 2rem;
    width: calc(100% - 2 * 2rem);
  `}

`;

export default StyledHeader;
