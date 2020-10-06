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
  padding: 3rem 1.5rem 0rem;

  ${StyledParagraph} {
    margin: ${style.spaces.tiny} 0 0;
    ${collapseMarginMixin}
  }
  ${StyledImg} {
    max-height: 49%;
  }

  ${StyledAnchor} {
    color: ${style.colours.secondary};
    font-weight: ${style.fontWeights.bold};
  }

  ${StyledWrappedColumn} > ${StyledFlexBox} {
  }

  ${style.media.tablet`
    padding: 4rem 6rem 2rem;

    ${StyledWrappedColumn} > ${StyledFlexBox} {
    }
  `}

  ${style.media.laptop`
    ${StyledWrappedColumn} > ${StyledFlexBox} {
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
