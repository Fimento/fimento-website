import React from 'react';
import styled from 'styled-components';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';
import StyledButton from '../../styled/elements/StyledButton';
import StyledH2 from '../../styled/elements/StyledH2';

import digitalPayment from '../../assets/digital-payment.png';

import SmoothScrollAnchor from '../elements/SmoothScrollAnchor';

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
    justify-content: flex-end;
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

  ${StyledImg} {
  }
  ${style.media.laptop`
    width: 50%;
    height: 100%;
    justify-content: flex-end;
  `}

`;

const CaseStudies = () => (
  <StyledCaseStudies>
    <StyledLeft>
      <StyledLeftContent>
        <StyledH2>Case studies</StyledH2>
        <StyledParagraph>
          We partner with our clients to understand
          their business and their challenges. Our
          focus is on finding and developing
          solutions that adds true value.
        </StyledParagraph>
        <StyledParagraph>
          Want more?
        </StyledParagraph>
        <StyledButton as={SmoothScrollAnchor} primary="beige" secondary="white" href="#contact">Read more</StyledButton>
      </StyledLeftContent>
    </StyledLeft>
    <StyledRightContent>
      <StyledImg src={digitalPayment} alt="" width="100%" />
    </StyledRightContent>
  </StyledCaseStudies>
);

export default CaseStudies;
