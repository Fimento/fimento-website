import styled from 'styled-components';
import PropTypes from 'prop-types';

import backgroundMixin, { backgroundTypes, backgroundDefaults } from '../../mixins/backgroundMixin';
import spaceMixin, { spaceTypes, spaceDefaults } from '../../mixins/spaceMixin';
import colourMixin, { colourTypes, colourDefaults } from '../../mixins/colourMixin';
import positionMixin, { positionTypes, positionDefaults } from '../../mixins/positionMixin';
import sizeMixin, { sizeTypes, sizeDefaults } from '../../mixins/sizeMixin';
import flexGapMixin, { flexGapTypes, flexGapDefaults } from '../../mixins/flexGapMixin';
import borderMixin, { borderTypes, borderDefaults } from '../../mixins/borderMixin';

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  flex-wrap: ${(props) => props.flexWrap};
  align-content: ${(props) => props.alignContent};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};

  ${backgroundMixin}
  ${spaceMixin}
  ${colourMixin}
  ${positionMixin}
  ${sizeMixin}
  ${flexGapMixin}
  ${borderMixin}
`;

StyledFlexBox.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flexWrap: PropTypes.string,
  alignContent: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  ...backgroundTypes,
  ...spaceTypes,
  ...colourTypes,
  ...positionTypes,
  ...sizeTypes,
  ...flexGapTypes,
  ...borderTypes,
};

StyledFlexBox.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignSelf: 'auto',
  flexWrap: 'nowrap',
  alignContent: 'stretch',
  flexGrow: '0',
  flexShrink: '1',
  ...backgroundDefaults,
  ...spaceDefaults,
  ...colourDefaults,
  ...positionDefaults,
  ...sizeDefaults,
  ...flexGapDefaults,
  ...borderDefaults,
};

export default StyledFlexBox;
