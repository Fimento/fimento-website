import React from 'react';
import PropTypes from 'prop-types';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';
import StyledFlexBox from '../../styled/layouts/StyledFlexBox';

const ManagementCard = ({ img, name, title }) => (
  <StyledFlexBox width="470px" height="225px" background="darkBeige" margin="small">
    <StyledImg src={img} alt="" width="240px" height="225px" />
    <StyledFlexBox width="100%" flexDirection="column" alignItems="start" justifyContent="center" paddingLeft="small" marginBottom="huge">
      <StyledParagraph textColour="white">{name}</StyledParagraph>
      <StyledParagraph textColour="grey">{title}</StyledParagraph>
    </StyledFlexBox>
  </StyledFlexBox>
);

ManagementCard.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ManagementCard;
