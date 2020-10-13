import styled from 'styled-components';

import StyledParagraph from '../elements/StyledParagraph';
import StyledAnchor from '../elements/StyledAnchor';
import StyledWrappedColumn from './StyledWrappedColumn';
import StyledFlexBox from './StyledFlexBox';
import StyledImg from '../elements/StyledImg';

import style from '../../constants/style';
import collapseMarginMixin from '../../mixins/collapseMarginMixin';

export const StyledFooterContent = styled('div')`
  display: flex;
  flex-direction: column;

  max-width: 60rem;
  width: 100%;
  padding: 3rem 1.5rem 2rem;

  ${StyledParagraph} {
    margin: ${style.spaces.tiny} 0 0;
    color: ${style.colours.secondary};
    font-weight: ${style.fontWeights.light};
    font-size: ${style.fontSizes.tiny};
    ${collapseMarginMixin}
  }

  ${StyledImg} {
    max-height: 4rem;
  }

  ${StyledAnchor} {
    color: ${style.colours.secondary};
  }

  ${style.media.tablet`
    padding: 4rem 6rem 2rem;

    ${StyledImg} {
      margin-bottom: 2rem;
    }
  `}

  ${style.media.laptop`
    ${StyledParagraph} {
      font-size: ${style.fontSizes.smaller};
    }
  `}
`;

const StyledFooter = styled('footer')`
  display: flex;
  background: ${style.colours.white};
  color: ${style.colours.light};
  justify-content: center;
`;

export default StyledFooter;
