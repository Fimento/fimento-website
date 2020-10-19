import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
`;

const StyledBurgerIcon = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 30px;
  height: 14px;
  z-index: 100000;
  cursor: pointer;
  &.active {
      &:before {
          content: "";
          opacity: 1;
          transform: rotate(45deg);
      }
      &:after {
          content: "";
          opacity: 1;
          transform: rotate(-45deg);
      }
      ${StyledLine} {
          opacity: 0;
          &.top {
              transform: translateX(-100%);
          }
          &.middle {
              transform: translateX(100%);
          }
          &.bottom {
              transform: translateX(-100%);
          }
      }
  }
  &:before {
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
      transform: rotate(0deg);
      opacity: 0;
      transition: all ease 250ms;
  }
  &:after {
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
      transform: rotate(-0deg);
      opacity: 0;
      transition: all ease 250ms;
  }
  ${StyledLine} {
      position: absolute;
      left: 0;
      height: 2px;
      width: 100%;
      background: #000;
      transition: all ease 250ms;
      &.top {
          top: 0;
      }
      &.middle {
          top: 50%;
          margin-top: -1px;
      }
      &.bottom {
          bottom: 0;
      }
  }
`;

const Menu = () => (
  <StyledBurgerIcon>
    <StyledLine className="top" />
    <StyledLine className="middle" />
    <StyledLine className="bottom" />
  </StyledBurgerIcon>
);

export default Menu;
