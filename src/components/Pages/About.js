import React from 'react';
import styled from 'styled-components';
import Headline from '../PageHeadline';
import profilePicture from '../../assets/profile_pic.jpg';
import { breakpoints } from '../../utils/styleUtils';

const About = ({ darkmode, toggleTheme }) => (
  <>
    <Headline title='ABOUT ME' darkmode={darkmode} toggleTheme={toggleTheme} />
    <AboutSection>
      <ProfilePicture />
      <span>
        <Cursive>Hi,</Cursive><br />
        Welcome to my portfolio site!
        I&#39;m a mid-level web developer based out of Atlanta, GA.
        I decided to make a career change in 2019 and attend a 6-month Full-Stack Bootcamp offered
        by The Georgia Institute of Technology. I quickly fell in love with the design and
        problem solving that comes with web development and haven&#39;t looked back since.
        I enjoy creating projects from scratch using React.js, Next.js, and Node.js.
        Here you can find some of my projects, read some of my thoughts,
         and find some ways to get in touch.
        <br />
        <br />
        <i>Thanks for stopping by,</i>
        <br />
        <Cursive>Ethan</Cursive>
      </span>
    </AboutSection>
  </>
);

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;

  ${breakpoints.mobile} {
    flex-direction: column;
  }
`;

const ProfilePicture = styled.div`
  background-image: url(${profilePicture});
  background-size: cover;
  min-width: 175px;
  height: 175px;
  margin-right: 1em;
  align-self: center;

  ${breakpoints.mobile} {
    margin: 0;
    margin-top: 1em;
    align-self: none;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Cursive = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.neonBlue};
  font-family: 'Nothing You Could Do', cursive;
  padding-left: 5px;
`;

export default About;
