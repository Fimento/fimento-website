import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import StyledFlexBox from './StyledFlexBox';

import style from '../../constants/style';

const StyledWrappedColumn = styled(StyledFlexBox)`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};

  ${(props) => css`
    ${(props.reverse ? `
      & > *:first-child {
        margin-top: ${style.spaces[props.inBetweenMargin]};
      }
      & > *:last-child {
        margin-bottom: ${style.spaces[props.inBetweenMargin]};
      }
    ` : `
      & > *:first-child {
        margin-bottom: ${style.spaces[props.inBetweenMargin]};
      }
      & > *:last-child {
        margin-top: ${style.spaces[props.inBetweenMargin]};
      }
    `)}
  `}

  ${(props) => style.media[props.breakSize]`
    flex-direction: row;
    justify-content: center;

    & > *:first-child {
      width: calc(${props.leftProportion * 100}% - ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]});
      margin-right: ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]};
    }

    & > *:nth-child(2) {
      width: calc(${props.leftProportion * 100}% - ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]});
      margin-right: ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]};
    }

    & > *:last-child {
      width: calc(${(props.rightProportion || (1 - props.leftProportion)) * 100}% - ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]});
      margin-left: ${style.spaces[props.inBetweenMarginLargeScreen || props.inBetweenMargin]};
    }

    ${(props.reverse ? `
      & > *:first-child {
        margin-top: 0;
      }
      & > *:last-child {
        margin-bottom: 0;
      }
    ` : `
      & > *:first-child {
        margin-bottom: 0;
      }
      & > *:last-child {
        margin-top: 0;
      }
    `)}
  `}
`;

StyledWrappedColumn.propTypes = {
  ...StyledFlexBox.propTypes,
  leftProportion: PropTypes.number,
  rightProportion: PropTypes.number,
  reverse: PropTypes.bool,
  breakSize: PropTypes.string,
  inBetweenMargin: PropTypes.string,
  inBetweenMarginLargeScreen: PropTypes.string,
};

StyledWrappedColumn.defaultProps = {
  ...StyledFlexBox.defaultProps,
  leftProportion: 0.5,
  rightProportion: undefined,
  reverse: false,
  breakSize: 'tablet',
  inBetweenMargin: 'small',
  inBetweenMarginLargeScreen: undefined,
};

export default StyledWrappedColumn;
