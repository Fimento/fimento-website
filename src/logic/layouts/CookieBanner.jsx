import React, { useState, useEffect, useCallback } from 'react';
import cookies from 'js-cookie';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import style from '../../constants/style';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledH4 from '../../styled/elements/StyledH4';
import StyledButton from '../../styled/elements/StyledButton';
import StyledAnchor from '../../styled/elements/StyledAnchor';

const ContentContainer = styled(StyledFlexBox)`
  width: calc(100% - 2 * ${style.spaces.big});
  height: auto;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  flex-direction: row;
  background-color: ${style.colours.darkBeige};
  padding: ${style.spaces.big};
`;

const CookieParagraph = styled(StyledParagraph)`
  margin-bottom: ${style.spaces.regular};
  max-width: 80%;
`;

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const hasAlreadyAcceptedCookies = cookies.get('acceptedCookies');

  useEffect(() => {
    if (!hasAlreadyAcceptedCookies) {
      setShowBanner(true);
    }
  }, [hasAlreadyAcceptedCookies]);

  const onCookieClose = useCallback(
    () => {
      setShowBanner(false);
      cookies.set('acceptedCookies', true, { expires: 365, secure: process.env.NODE_ENV === 'production', SameSite: 'Lax' });
    },
    [],
  );

  return showBanner && (
    <ContentContainer background={style.colours.darkBeige}>
      <StyledFlexBox flexDirection="column" flexGrow="1">
        <StyledH4 fontWeight={style.fontWeights.bold}>We use cookies</StyledH4>
        <CookieParagraph>To improve and analyze our site we use cookies. <StyledAnchor as={AnchorLink} to="/cookies">Read more</StyledAnchor></CookieParagraph>
      </StyledFlexBox>
      <StyledButton primary="white" secondary="darkBeige" onClick={onCookieClose}>Allow</StyledButton>
    </ContentContainer>
  );
};

export default CookieBanner;
