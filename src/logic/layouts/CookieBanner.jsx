import React, { useState, useEffect, useCallback } from 'react';
import cookies from 'js-cookie';
import styled from 'styled-components';

import style from '../../constants/style';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledH4 from '../../styled/elements/StyledH4';
import StyledButton from '../../styled/elements/StyledButton';

const ContentContainer = styled(StyledFlexBox)`
  width: 100%;
  height: auto;
  position: fixed;
  justify-content: center;
  bottom: 0;
  flex-direction: column;
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
      <StyledH4 fontWeight={style.fontWeights.bold}>We use cookies</StyledH4>
      <CookieParagraph>To improve and analyze our site we use cookies</CookieParagraph>
      <StyledButton primary="white" secondary="darkBeige" onClick={onCookieClose}>Allow</StyledButton>
    </ContentContainer>
  );
};

export default CookieBanner;
