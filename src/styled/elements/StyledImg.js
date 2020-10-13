import styled from 'styled-components';

import sizeMixin, { sizeTypes, sizeDefaults } from '../../mixins/sizeMixin';
import spaceMixin, { spaceTypes, spaceDefaults } from '../../mixins/spaceMixin';

const StyledImg = styled.img`
  ${sizeMixin}
  ${spaceMixin}
`;

StyledImg.propTypes = {
  ...sizeTypes,
  ...spaceTypes,
};

StyledImg.defaultProps = {
  ...sizeDefaults,
  ...spaceDefaults,
  height: 'auto',
  width: 'auto',
};

export default StyledImg;
