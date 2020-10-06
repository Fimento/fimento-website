import React from 'react';
import styled from 'styled-components';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledIcon from '../../styled/elements/StyledIcon';
import StyledWhyItem from '../../styled/elements/StyledWhyItem';
import StyledButton from '../../styled/elements/StyledButton';
import StyledH2 from '../../styled/elements/StyledH2';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

import polygon from '../../assets/polygon.png';

import SmoothScrollAnchor from '../elements/SmoothScrollAnchor';

const StyledWhyUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  ${style.media.laptop`
    flex-direction: row;
    width: 100%;
  `}
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${StyledH2} {
    color: ${style.colours.white};
  }

  ${style.media.laptop`
    width: 38%;
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

  ${style.media.laptop`
    width: 35%;
    margin-top: 4.5rem;
    margin-left: ${style.spaces.regular}
  `}
`;

const StyledSellParagraph = styled(StyledParagraph)`
  margin: ${style.spaces.small} 0 ${style.spaces.small} 0;
`;

const WhyUs = () => (
  <StyledWhyUs>
    <StyledLeftContent>
      <StyledH2>Why Fimento?</StyledH2>
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
      </StyledFlexBox>
      <StyledSellParagraph>
        Sounds intriguing?
      </StyledSellParagraph>
      <StyledButton as={SmoothScrollAnchor} primary="white" secondary="darkBeige" href="#contact">Contact us</StyledButton>
    </StyledRightContent>
  </StyledWhyUs>
);

export default WhyUs;
