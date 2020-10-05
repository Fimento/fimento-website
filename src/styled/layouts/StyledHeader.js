import styled from 'styled-components';
import style from '../../constants/style';

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 70rem;
  margin: 2rem 1rem 1rem 1rem;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${style.zLevels.raised};
  height: 4rem;
  padding: 0 1rem;

  background: ${style.colours.white};

  ${style.media.tablet`
    padding: 0 2rem;
  `}

  ${style.media.laptop`
    height: 4.5rem;
  `}
`;

export default StyledHeader;
