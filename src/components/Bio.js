import React from 'react';
import styled from 'styled-components';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
import AboutText from './AboutText';
import ProfilePictureBg from './ProfilePictureBg';
import ContactButtons from './ContactButton';
import { breakpoints } from '../utils/styleUtils';

const Bio = () => (
  <>
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
    <ContactButtonsContainer>
      <ContactButtons />
    </ContactButtonsContainer>
  </>
);

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  ${breakpoints.mobile} {
    flex-direction: column;
  }
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
  margin-top: 6rem;
  padding: 2rem;
`;

const ContactButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Bio;
