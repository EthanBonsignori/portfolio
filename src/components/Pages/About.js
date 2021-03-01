import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Headline from './shared/Headline';
import profilePicture from '../../assets/images/profile_pic.jpg';
import breakpoints from '../../utils/breakpoints';

const About = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='ABOUT ME' darkMode={darkMode} toggleTheme={toggleTheme} />
    <AboutSection>
      <ProfilePicture />
      <span>
        <Cursive darkMode={darkMode}>Hi,</Cursive><br />
        Welcome to my portfolio site!
        I&#39;m a web developer, based out of Atlanta, GA. I&#39;ve been developing software
        for 2 years since I attended a 6-month Full-Stack Bootcamp offered
        by The Georgia Institute of Technology in 2019. I quickly fell in love with the design and
        problem solving that comes with web development and haven&#39;t looked back since.
        I enjoy creating projects from scratch using React.js, Next.js, and Node.js.
        Here you can&#32;<InlineLink title='Projects' to='/projects'>check out my recent work</InlineLink>,&nbsp;
        <InlineLink title='Blog' to='/blog'>read some of my thoughts</InlineLink>, and&nbsp;
        <InlineLink title='Contact Me' to='/contact'>find some ways to get in touch.</InlineLink>
        <br />
        <br />
        <i>Thanks for stopping by,</i>
        <br />
        <Cursive darkMode={darkMode}>Ethan</Cursive>
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
  margin-top: 2.4em;
  align-self: baseline;

  ${breakpoints.mobile} {
    margin: 0;
    align-self: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Cursive = styled.span`
  font-size: 1.5em;
  color: ${({ darkMode, theme }) => (darkMode ? theme.color.neonBlue : theme.color.salmon)};
  font-family: 'Nothing You Could Do', cursive;
  padding-left: 5px;
`;

const InlineLink = styled(Link)`

`;

export default About;
