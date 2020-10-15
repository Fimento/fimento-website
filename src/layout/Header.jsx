import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../assets/logo-symbol-black.svg';

import style from '../constants/style';

import StyledHeader, { StyledHeaderContent } from '../styled/layouts/StyledHeader';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

import StyledImg from '../styled/elements/StyledImg';
import StyledH3 from '../styled/elements/StyledH3';
import StyledAnchor from '../styled/elements/StyledAnchor';

const StyledHomeLogo = styled(StyledAnchor)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: ${style.colours.primary};
  &:hover {
    text-decoration: none;
  }

`;

const Header = () => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledHomeLogo as={Link} to="/">
        <StyledFlexBox>
          <StyledImg src={logo} alt="Fimento" />
          <StyledH3 fontWeight="regular">FIMENTO</StyledH3>
        </StyledFlexBox>
      </StyledHomeLogo>
      {/* <StyledH3>Menu</StyledH3> */}
    </StyledHeaderContent>
  </StyledHeader>
);

export default Header;
