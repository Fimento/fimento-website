import styled, { keyframes } from 'styled-components';

import style from '../../constants/style';

const spin = keyframes`
  0% {transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  border: 0.5rem solid ${style.colours.grey};
  border-top: 0.5rem solid ${style.colours.primary};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
`;

export default StyledSpinner;
