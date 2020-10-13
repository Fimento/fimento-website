import styled from 'styled-components';
import PropTypes from 'prop-types';
import style from '../../constants/style';

const DEFAULT = '70rem';
const NARROW = '30rem';
const MEDIUM = '45rem';

const MOBILE_PADDING = '1.5rem';
const MOBILE_PADDING_TOP = '3rem';
const MOBILE_PADDING_BOTTOM = '2rem';
const TABLET_PADDING = '3rem';
const TABLET_PADDING_TOP = '3.5rem';
const LAPTOP_PADDING = '4rem';
const LAPTOP_PADDING_TOP = '4.5rem';

const getMaxWidth = ({ narrow, medium }) => {
  if (narrow) return NARROW;
  if (medium) return MEDIUM;
  return DEFAULT;
};

const StyledSectionContent = styled.div`
  width: calc(100%${(props) => (props.fullWidth ? '' : ` - (${MOBILE_PADDING} * 2)`)});
  overflow-wrap: break-word;
  margin: 0 auto;
  padding: ${MOBILE_PADDING};
  padding-top: ${MOBILE_PADDING_TOP};
  padding-bottom: ${MOBILE_PADDING_BOTTOM};

  display: flex;
  flex-direction: column;

  max-width: ${getMaxWidth};

  ${style.media.tablet`
    width: calc(100% - (${TABLET_PADDING} * 2));
    padding: ${TABLET_PADDING};
    padding-top: ${TABLET_PADDING_TOP};
  `}

  ${style.media.laptop`
    width: calc(100% - (${LAPTOP_PADDING} * 2));
    padding: ${LAPTOP_PADDING};
    padding-top: ${LAPTOP_PADDING_TOP};
  `}
`;

StyledSectionContent.propTypes = {
  narrow: PropTypes.bool,
  medium: PropTypes.bool,
};

StyledSectionContent.defaultProps = {
  narrow: false,
  medium: false,
};

export default StyledSectionContent;
