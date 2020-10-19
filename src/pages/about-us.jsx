import React from 'react';

import Section from '../logic/layouts/Section';
import CatchPhrase from '../logic/layouts/CatchPhrase';
import Page from '../layout/Page';

import StyledParagraph from '../styled/elements/StyledParagraph';
import StyledH3 from '../styled/elements/StyledH3';
import StyledH4 from '../styled/elements/StyledH4';

import StyledArticle from '../styled/layouts/StyledArticle';

const AboutUs = () => (
  <Page>
    <Section medium>
      <CatchPhrase>Board and Senior Management</CatchPhrase>
      <StyledArticle>
        <StyledParagraph>
          We are a mix of nationalities, backgrounds and experiences, collectively striving to
          democratize banking and finance solutions through digitalization. We believe technology
          will lead to fairer access to funding, lending and liquidity.
        </StyledParagraph>
        <StyledH3>Trond Dale</StyledH3>
        <StyledH4 fontWeight="regular">Chairman of the Board</StyledH4>
        <StyledParagraph>
          I help and support on the sales and partner development for Fimento
        </StyledParagraph>
        <StyledParagraph>
          I have more than 30 years of experience in finance and sales. Having spent most of my
          life working for a wide range of financial institutions from International Investment
          banks to SME focused FinTech companies has given me a lot of experience and an extensive
          network. I am also the CoB of Fortnox finance (accounting services) and Adux (active
          in digital marketing)
        </StyledParagraph>
        <StyledParagraph>
          I am very enthusiastic about how modern technology is changing the financial markets in
          ways that are truly helping the consumers and the corporates.
        </StyledParagraph>
        <StyledH3>Mats Berglund</StyledH3>
        <StyledH4 fontWeight="regular">Director of the Board</StyledH4>
        <StyledParagraph>
          I hope to bring Fimento my experiences, not least through the work I have done both
          operationally but also as an investor.
        </StyledParagraph>
        <StyledParagraph>
          I have over 40 years of operational experience in a range of sectors and businesses.
          I am the chairman and owner of Sankt Erik Investment AB, an investment management company
          through which I have several investments.
        </StyledParagraph>
        <StyledParagraph>
          I have an active role in the Global Development Hub at KTH Royal Institute of Technology
          in Stockholm. I also sit on the board of several companies in different sectors.
        </StyledParagraph>
        <StyledH3>Lars Hallenius</StyledH3>
        <StyledH4 fontWeight="regular">Board member</StyledH4>
        <StyledParagraph>
          I advise and support the strategic development of Fimento.
        </StyledParagraph>
        <StyledParagraph>
          I have more than 20 years of experience investing in technology companies and working
          closely with management to develop the business. I am Chairman of the Investment
          Committee for Credit Opportunity AB, the lead investor in Fimento.
        </StyledParagraph>
        <StyledParagraph>
          I am excited by how the “software eating the world” paradigm rewrites all aspects of how
          businesses operate and interact with customers.
        </StyledParagraph>
        <StyledH3>Hanna Raftell</StyledH3>
        <StyledH4 fontWeight="regular">CEO</StyledH4>
        <StyledParagraph>
          My responsibilities are making Fimento a driving force in the digitalization of banking
          and finance.
        </StyledParagraph>
        <StyledParagraph>
          I have more than 20 years of experience in international banking and finance. I am also a
          board member of Pepins, a financial services company focusing on capital raising,
          allocation, and the Hong Kong Chamber of Commerce.
        </StyledParagraph>
        <StyledParagraph>
          What excites me the most is how technology will democratize the banking and finance
          industry and enhance customer experience beyond anything we have seen so far.
        </StyledParagraph>
        <StyledH3>Bruno Godefroy</StyledH3>
        <StyledH4 fontWeight="regular">CTO</StyledH4>
        <StyledParagraph>
          I ensure that Fimento’s IT platform is always running at the highest level of performance
          and security.
        </StyledParagraph>
        <StyledParagraph>
          I have a background as an engineer. I started my career as an IT consultant in London,
          where I worked for large scale financial institutions as well as fast-growing young
          startups.
        </StyledParagraph>
        <StyledParagraph>
          I enjoy the challenge of transforming business problems into digital solutions. I find
          it enriching as it requires me to stay on top of business and technical knowledge.
        </StyledParagraph>
      </StyledArticle>
    </Section>
  </Page>
);

export default AboutUs;
