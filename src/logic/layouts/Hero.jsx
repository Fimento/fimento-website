import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import heroPicture from '../../assets/hero.png';

import StyledHero, { StyledHeroContent } from '../../styled/layouts/StyledHero';
import StyledH1 from '../../styled/elements/StyledH1';
import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledButton from '../../styled/elements/StyledButton';
import StyledImg from '../../styled/elements/StyledImg';

const Hero = () => (
  <StyledHero>
    <StyledHeroContent>
      <StyledImg src={heroPicture} />
      <StyledH1>Increase customer conversion with smart financial solutions</StyledH1>
      <StyledParagraph>
        We help companies increase customer success conversion by offering end-to-end financing solutions.
      </StyledParagraph>
      <StyledButton as={AnchorLink} to="/#contact">Contact us</StyledButton>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
