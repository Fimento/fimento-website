import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import StyledPage from '../styled/layouts/StyledPage';
import GlobalStyle from '../styled/GlobalStyle';
import Footer from '../logic/layouts/Footer';
import CookieBanner from '../logic/layouts/CookieBanner';

const Page = ({ children }) => (
  <StyledPage>
    <Helmet>
      <title>Fimento</title>
      <meta name="description" content="Combining smart data analytics with modular based architecture for ease of use. Allowing faster time to market, less costs and increased personalization." />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
    <CookieBanner />
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
