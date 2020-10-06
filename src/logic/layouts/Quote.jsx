import React from 'react';
import styled from 'styled-components';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledSpan from '../../styled/elements/StyledSpan';
import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

const StyledQuoteLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const StyledQuoteContent = styled.div`
  max-width: 80%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > *:first-child {
    font-style: italic;
    font-size: ${style.fontSizes.smaller}
    font-weight: ${style.fontWeights.regular};
    color: ${style.colours.white};
  }
  & > *:nth-child(3) {
    margin: 0;
    font-size: ${style.fontSizes.tiny}
  }
  & > *:nth-child(2) {
    margin: 1rem 0 0 0;
    font-size: ${style.fontSizes.tiny}
  }

  ${style.media.laptop`
    & > *:first-child {
      font-size: ${style.fontSizes.regular}
    }
    & > *:nth-child(3) {
      font-size: ${style.fontSizes.smaller}
    }
    & > *:nth-child(2) {
      font-size: ${style.fontSizes.smaller}
    }
  `}
`;
const StyledProofContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${StyledSpan} {
    font-size: ${style.fontSizes.tiny};
    color: ${style.colours.orange};
  }

  ${style.media.laptop`
    max-width: 80%;
    flex-direction: row;
    justify-content: start;

    ${StyledSpan} {
      font-size: ${style.fontSizes.smaller};
    }

  `}
`;

const StyledProof = styled(StyledFlexBox)`
  margin-top: ${style.spaces.big};
  padding-left: ${style.spaces.small};
  & > *:first-child {
    font-size: ${style.fontSizes.tiny};
  }

  ${style.media.laptop`
    max-width: 38%;

    & > *:first-child {
      font-size: ${style.fontSizes.smaller};
    }
  `}
`;

const Quote = () => (
  <StyledQuoteLayout>
    <StyledQuoteContent>
      <StyledParagraph>
        &quot;In the not too distant future,
        nearly every company will be a financial
        services company.&quot;
      </StyledParagraph>
      <StyledParagraph>- Angela Strange,</StyledParagraph>
      <StyledParagraph>General Partner Andreessen Horowitz</StyledParagraph>
    </StyledQuoteContent>
    <StyledProofContent>
      <StyledProof borderLeftColour="orange">
        <StyledParagraph>
          On average, non-financial companies can&nbsp;
          <StyledSpan>increase revenue by 2–5 times</StyledSpan>
          &nbsp;by adding financial services.
        </StyledParagraph>
      </StyledProof>
      <StyledProof borderLeftColour="orange">
        <StyledParagraph>
          Embedded finance offers a market opportunity&nbsp;
          <StyledSpan>&gt;USD 7 trillion</StyledSpan>
          &nbsp;in 10 years time.
        </StyledParagraph>
      </StyledProof>
    </StyledProofContent>
  </StyledQuoteLayout>
);

export default Quote;
