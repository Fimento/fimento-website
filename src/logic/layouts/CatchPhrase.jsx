import React from 'react';
import PropTypes from 'prop-types';

import StyledFlexBox from '../../styled/layouts/StyledFlexBox';
import StyledH1 from '../../styled/elements/StyledH1';

const CatchPhrase = ({ children }) => (
  <StyledFlexBox justifyContent="center" marginBottom="huge" marginTop="huge">
    <StyledH1 textAlign="center">{children}</StyledH1>
  </StyledFlexBox>
);

CatchPhrase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CatchPhrase;
