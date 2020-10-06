import React from 'react';
import Helmet from 'react-helmet';

import SmoothScrollAnchor from '../logic/elements/SmoothScrollAnchor';

import Page from '../layout/Page';
import Section from '../logic/layouts/Section';

import Hero from '../logic/layouts/Hero';

import honeyComb from '../assets/honey-comb-img.png';
import digitalPayment from '../assets/digital-payment.png';
import tree from '../assets/picture-tree.jpg';
// Board
import hanna from '../assets/hanna.jpg';
import bruno from '../assets/bruno.jpg';
import mats from '../assets/mats.jpg';
import trond from '../assets/trond-dale.jpg';
import lars from '../assets/lars-hallenius.jpg';

import StyledParagraph from '../styled/elements/StyledParagraph';
import StyledImg from '../styled/elements/StyledImg';
import StyledH2 from '../styled/elements/StyledH2';
import StyledButton from '../styled/elements/StyledButton';
import StyledIFrame from '../styled/elements/StyledIFrame';
import StyledTree from '../styled/elements/StyledTree';

import StyledFlexBox from '../styled/layouts/StyledFlexBox';
import AsideLayout, { StyledAside } from '../logic/layouts/AsideLayout';
import ManagementCard from '../logic/layouts/ManagementCard';
import Quote from '../logic/layouts/Quote';
import WhyUs from '../logic/layouts/WhyUs';

const Home = () => (
  <Page>
    <Hero />
    <Section background="lightBeige">
      <Quote />
    </Section>
    <Section background="white" marginTop="none" marginBottom="none">
      <AsideLayout>
        <StyledAside>
          <StyledImg src={honeyComb} alt="" width="100%" />
        </StyledAside>
        <StyledH2>What we can offer you</StyledH2>
        <StyledFlexBox flexDirection="column" maxWidth="75%">
          <StyledParagraph>
            The Fimento ecosystem is fully API-based and
            consists of several cloud based financial
            services that be combined or, in some
            cases, used individually. From onboarding
            and KYC – to ledger/cash management
            – to AI based data analysis, and beyond.
          </StyledParagraph>
          <StyledParagraph>
            What you get is a flexible, customizable
            fintech solution that is tailor made to your
            specific needs and that can be adapted
            and scaled over time.
          </StyledParagraph>
          <StyledParagraph>
            Want to learn more?
          </StyledParagraph>
          <StyledButton as={SmoothScrollAnchor} href="#contact">Read more</StyledButton>
        </StyledFlexBox>
      </AsideLayout>
    </Section>
    <Section background="darkBeige" marginTop="none" marginBottom="none">
      <WhyUs />
    </Section>
    <Section background="white" marginTop="none" marginBottom="none">
      <AsideLayout>
        <StyledH2>Case studies</StyledH2>
        <StyledAside>
          <StyledImg src={digitalPayment} alt="" width="100%" />
        </StyledAside>
        <StyledFlexBox flexDirection="column" maxWidth="75%">
          <StyledParagraph>
            We partner with our clients to understand
            their business and their challenges. Our
            focus is on finding and developing
            solutions that adds true value.
          </StyledParagraph>
          <StyledParagraph>
            Want more?
          </StyledParagraph>
          <StyledButton as={SmoothScrollAnchor} href="#contact">Read more</StyledButton>
        </StyledFlexBox>
      </AsideLayout>
    </Section>
    <Section background="white" marginTop="none" marginBottom="none">
      <StyledFlexBox flexDirection="column">
        <StyledFlexBox flexDirection="column" justifyContent="start" maxWidth="45%">
          <StyledH2>
            Board and Senior Management
          </StyledH2>
          <StyledParagraph maxWidth="80%">
            We are a mix of nationalities, backgrounds
            and experiences, collectivley striving to
            democratize banking and finance solutions
            through digitalization. We believe technology
            will lead to fairer access to funding, lending
            and liquidity.
          </StyledParagraph>
        </StyledFlexBox>
        <StyledFlexBox maxWidth="90%" flexWrap="wrap" justifyContent="flex-end">
          <ManagementCard img={hanna} name="Hanna Raftell" title="CEO" />
          <ManagementCard img={trond} name="Trond Dale" title="Chairman of the Board" />
          <ManagementCard img={bruno} name="Bruno Godefroy" title="CTO" />
          <ManagementCard img={mats} name="Mats Berglund" title="Boardmember" />
          <ManagementCard img={lars} name="Lars Hallenius" title="Boardmember" />
        </StyledFlexBox>
      </StyledFlexBox>
    </Section>
    <Section background="darkBeige">
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
        <StyledTree src={tree} alt="" />
      </AsideLayout>
    </Section>
  </Page>
);

export default Home;
