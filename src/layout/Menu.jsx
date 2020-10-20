import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import style from '../constants/style';

import StyledAnchor from '../styled/elements/StyledAnchor';
import StyledH3 from '../styled/elements/StyledH3';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

import Icon from '../logic/elements/Icon';

import CrossIcon from '../assets/cross.svg';

const StyledMenuIcon = styled.div`
  cursor: pointer;
  z-index: ${style.zLevels.raised};
`;

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;

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
    <>
      <StyledMenuIcon onClick={onClick}>
        {open
          ? <Icon iconWidth="2rem" icon={CrossIcon} />
          : <StyledH3>Menu</StyledH3>}
      </StyledMenuIcon>
      <StyledMenuContainer open={open}>
        <StyledLinksContainer>
          <StyledMenuLink as={AnchorLink} to="/">Home</StyledMenuLink>
          <StyledMenuLink as={AnchorLink} to="/the-product">The product</StyledMenuLink>
          <StyledMenuLink as={AnchorLink} to="/why-us">Why us</StyledMenuLink>
          <StyledMenuLink as={AnchorLink} to="/#case-studies">Case study</StyledMenuLink>
          <StyledMenuLink as={AnchorLink} to="/about-us">About us</StyledMenuLink>
          <StyledMenuLink as={AnchorLink} to="/blog">Blog</StyledMenuLink>
        </StyledLinksContainer>
      </StyledMenuContainer>
    </>
  );
};

export default Menu;
