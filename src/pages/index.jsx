import React from 'react';
import Helmet from 'react-helmet';

import Page from '../layout/Page';
import Section from '../logic/layouts/Section';

import Hero from '../logic/layouts/Hero';

import customerSuccess from '../assets/honeycomb-customer-success.svg';

import StyledIFrame from '../styled/elements/StyledIFrame';
import StyledTree from '../styled/elements/StyledTree';

import AsideLayout, { StyledAside } from '../logic/layouts/AsideLayout';
import Quote from '../logic/layouts/Quote';
import WhyUs from '../logic/layouts/WhyUs';
import CaseStudies from '../logic/layouts/CaseStuides';
import Offer from '../logic/layouts/Offer';

const Home = () => (
  <Page>
    <Hero />
    <Section background="lightBeige">
      <Quote />
    </Section>
    <Section id="offer" background="white" marginTop="none" marginBottom="none">
      <Offer />
    </Section>
    <Section id="why-us" background="lightBeige" marginTop="none" marginBottom="none">
      <WhyUs />
    </Section>
    <Section id="case-studies" background="white" marginTop="none" marginBottom="none">
      <CaseStudies />
    </Section>
    <Section id="contact" background="lightBeige">
      <Helmet>
        <script type="text/javascript" src="https://webforms.pipedrive.com/f/loader" />
      </Helmet>
      <AsideLayout>
        <StyledAside>
          <StyledIFrame>
            <div
              className="pipedriveWebForms"
              data-pd-webforms="https://webforms.pipedrive.com/f/1FPH7szALjUEX0fTZ60wJ9laKQaE4xFU5o9Y9CSumrDlhorB5sRVJn7yTVzs8Y4Bd?embeded=1&uuid=id4o21w8"
            />
          </StyledIFrame>
        </StyledAside>
        <StyledTree src={customerSuccess} alt="" />
      </AsideLayout>
    </Section>
  </Page>
);

export default Home;
