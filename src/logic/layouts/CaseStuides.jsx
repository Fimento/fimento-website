import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';
import StyledButton from '../../styled/elements/StyledButton';
import StyledH2 from '../../styled/elements/StyledH2';

import digitalPayment from '../../assets/digital-payment.png';
import digitalPaymentMobile from '../../assets/digital-payment-mobile.jpg';

const StyledCaseStudies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  ${style.media.laptop`
    flex-direction: row;
  `}
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${style.media.laptop`
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: start;
  `}
`;

const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${StyledButton} {
    margin: ${style.spaces.regular} 0 ${style.spaces.regular} 0;
  }

  ${style.media.laptop`
    width: 80%;
    justify-content: flex-end;
  `}
`;
const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${style.media.laptop`
    width: 50%;
    height: 100%;
    justify-content: flex-end;
  `}

`;

const CaseImageMobile = styled(StyledImg)`
  width: calc(100% + (2 * ${style.spaces.regular}));
  display: block;
  ${style.media.laptop`
    display: none;
  `}
  ${style.media.tablet`
    width: calc(100% + (2 * 3rem));
  `}
`;
const CaseImageLaptop = styled(StyledImg)`
  width: 100%;
  display: none;
  ${style.media.laptop`
    display: block;
  `}
`;

const CaseStudies = () => (
  <StyledCaseStudies>
    <StyledLeft>
      <StyledLeftContent>
        <StyledH2 textColour="orange">Case studies</StyledH2>
        <StyledParagraph>
          We partner with our clients to understand
          their business and their challenges. Our
          focus is on finding and developing
          solutions that adds true value.
        </StyledParagraph>
        <StyledButton as={AnchorLink} to="/#contact">Contact us</StyledButton>
      </StyledLeftContent>
    </StyledLeft>
    <StyledRightContent>
      <CaseImageMobile src={digitalPaymentMobile} alt="" />
      <CaseImageLaptop src={digitalPayment} alt="" />
    </StyledRightContent>
  </StyledCaseStudies>
);

export default CaseStudies;
