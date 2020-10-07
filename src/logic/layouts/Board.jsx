import React from 'react';
import styled from 'styled-components';

import style from '../../constants/style';

import StyledParagraph from '../../styled/elements/StyledParagraph';
import StyledH2 from '../../styled/elements/StyledH2';

import ManagementCard from './ManagementCard';

import hanna from '../../assets/hanna.jpg';
import bruno from '../../assets/bruno.jpg';
import mats from '../../assets/mats.jpg';
import trond from '../../assets/trond-dale.jpg';
import lars from '../../assets/lars-hallenius.jpg';

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${style.spaces.regular};

  ${style.media.laptop`
    width: calc(50% - (${style.spaces.tiny} * 2));
    justify-content: flex-start;
    align-items: start;
  `}
`;
const StyledBoardMembers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${style.media.laptop`
    justify-content: flex-start;
    & > *:nth-child(2) {
      margin: ${style.spaces.tiny} 0 ${style.spaces.tiny} 0;
    }
    & > *:nth-child(4) {
      margin: ${style.spaces.tiny} 0 ${style.spaces.tiny} 0;
    }
  `}

`;

const Board = () => (
  <StyledBoard>
    <StyledDesc>
      <StyledH2>Board and Senior Management</StyledH2>
      <StyledParagraph>
        We are a mix of nationalities, backgrounds
        and experiences, collectivley striving to
        democratize banking and finance solutions
        through digitalization. We believe technology
        will lead to fairer access to funding, lending
        and liquidity.
      </StyledParagraph>
    </StyledDesc>
    <StyledBoardMembers>
      <ManagementCard img={hanna} name="Hanna Raftell" title="CEO" />
      <ManagementCard img={bruno} name="Bruno Godefroy" title="CTO" />
      <ManagementCard img={trond} name="Trond Dale" title="Chairman of the Board" />
      <ManagementCard img={mats} name="Mats Berglund" title="Boardmember" />
      <ManagementCard img={lars} name="Lars Hallenius" title="Boardmember" />
    </StyledBoardMembers>
  </StyledBoard>
);

export default Board;
