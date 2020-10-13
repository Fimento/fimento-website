import styled from 'styled-components';

import StyledFlexBox from './StyledFlexBox';

const StyledSection = styled(StyledFlexBox)`
  position: relative;
  width: 100%;
  overflow-wrap: break-word;
  padding: 0;
  flex-direction: row;
`;

StyledSection.propTypes = StyledFlexBox.propTypes;

StyledSection.defaultProps = StyledFlexBox.defaultProps;

export default StyledSection;
