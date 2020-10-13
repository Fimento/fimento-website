import React from 'react';
import { Link } from 'gatsby';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';
import StyledH3 from '../../styled/elements/StyledH3';

import fimentoLogo from '../../assets/fimento_logo_name.png';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';
import StyledWrappedColumn from '../../styled/layouts/StyledWrappedColumn';
import StyledFooter, { StyledFooterContent } from '../../styled/layouts/StyledFooter';
import StyledAnchor from '../../styled/elements/StyledAnchor';

import fimentoInfo from '../../constants/fimentoInfo';

const Footer = () => (
  <StyledFooter>
    <StyledFooterContent>
      <StyledFlexBox minHeight="10%">
        <StyledImg src={fimentoLogo} alt="Fimento" />
      </StyledFlexBox>
      <StyledWrappedColumn
        inBetweenMargin="tiny"
        leftProportion={0.4}
        rightProportion={0.4}
      >
        <StyledFlexBox flexDirection="column">
          <StyledH3>Sitemap</StyledH3>
          <StyledParagraph><StyledAnchor as={Link} to="/Fimento">Fimento</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/the-product">The product</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/the-product">Why us</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/the-product">Case studies</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/the-product">About us</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/the-product">Blog</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/for-developers">For Developers</StyledAnchor></StyledParagraph>
        </StyledFlexBox>
        <StyledFlexBox flexDirection="column">
          <StyledH3>Contact us</StyledH3>
          <StyledParagraph>{fimentoInfo.STREET}</StyledParagraph>
          <StyledParagraph>{fimentoInfo.ADDRESS}</StyledParagraph>
          <StyledParagraph>{fimentoInfo.PHONE}</StyledParagraph>
          <StyledParagraph>{fimentoInfo.EMAIL}</StyledParagraph>
          <StyledParagraph>
            &copy;&nbsp;Copyright&nbsp;
            {fimentoInfo.COMPANY_NAME}
          </StyledParagraph>
        </StyledFlexBox>
        <StyledFlexBox flexDirection="column">
          <StyledH3>Follow us</StyledH3>
          <StyledParagraph><StyledAnchor as={Link} to="/LinkedIn">LinkedIn</StyledAnchor></StyledParagraph>
          <StyledParagraph><StyledAnchor as={Link} to="/TeamTailor">TeamTailor</StyledAnchor></StyledParagraph>
        </StyledFlexBox>
      </StyledWrappedColumn>
    </StyledFooterContent>
  </StyledFooter>
);

export default Footer;
