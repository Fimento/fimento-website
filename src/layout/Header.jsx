import React from 'react';

import logo from '../assets/logo-symbol-black.svg';

import StyledHeader from '../styledComponents/StyledHeader';

const Header = () => (
  <StyledHeader>
    <img src={logo} alt="Fimento" />
  </StyledHeader>
);

export default Header;
