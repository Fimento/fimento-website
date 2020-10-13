import { css } from 'styled-components';

const collapseMarginMixin = css`
  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default collapseMarginMixin;
