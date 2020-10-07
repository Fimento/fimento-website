import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledImg from '../../styled/elements/StyledImg';

import style from '../../constants/style';

const StyledRole = styled(StyledParagraph)`
  max-width: 58%;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${style.colours.darkBeige};
  margin: ${style.spaces.tinier};
  width: calc(50% - (2 * ${style.spaces.tinier}));
  min-height: 17rem;
  max-height: 27rem;
  ${StyledImg} {
    width: 100%;
  }
  ${StyledParagraph} {
    font-size: ${style.fontSizes.tiny};
    margin: 0;
  }

  ${style.media.tablet`
    flex-direction: row;
    width: calc(50% - (2 * ${style.spaces.tiny}));
    margin: ${style.spaces.tiny} ${style.spaces.small} ${style.spaces.tiny} 0;
    height: auto;
    ${StyledImg} {
      width: 50%;
      height: auto;
    }
    ${StyledRole} {
      max-width: 100%;
    }
    ${StyledParagraph} {
      font-size: ${style.fontSizes.small};
      margin: ${style.spaces.tiny} 0 ${style.spaces.tiny} 0;
    }
  `}
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding-left: ${style.spaces.small};
  padding-top: ${style.spaces.big};
  min-height: 4rem;

  ${style.media.laptop`
    flex-direction: column;
    margin: ${style.spaces.tiny};
    padding-top: ${style.spaces.huge};
    height: 100%;
  `}
`;

const ManagementCard = ({ img, name, title }) => (
  <StyledCard>
    <StyledImg src={img} alt="" />
    <StyledTextContent>
      <StyledParagraph textColour="white">{name}</StyledParagraph>
      <StyledRole textColour="grey">{title}</StyledRole>
    </StyledTextContent>
  </StyledCard>
);

ManagementCard.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ManagementCard;
