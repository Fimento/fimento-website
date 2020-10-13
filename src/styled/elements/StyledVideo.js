import styled from 'styled-components';

import sizeMixin, { sizeTypes, sizeDefaults } from '../../mixins/sizeMixin';
import spaceMixin, { spaceTypes, spaceDefaults } from '../../mixins/spaceMixin';

const StyledVideo = styled.video`
  ${sizeMixin}
  ${spaceMixin}
`;

StyledVideo.propTypes = {
  ...sizeTypes,
  ...spaceTypes,
};

StyledVideo.defaultProps = {
  ...sizeDefaults,
  ...spaceDefaults,
  height: 'auto',
  width: 'auto',
};

export default StyledVideo;
