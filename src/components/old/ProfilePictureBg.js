import React from 'react';
import styled from 'styled-components';

const ProfilePictureBg = () => (
  <HexagonBorderContainer>
    <HexagonBorder1>
      <HexagonBorder2>
        <HexagonBorder3 />
      </HexagonBorder2>
    </HexagonBorder1>
  </HexagonBorderContainer>
);

const HexagonBorderContainer = styled.div`
  position: absolute;
  top: 0;
`;

const HexagonBorder1 = styled.div`
  width: 400px;
  height: 810px;
  overflow: hidden;
  visibility: hidden;
  -webkit-transform: rotate(120deg);
     -moz-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
       -o-transform: rotate(120deg);
          transform: rotate(120deg);  
  
`;

const HexagonBorder2 = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: rotate(-60deg);
     -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
       -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
`;
const HexagonBorder3 = styled.div`
  width: 100%;
  height: 100%;
  visibility: visible;
  background-position: 50%;
  background: #FF6B6B;
  -webkit-transform: rotate(-60deg);
     -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
       -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
`;

export default ProfilePictureBg;
