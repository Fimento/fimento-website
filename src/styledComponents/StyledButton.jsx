import styled from 'styled-components';

const StyledButton = styled('button')`
  padding: 1rem 1.5rem;
  color: #d9c6aa;
  background-color: transparent;
  border: none;
  border-radius: 6rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,.1);
  transition: all .25s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 20px rgba(0,0,0,.15);
    transform: translateY(2px);
    color: #000;
  }
`;

export default StyledButton;
