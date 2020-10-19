import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/logo-symbol-black.svg';

import StyledHeader, { StyledHeaderContent, StyledHomeLogo } from '../styled/layouts/StyledHeader';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

import StyledImg from '../styled/elements/StyledImg';
import StyledH3 from '../styled/elements/StyledH3';

import Menu from './Menu';

const Header = () => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledHomeLogo as={Link} to="/">
        <StyledFlexBox alignItems="center">
          <StyledImg src={logo} alt="Fimento" />
          <StyledH3 fontWeight="regular">FIMENTO</StyledH3>
        </StyledFlexBox>
      </StyledHomeLogo>
      <Menu />
    </StyledHeaderContent>
  </StyledHeader>
);

export default Header;
