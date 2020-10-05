import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';

export const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAsideContent = styled.div`
  display: none;
  order: ${({ reverse }) => (reverse ? '-1' : '1')};

  ${style.media.laptop`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-self: stretch;

    width: 50%;
  `}`;

const StyledMainContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${style.media.laptop`
    width: 50%;
    align-items: stretch;
    ${StyledAside} {
      display: none;
    }
  `}
`;

const StyledAsideLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AsideLayout = ({ children, reverse }) => {
  if (!children || !children.length) throw new Error('Required children for AsideLayout');

  const aside = children.find(({ type }) => type.displayName === StyledAside.displayName);

  return (
    <StyledAsideLayout>
      <StyledMainContent>
        {children}
      </StyledMainContent>
      <StyledAsideContent reverse={reverse}>
        {aside}
      </StyledAsideContent>
    </StyledAsideLayout>
  );
};

AsideLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  reverse: PropTypes.bool,
};

AsideLayout.defaultProps = {
  reverse: false,
};

export default AsideLayout;
