import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import Navigation from './Navigation';

export default () => (
  <ContentWrapper>
    <BioContainer>
      <Navigation />
      <Spacer />
      <ProfilePictureContainer>
        <ProfilePicture />
      </ProfilePictureContainer>
      <Greeting>Hello,</Greeting>
    </BioContainer>
  </ContentWrapper>
)

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const BioContainer = styled.div`
  position: relative;
  z-index: -100;
  width: 65vw;
  background: #292F36;
  border-bottom: 4px solid #FF6B6B;
`

const Spacer = styled.div`
  height: 65vh;
`

const ProfilePictureContainer = styled.div`
  position: absolute;
  z-index: -1;
  left: -200px;
  top: -15px;
`

const Greeting = styled.div`
  position: absolute;
  top: 50px;
  left: 250px;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 80px;
  background-color: #70D7D0;

  font-family: Grenze Gotisch;
  font-size: 80px;
  color: #FF6B6B;

  &::before {
    content: '';
    position: absolute;
    right: 10px; bottom: -10px;
    z-index: -1;
    background: #FF6B6B;
    width: 100%;
    height: 100%;
  }
`
