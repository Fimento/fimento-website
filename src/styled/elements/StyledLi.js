import styled from 'styled-components';
import style from '../../constants/style';

import { DEFAULT_PARAGRAPH_FONT_SIZE } from './StyledParagraph';

const StyledLi = styled.li`
  margin: 0 0 ${style.spaces.tinier};
  font-size: ${DEFAULT_PARAGRAPH_FONT_SIZE};
  font-weight: ${({ fontWeight }) => style.fontWeights[fontWeight]};
  line-height: 1.5;
`;

export default StyledLi;
