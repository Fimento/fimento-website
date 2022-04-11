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

import honeyComb from '../../assets/honeycomb.svg';

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
        <StyledH2 textColour="orange">Financial technology adapted to your needs</StyledH2>
        <StyledParagraph>
          Our cloud-based ecosystem consists of financial modules that enable us to create tailor-made solutions that are adapted to your company and your clients&rsquo; business needs. Fimentos&rsquo; technical solutions are used in a wide range of business areas:
        </StyledParagraph>
        <StyledUl>
          <StyledLi>Marketplaces &amp; platforms</StyledLi>
          <StyledLi>Product financing</StyledLi>
          <StyledLi>Contract mortgaging</StyledLi>
          <StyledLi>Charging solutions for BRF/B2B</StyledLi>
          <StyledLi>E-invoicing and accounts payable</StyledLi>
        </StyledUl>
        <StyledParagraph>
          We can deliver our solution through a fully integrated API or web-based portal.
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
