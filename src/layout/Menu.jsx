import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import style from '../constants/style';

import StyledAnchor from '../styled/elements/StyledAnchor';

import StyledFlexBox from '../styled/layouts/StyledFlexBox';

const StyledBurgerIcon = styled.div`
  cursor: pointer;
`;

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  background: rgba(242,203,166,1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(200%)')};
  transition: all ease 250ms;

  ${style.media.tablet`
    width: 50%;
  `}
`;

const StyledMenuLink = styled(StyledAnchor)`
  font-size: ${style.fontSizes.bigger};
  color: ${style.colours.primary};

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }

  margin: ${style.spaces.tiny} 0;
`;

const StyledLinksContainer = styled(StyledFlexBox)`
  flex-direction: column;
  width: 90%;

  ${style.media.tablet`
    width: 70%;
  `}
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setOpen(!open);
    }, [open],
  );

  return (
    <StyledBurgerIcon
      onClick={onClick}
    >
      {open ? (
        <StyledMenuContainer open={open}>
          <StyledLinksContainer>
            <StyledMenuLink as={AnchorLink} to="/the-product">The product</StyledMenuLink>
            <StyledMenuLink as={AnchorLink} to="/why-us">Why us</StyledMenuLink>
            <StyledMenuLink as={AnchorLink} to="/#case-studies">Case tudy</StyledMenuLink>
            <StyledMenuLink as={AnchorLink} to="/about-us">About us</StyledMenuLink>
            <StyledMenuLink as={AnchorLink} to="/blog">Blog</StyledMenuLink>
          </StyledLinksContainer>
        </StyledMenuContainer>
      ) : 'Menu'}
    </StyledBurgerIcon>
  );
};

export default Menu;
