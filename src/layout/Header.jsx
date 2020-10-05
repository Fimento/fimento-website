import React from 'react';

import logo from '../assets/logo-symbol-black.svg';

import StyledHeader, { StyledHeaderContent } from '../styled/layouts/StyledHeader';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

import StyledImg from '../styled/elements/StyledImg';
import StyledH3 from '../styled/elements/StyledH3';

const Header = () => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledFlexBox alignItems="center">
        <StyledFlexBox marginRight="small">
          <StyledImg src={logo} alt="Fimento" height="96px" />
        </StyledFlexBox>
        <StyledFlexBox>
          <StyledH3 fontWeight="regular">FIMENTO</StyledH3>
        </StyledFlexBox>
      </StyledFlexBox>
      <StyledH3>Menu</StyledH3>
    </StyledHeaderContent>
  </StyledHeader>
);

export default Header;
