import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';
import StyledButton from '../../styled/elements/StyledButton';
import StyledH2 from '../../styled/elements/StyledH2';
import StyledUl from '../../styled/elements/StyledUl';
import StyledLi from '../../styled/elements/StyledLi';

import honeyComb from '../../assets/honey-comb-img.png';

const StyledOffer = styled.div`
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
  order: 2;
  margin-top: ${style.spaces.regular};
  ${style.media.laptop`
    width: 50%;
    height: 100%;
    justify-content: flex-end;
    align-items: start;
    margin: 0;
    order: 0;
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
  justify-content: center;
  order: 1;
  width: 100%;
  margin-bottom: ${style.spaces.regular};

  ${StyledImg} {
    max-width: 100%
  }

  ${style.media.laptop`
    width: 50%;
    height: 100%;
    justify-content: flex-start;
    margin: 0;
    order: 0;
    ${StyledImg} {
      width: 100%
    }
  `}

`;

const Offer = () => (
  <StyledOffer>
    <StyledLeft>
      <StyledLeftContent>
        <StyledH2>What we can offer</StyledH2>
        <StyledParagraph>
          The Fimento ecosystem is fully API-based and consists of several cloud based financial services that are used combined or individually to suit client needs.
        </StyledParagraph>
        <StyledUl>
          <StyledLi>Marketplaces &amp; platforms</StyledLi>
          <StyledLi>Product financing</StyledLi>
          <StyledLi>Contract mortgaging</StyledLi>
          <StyledLi>Charging solutions for BRF/B2B</StyledLi>
          <StyledLi>E-invoicing and accounts payable</StyledLi>
        </StyledUl>
        <StyledParagraph>
          Want to learn more?
        </StyledParagraph>
        <StyledButton as={Link} to="/the-product">Read more</StyledButton>
      </StyledLeftContent>
    </StyledLeft>
    <StyledRightContent>
      <StyledImg src={honeyComb} alt="" />
    </StyledRightContent>
  </StyledOffer>
);

export default Offer;
