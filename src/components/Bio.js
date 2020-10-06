import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
import AboutText from './AboutText';
import ProfilePictureBg from './ProfilePictureBg';

const Bio = () => (
  <BioContainer>
    <PicturePositioner>
      <ProfilePicture />
    </PicturePositioner>
    <ProfilePictureBg />
    <HeaderPositioner>
      <Header text={'Ethan Bonsignori\'s Portfolfio'}/>
    </HeaderPositioner>
    <AboutTextPositioner>
      <AboutText />
    </AboutTextPositioner>
  </BioContainer>
);

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const PicturePositioner = styled.div`
  position: relative;
  z-index: 100;
`;

const HeaderPositioner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

const AboutTextPositioner = styled.div`
  margin-top: 10rem;
  padding: 2rem;
`;

export default Bio;
