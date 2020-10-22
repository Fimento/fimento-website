import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';

import logo from '../assets/logo-symbol-black.svg';

import StyledHeader, {
  StyledHeaderContent,
  StyledHomeLogo,
  StyledMenuButton,
  StyledReplicatedHeader,
} from '../styled/layouts/StyledHeader';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

import StyledImg from '../styled/elements/StyledImg';
import StyledH3 from '../styled/elements/StyledH3';

import useScrollState from '../utils/useScrollState';

import Menu from './Menu';

import Icon from '../logic/elements/Icon';

import CrossIcon from '../assets/cross.svg';

const Header = () => {
  const { isOnTop, isScrollingDown, isScrollingUp } = useScrollState();

  const [open, setOpen] = useState(false);
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setOpen(!open);
    }, [open],
  );

  return (
    <>
      <StyledHeader
        isOnTop={isOnTop}
        isScrollingDown={isScrollingDown}
        isScrollingUp={isScrollingUp}
      >
        <StyledHeaderContent>
          <StyledHomeLogo as={Link} to="/">
            <StyledFlexBox height="100%" alignItems="center">
              <StyledImg src={logo} alt="Fimento" />
              <StyledH3 textColour="primary" fontWeight="regular">FIMENTO</StyledH3>
            </StyledFlexBox>
          </StyledHomeLogo>
          <StyledMenuButton onClick={onClick}>
            <StyledH3>Menu</StyledH3>
          </StyledMenuButton>
        </StyledHeaderContent>
      </StyledHeader>
      <Menu
        open={open}
        onClick={onClick}
        button={(
          <StyledReplicatedHeader open={open}>
            <StyledFlexBox justifyContent="flex-end" height="100%" alignItems="center">
              <StyledMenuButton onClick={onClick}>
                <Icon iconWidth="2rem" icon={CrossIcon} />
              </StyledMenuButton>
            </StyledFlexBox>
          </StyledReplicatedHeader>
        )}
      />
    </>
  );
};

export default Header;
