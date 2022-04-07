import React from 'react';
import styled from 'styled-components';

import style from '../../constants/style';
import StyledAnchor from '../../styled/elements/StyledAnchor';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledSpan from '../../styled/elements/StyledSpan';
import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

const StyledQuoteLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding-bottom: ${style.spaces.huge};
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

  ${StyledSpan} {
    font-size: ${style.fontSizes.tiny};
    color: ${style.colours.orange};
  }

  ${style.media.tablet`
    max-width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

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
  margin-right: ${style.spaces.big};
  ${style.media.laptop`
    max-width: 38%;

    & > *:first-child {
      font-size: ${style.fontSizes.smaller};
    }
  `}
`;

const sourceUrl = 'https://www.mckinsey.com/industries/financial-services/our-insights/banking-matters/what-the-embedded-finance-and-banking-as-a-service-trends-mean-for-financial-services';

const Quote = () => (
  <StyledQuoteLayout>
    <StyledQuoteContent>
      <StyledParagraph textColour="darkOrange">
        &ldquo;Soon, every company will be a finance company&rdquo;
      </StyledParagraph>
      <StyledParagraph>- McKinsey &amp; Company</StyledParagraph>
      <StyledParagraph><StyledAnchor href={sourceUrl} target="_blank">What the embedded-finance and banking-as-a-service trends mean for financial services</StyledAnchor></StyledParagraph>
    </StyledQuoteContent>
    <StyledProofContent>
      <StyledProof maxWidth="100%" borderLeftColour="orange">
        <StyledParagraph>
          On average, non-financial companies can&nbsp;
          <StyledSpan>increase revenue by 2–5 times</StyledSpan>
          &nbsp;by adding financial services.
        </StyledParagraph>
      </StyledProof>
      <StyledProof maxWidth="75%" borderLeftColour="orange">
        <StyledParagraph>
          Embedded finance offers a market opportunity&nbsp;
          <StyledSpan>&gt; USD 7 trillion</StyledSpan>
          &nbsp;in 10 years time.
        </StyledParagraph>
      </StyledProof>
    </StyledProofContent>
  </StyledQuoteLayout>
);

export default Quote;
