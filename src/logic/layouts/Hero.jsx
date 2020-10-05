import React from 'react';

import SmoothScrollAnchor from '../elements/SmoothScrollAnchor';

import honeyCombAnimation from '../../assets/honeycombs-animation.mp4';

import StyledHero, { StyledHeroContent } from '../../styled/layouts/StyledHero';
import StyledH1 from '../../styled/elements/StyledH1';
import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledButton from '../../styled/elements/StyledButton';
import StyledVideo from '../../styled/elements/StyledVideo';

const Hero = () => (
  <StyledHero>
    <StyledHeroContent>
      <StyledH1>Cloud banking of the future</StyledH1>
      <StyledVideo autoPlay loop muted playsInline src={honeyCombAnimation} />
      <StyledParagraph>
        Providing next-generation financial services and
        advanced data analysis - for faster time to market,
        less manual processes and greater customer personalization.
      </StyledParagraph>
      <StyledButton as={SmoothScrollAnchor} href="#contact">Contact us</StyledButton>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
