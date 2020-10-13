import React from 'react';
import PropTypes from 'prop-types';

import StyledSection from '../../styled/layouts/StyledSection';
import StyledSectionContent from '../../styled/layouts/StyledSectionContent';

const Section = (props) => {
  const {
    id,
    as,
    narrow,
    medium,
    fullWidth,
    marginTop,
    marginBottom,
    background,
    children,
    backgroundImage,
  } = props;
  return (
    <StyledSection
      id={id}
      as={as}
      marginTop={marginTop}
      marginBottom={marginBottom}
      background={background}
      backgroundImage={backgroundImage}
    >
      <StyledSectionContent
        narrow={narrow}
        medium={medium}
        fullWidth={fullWidth}
      >
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  as: PropTypes.string,
  background: PropTypes.string,
  narrow: PropTypes.bool,
  medium: PropTypes.bool,
  fullWidth: PropTypes.bool,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
};

Section.defaultProps = {
  id: null,
  as: 'section',
  background: 'light',
  narrow: false,
  medium: false,
  fullWidth: false,
  marginTop: 'regular',
  marginBottom: 'regular',
  backgroundImage: undefined,
};

export default Section;
