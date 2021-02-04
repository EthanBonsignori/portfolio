import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile_pic.jpg';

const ProfilePicture = () => (
  <>
    <HexagonContainer>
      <HexagonInner1>
        <HexagonInner2 />
      </HexagonInner1>
    </HexagonContainer>
  </>
);

const HexagonContainer = styled.div`
  width: 400px;
  height: 800px;
  overflow: hidden;
  visibility: hidden;
  -webkit-transform: rotate(120deg);
     -moz-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
       -o-transform: rotate(120deg);
          transform: rotate(120deg);
`;
const HexagonInner1 = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: rotate(-60deg);
     -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
       -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
`;

const HexagonInner2 = styled.div`
  width: 100%;
  height: 100%;
  visibility: visible;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${profilePic});
  -webkit-transform: rotate(-60deg);
     -moz-transform: rotate(-60deg);
      -ms-transform: rotate(-60deg);
       -o-transform: rotate(-60deg);
          transform: rotate(-60deg);
`;

export default ProfilePicture;
