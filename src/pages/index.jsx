import React from 'react';
import Helmet from 'react-helmet';

import SmoothScrollAnchor from '../logic/elements/SmoothScrollAnchor';

import Page from '../layout/Page';
import Section from '../logic/layouts/Section';

import Hero from '../logic/layouts/Hero';

import honeyComb from '../assets/honey-comb-img.png';
import polygon from '../assets/polygon.png';
import digitalPayment from '../assets/digital-payment.png';
import hanna from '../assets/hanna.jpg';
import bruno from '../assets/bruno.jpg';
import mats from '../assets/mats.jpg';
import trond from '../assets/trond-dale.jpg';
import lars from '../assets/lars-hallenius.jpg';

import StyledParagraph from '../styled/elements/StyledParagraph';
import StyledImg from '../styled/elements/StyledImg';
import StyledSpan from '../styled/elements/StyledSpan';
import StyledH2 from '../styled/elements/StyledH2';
import StyledButton from '../styled/elements/StyledButton';
import StyledWhyItem from '../styled/elements/StyledWhyItem';
import StyledIcon from '../styled/elements/StyledIcon';

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
        <StyledH2>What we can offer you</StyledH2>
        <StyledAside>
          <StyledImg src={honeyComb} alt="" />
        </StyledAside>
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
      <AsideLayout>
        <StyledH2 textColour="white">Why Fimento?</StyledH2>
        <StyledAside>
          <StyledParagraph>
            The way we see it, our job is to coach our
            clients so that they can make the best
            decisions and find the best solution, given
            their unique business goals and needs.
            Typically, the results are:
          </StyledParagraph>
          <StyledFlexBox flexDirection="column" justifyContent="start" width="100%">
            <StyledWhyItem>
              <StyledIcon src={polygon} maxHeight="1.3rem" alt="" />
              <StyledParagraph>Faster time to market</StyledParagraph>
            </StyledWhyItem>
            <StyledWhyItem>
              <StyledIcon src={polygon} maxHeight="1.3rem" alt="" />
              <StyledParagraph>Less manual processes</StyledParagraph>
            </StyledWhyItem>
            <StyledWhyItem>
              <StyledIcon src={polygon} maxHeight="1.3rem" alt="" />
              <StyledParagraph>Greater customer personalization</StyledParagraph>
            </StyledWhyItem>
            <StyledParagraph>
              Sounds intriguing?
            </StyledParagraph>
            <StyledButton as={SmoothScrollAnchor} primary="white" secondary="darkBeige" href="#contact">Contact us</StyledButton>
          </StyledFlexBox>
        </StyledAside>
        <StyledFlexBox flexDirection="column" maxWidth="75%">
          <StyledParagraph>
            What we do best, is focusing on you. Our
            primary driving force is the democratization
            of banking and financial services, creating
            greater financial wellness for more people
            and businesses. We firmly believe that
            fintech and digitalization are the tools to
            get us there.
          </StyledParagraph>
          <StyledParagraph>
            Our cloud based infrastructure works as an
            enabler for providing custom made solutions
            for companies of any size or industry, both
            financial and non-financial.
          </StyledParagraph>
        </StyledFlexBox>
      </AsideLayout>
    </Section>
    <Section background="white" marginTop="none" marginBottom="none">
      <AsideLayout>
        <StyledH2>Case studies</StyledH2>
        <StyledAside>
          <StyledImg src={digitalPayment} alt="" />
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
