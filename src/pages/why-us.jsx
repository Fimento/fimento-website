import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Section from '../logic/layouts/Section';
import CatchPhrase from '../logic/layouts/CatchPhrase';
import Page from '../layout/Page';

import StyledH2 from '../styled/elements/StyledH2';
import StyledParagraph from '../styled/elements/StyledParagraph';
import StyledUl from '../styled/elements/StyledUl';
import StyledLi from '../styled/elements/StyledLi';
import StyledAnchor from '../styled/elements/StyledAnchor';

import StyledArticle from '../styled/layouts/StyledArticle';

const WhyUs = () => (
  <Page>
    <Section medium>
      <CatchPhrase>Why banks and financial institutions should choose us</CatchPhrase>
      <StyledArticle>
        <StyledParagraph>
          At Fimento, we work with many financial institutions. It is an industry that is highly
          regulated. We go to great length, not only to comply with existing rules and
          regulations but we also strive to be best in class. When we learn something, we will
          make sure we deploy those learnings across all our clients.
        </StyledParagraph>
        <StyledParagraph>
          In terms of data security, we have stringent checks and balances to ensure we comply
          with regulation for data collection and storage.
        </StyledParagraph>
        <StyledH2>A scalable cloud service</StyledH2>
        <StyledParagraph>
          The modular architecture of the platform is like building with Lego blocks. You can
          create many different things using the same pieces. This also makes the platform highly
          agile and able to support our customers’ journey when they are looking to launch new
          products or wanting to personalize their client offering. Open APIs allow for quick
          integration.
        </StyledParagraph>
        <StyledH2>Based on modules</StyledH2>
        <StyledParagraph>
          Pick and choose from a wide range of modules and combine them according to your needs:
        </StyledParagraph>
        <StyledUl>
          <StyledLi>Accounting</StyledLi>
          <StyledLi>Accounts</StyledLi>
          <StyledLi>AML/Fraud</StyledLi>
          <StyledLi>Backend</StyledLi>
          <StyledLi>Data collection</StyledLi>
          <StyledLi>Data enrichment</StyledLi>
          <StyledLi>Decision engine</StyledLi>
          <StyledLi>E-signing</StyledLi>
          <StyledLi>Frontend</StyledLi>
          <StyledLi>Invoicing</StyledLi>
          <StyledLi>Notification</StyledLi>
          <StyledLi>Payments</StyledLi>
          <StyledLi>Reporting</StyledLi>
          <StyledLi>Underwriting</StyledLi>
        </StyledUl>
        <StyledParagraph><StyledAnchor as={AnchorLink} to="/the-product">Read more about our product and the different modules</StyledAnchor></StyledParagraph>
        <StyledH2>Easy to use</StyledH2>
        <StyledParagraph>
          The onboarding module helps our clients cut costs, as the onboarding becomes more
          automated.This often leads to greater experience for your customers and this, in
          turn, improves conversion.
        </StyledParagraph>
        <StyledParagraph>
          Invoicing remains a very manual and labor-intensive procedure. Fimento helps our
          clients with invoicing, invoice matching, and factoring. With more automated processes
          we bring down the margins of error.
        </StyledParagraph>
        <StyledH2>Always up to date</StyledH2>
        <StyledParagraph>
          Many of our clients are regulated and need systems that update with the regulatory
          changes. We ensure that modules, like the AML function, are continuously monitored
          to ensure it complies with the latest regulations.
        </StyledParagraph>
        <StyledH2>Monitored on custom dashboards</StyledH2>
        <StyledParagraph>
          Fimento provides easy to read dashboards for our clients. Whether you prefer an all
          automated process for your onboarding and credit scoring, or you want to keep a partly
          manual process, we cover it. Our clients can design a red flag system for anything
          they want to highlight.
        </StyledParagraph>
        <StyledParagraph>
          We also provide white label solutions for our clients’ customers, for example, a
          partner web.
        </StyledParagraph>
        <StyledH2>Loved by developers</StyledH2>
        <StyledParagraph>
          Fimento strives to be the most customer-friendly company possible, and we regard
          developers as key stakeholders to achieve great success. We offer access to open
          API documentation, as well as a test environment in the form of a sandbox. Our
          systems should be easy to integrate into your digital universe.
        </StyledParagraph>
        <StyledParagraph>
          With some of our clients, we arrange hackathons to engage and help the developer
          teams. It is a great way to land an MVP and for you to get a feel for the
          capabilities of Fimento.
        </StyledParagraph>
        <StyledH2>On the technical forefront</StyledH2>
        <StyledParagraph>
          We apply Artificial Intelligence (AI) and Machine Learning (ML) to perform smart
          data analytics. But we know, that without a solid base of data and processes,
          our state-of-the-art solutions will not come to its right. That is why we always
          start by helping our clients set up the processes to collect relevant data which
          is stored in the data lake. This allows for a large amount of unstructured data that
          you can dip into using your AI or algorithms to conduct the data analytics.
        </StyledParagraph>
        <StyledParagraph>
          An example of good AI is when we can ensure a fairer and more accurate credit scoring.
          This will, for example, in turn, lead to a more correct pricing of a loan.
        </StyledParagraph>
      </StyledArticle>
    </Section>
  </Page>
);

export default WhyUs;
