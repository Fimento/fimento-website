import styled from 'styled-components';

import StyledH1 from '../elements/StyledH1';
import StyledParagraph from '../elements/StyledParagraph';
import StyledImg from '../elements/StyledImg';
import StyledVideo from '../elements/StyledVideo';
import StyledButton from '../elements/StyledButton';

import style from '../../constants/style';

export const StyledHeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 70rem;
  margin: auto;

  padding: 1.5rem;

  ${StyledH1} {
    font-size: ${style.fontSizes.regular};
    color: ${style.colours.beige};
  }

  ${StyledParagraph} {
    margin-top: ${style.spaces.none};
    font-size: ${style.fontSizes.small};
    color: ${style.colours.primary};
  }

  ${StyledImg} {
    width: 100%;
  }

  ${StyledVideo} {
    width: 100%;
  }

  ${StyledButton} {
    align-self: start;
  }

  ${style.media.tablet`
    height: 20rem;
    padding: 3.5rem 3rem;

    ${StyledH1} {
      max-width: 25rem;
      font-size: 1.75rem;
    }

    ${StyledParagraph} {
      max-width: 22rem;
      margin-top: ${style.spaces.tiny};
      margin-bottom: ${style.spaces.big};
    }

    ${StyledImg} {
      height: 20.8rem;
      width: auto;
      position: absolute;
      bottom: 0;
      right: 1rem;
    }

    ${StyledVideo} {
      height: 20.8rem;
      width: auto;
      position: absolute;
      bottom: 0;
      right: 1rem;
    }

    ${StyledButton} {
      align-self: flex-start;
    }
  `}

  ${style.media.laptop`
    height: 23rem;
    padding: 6rem 4rem;

    ${StyledH1} {
      max-width: 28rem;
      font-size: 2rem;
    }

    ${StyledParagraph} {
      max-width: 26rem;
    }

    ${StyledImg} {
      height: 31.5rem;
    }
    ${StyledVideo} {
      height: 31.5rem;
    }
  `}

  ${style.media.desktop`
    height: 25rem;
    padding: 7.5rem 4rem;

    ${StyledH1} {
      max-width: 37rem;
      font-size: 2.5rem;
    }

    ${StyledParagraph} {
      margin-top: ${style.spaces.small};
      max-width: 31rem;
      font-size: 1.5rem;
    }

    ${StyledImg} {
      height: 34rem;
      right: -1rem;
    }
    ${StyledVideo} {
      height: 34rem;
      right: -1rem;
    }
  `}
`;

const StyledHero = styled.section`
  display: flex;
  background-color: ${style.colours.white};
`;

export default StyledHero;
