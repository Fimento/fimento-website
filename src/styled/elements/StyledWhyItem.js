import styled from 'styled-components';
import style from '../../constants/style';
import StyledParagraph from './StyledParagraph';
import StyledIcon from './StyledIcon';

const StyledWhyItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: 0.5rem 0;

  ${style.collapseMarginMixin}

  ${StyledParagraph} {
    align-self: center;
    text-align: left;
    margin: 0;
  }

  ${StyledIcon} {
    margin: unset;
    margin-right: 1rem;
    margin-top: 0.2em;
    width: 1.3rem;
    height: 1.3rem;
    flex-shrink: 0;
  }
`;

export default StyledWhyItem;
