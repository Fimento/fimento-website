import styled from 'styled-components';

import style from '../../constants/style';

import StyledImg from './StyledImg';

const StyledTree = styled(StyledImg)`
  display: none;
  ${style.media.laptop`
    width: 100%;
    display: block;
  `}
`;

export default StyledTree;
