import React from 'react';
import styled from 'styled-components';
import Headline from '../PageHeadline';
import profilePicture from '../../assets/profile_pic.jpg';
import { breakpoints } from '../../utils/styleUtils';

const About = () => (
  <>
    <Headline>ABOUT ME</Headline>
    <AboutSection>
      <ProfilePicture />
      <span>
        <Hi>Hi,</Hi><br />
        Welcome to my portfolio site!
        I&#39;m a mid-level web developer based out of Atlanta, GA.
        I decided to make a career change in 2019 and attend a 6-month Full-Stack Bootcamp offered
        by The Georgia Institute of Technology. I quickly fell in love with the design and
        problem solving that comes with web development and I haven&#39;t looked back since.
        I enjoy creating projects from scratch using software such as React.js, Next.js, and Node.js.
        Here you can find some of my recent projects as well as some ways to get in touch.
        <br />
        <br />
        <i>Thanks for stopping by!</i>
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

const Hi = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.neonBlue};
`;

export default About;