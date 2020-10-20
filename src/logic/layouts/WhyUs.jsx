import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledIcon from '../../styled/elements/StyledIcon';
import StyledWhyItem from '../../styled/elements/StyledWhyItem';
import StyledButton from '../../styled/elements/StyledButton';
import StyledH2 from '../../styled/elements/StyledH2';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

import polygon from '../../assets/polygon.png';

const StyledWhyUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const StyledWhyUsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  ${style.media.laptop`
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  `}
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${style.media.laptop`
    width: 50%;
  `}
`;
const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${StyledFlexBox} {
    flex-direction: column;
    justify-content: start;
  }

  ${StyledButton} {
    margin: ${style.spaces.regular} 0 ${style.spaces.regular} 0;
  }

  ${style.media.laptop`
    width: 50%;
    margin-left: ${style.spaces.regular}
  `}
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${style.spaces.regular};

  ${StyledH2} {
    color: ${style.colours.white};
  }
`;

const StyledSellParagraph = styled(StyledParagraph)`
  margin: ${style.spaces.small} 0 ${style.spaces.regular} 0;
`;

const WhyUs = () => (
  <StyledWhyUs>
    <StyledTitle>
      <StyledH2>Why Fimento?</StyledH2>
    </StyledTitle>
    <StyledWhyUsContent>
      <StyledLeftContent>
        <StyledParagraph>
          What we do best, is focusing on you. Our
          primary driving force is the democratization
          of banking and financial services, creating
          greater financial wellness for more people
          and businesses. We firmly believe that
          fintech and digitalization are the tools to
          get us there.
        </StyledParagraph>
        <StyledParagraph>
          Our cloud based infrastructure works as an
          enabler for providing custom made solutions
          for companies of any size or industry, both
          financial and non-financial.
        </StyledParagraph>
      </StyledLeftContent>
      <StyledRightContent>
        <StyledParagraph>
          The way we see it, our job is to coach our
          clients so that they can make the best
          decisions and find the best solution, given
          their unique business goals and needs.
          Typically, the results are:
        </StyledParagraph>
        <StyledFlexBox>
          <StyledWhyItem>
            <StyledIcon src={polygon} alt="" />
            <StyledParagraph>Faster time to market</StyledParagraph>
          </StyledWhyItem>
          <StyledWhyItem>
            <StyledIcon src={polygon} alt="" />
            <StyledParagraph>Less manual processes</StyledParagraph>
          </StyledWhyItem>
          <StyledWhyItem>
            <StyledIcon src={polygon} alt="" />
            <StyledParagraph>Greater customer personalization</StyledParagraph>
          </StyledWhyItem>
          <StyledSellParagraph>
            Sounds intriguing?
          </StyledSellParagraph>
        </StyledFlexBox>
        <StyledButton as={AnchorLink} primary="white" secondary="darkBeige" to="/why-us">Read more</StyledButton>
      </StyledRightContent>
    </StyledWhyUsContent>
  </StyledWhyUs>
);

export default WhyUs;
