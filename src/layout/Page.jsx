import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import StyledPage from '../styledComponents/StyledPage';
import GlobalStyle from '../styledComponents/GlobalStyle';

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyle />
    <Header />
    {children}
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
