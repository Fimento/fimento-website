import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../../constants/style';
import collapseMarginMixin from '../../mixins/collapseMarginMixin';
import sizeMixin, { sizeTypes, sizeDefaults } from '../../mixins/sizeMixin';
import colourMixin, { colourTypes, colourDefaults } from '../../mixins/colourMixin';

export const DEFAULT_PARAGRAPH_FONT_SIZE = '1.125rem';

const StyledParagraph = styled.p`
  line-height: 1.5;
  text-align: ${(props) => props.textAlign};
  font-weight: ${({ fontWeight }) => style.fontWeights[fontWeight]};
  font-size: ${({ fontSize }) => (fontSize ? style.fontSizes[fontSize] : DEFAULT_PARAGRAPH_FONT_SIZE)};
  font-style: ${({ fontStyle }) => fontStyle};

  margin: ${style.spaces.tiny} 0;

  ${collapseMarginMixin}
  ${colourMixin}
  ${sizeMixin}
`;

StyledParagraph.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  fontStyle: PropTypes.string,
  ...colourTypes,
  ...sizeTypes,
};

StyledParagraph.defaultProps = {
  fontSize: undefined,
  fontWeight: 'light',
  textAlign: 'inherit',
  fontStyle: 'normal',
  ...colourDefaults,
  ...sizeDefaults,
};

export default StyledParagraph;
