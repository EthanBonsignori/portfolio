import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
import AboutText from './AboutText';

const Bio = () => (
  <BioContainer>
    <PicturePositioner>
      <ProfilePicture />
    </PicturePositioner>
    <HeaderPositioner>
      <Header text={'Ethan Bonsignori\'s Portfolfio'}/>
    </HeaderPositioner>
    <AboutText />
  </BioContainer>
);

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const PicturePositioner = styled.div`
  position: relative;
`;

const HeaderPositioner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export default Bio;
