import styled from 'styled-components';

import style from '../../constants/style';

import { DEFAULT_PARAGRAPH_FONT_SIZE } from '../elements/StyledParagraph';

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  p {
    width: 100%;
    line-height: 1.5;
    font-weight: ${style.fontWeights.light};
    text-align: justify;
    font-style: normal;
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
  }
  strong {
    width: 100%;
    line-height: 1.5;
    font-weight: ${style.fontWeights.bold};
    text-align: inherit;
    font-style: normal;
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
  }
  a {
    color: ${style.colours.secondary};
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    margin: 0 0 ${style.spaces.tinier};
    font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
    font-weight: ${style.fontWeights.light};
    line-height: 1.5;
  }

  h2 {
    font-size: 1.625rem;
    font-weight: ${style.fontWeights.bold};
    margin: ${style.spaces.regular} 0;
  }

  h3 {
    font-size: ${style.fontSizes.regular};
    font-weight: ${style.fontWeights.bold};
    margin: ${style.spaces.big} 0 ${style.spaces.tiny};
  }

  p > img {
    margin: auto;
    display: block;
  }
`;

export default StyledArticle;
