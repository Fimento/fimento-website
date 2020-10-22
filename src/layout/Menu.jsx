import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import PropTypes from 'prop-types';

import style from '../constants/style';

import StyledAnchor from '../styled/elements/StyledAnchor';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  ${style.media.tablet`
  width: 50%;
  `}

  z-index: ${style.zLevels.raised};
  background: rgba(242,203,166,1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(200%)')};
  transition: all ease 250ms;
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

const Menu = ({ open, button }) => {
  useEffect(() => {
    if (open) {
      global.document.body.style.overflow = 'hidden';
      global.document.body.style.height = '100%';
    } else {
      global.document.body.style.cssText = '';
    }
  });

  return (
    <StyledMenuContainer open={open}>
      {button}
      <StyledLinksContainer>
        <StyledMenuLink as={AnchorLink} to="/">Home</StyledMenuLink>
        <StyledMenuLink as={AnchorLink} to="/the-product">The product</StyledMenuLink>
        <StyledMenuLink as={AnchorLink} to="/why-us">Why us</StyledMenuLink>
        <StyledMenuLink as={AnchorLink} to="/#case-studies">Case study</StyledMenuLink>
        <StyledMenuLink as={AnchorLink} to="/about-us">About us</StyledMenuLink>
        <StyledMenuLink as={AnchorLink} to="/blog">Blog</StyledMenuLink>
      </StyledLinksContainer>
    </StyledMenuContainer>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  button: PropTypes.node.isRequired,
};

export default Menu;
