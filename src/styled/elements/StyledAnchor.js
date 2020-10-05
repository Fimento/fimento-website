import styled from 'styled-components';
import style from '../../constants/style';

const StyledAnchor = styled.a`
  color: ${style.colours.secondary};
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledAnchor;
