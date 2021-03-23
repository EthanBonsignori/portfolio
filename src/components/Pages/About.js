import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Headline from './shared/Headline';
import profilePicture from '../../assets/images/profile_pic.jpg';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';

const About = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='ABOUT ME' darkMode={darkMode} toggleTheme={toggleTheme} />
    <AboutSection>
      <ProfilePicture />
      <div>
        <Cursive darkMode={darkMode}>Hi, I&#39;m Ethan Bonsignori.</Cursive>
        I&#39;m a <b>Web Developer</b> based out of Atlanta, GA. I&#39;ve been developing software
        for 2 years following a 6-month Full-Stack Boot camp offered
        by Georgia Tech in 2019. I quickly fell in love with the design and
        problem solving that comes with web development and haven&#39;t looked back since.
        I enjoy working with React.js, Next.js, and Node.js.
        Here you can&#32;<InlineLink title='Projects' to='/projects'>check out my recent work</InlineLink>,&nbsp;
        <InlineLink title='Blog' to='/blog'>read some of my thoughts</InlineLink>, and&nbsp;
        <InlineLink title='Contact Me' to='/contact'>find some ways to get in touch.</InlineLink>
        <br />
        <br />
        <Thanks>Thanks for stopping by!</Thanks>
      </div>
    </AboutSection>
  </>
);

const AboutSection = styled.section`
  display: flex;
  flex-direction: row;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;

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

const Cursive = styled.div`
  font-size: 1.5em;
  color: ${({ darkMode, theme }) => (darkMode ? theme.color.neonBlue : theme.color.salmon)};
  font-family: 'Nothing You Could Do', cursive;

  ${breakpoints.mobile} {
    margin-top: 1em;
    width: 100%;
    text-align: center;
  }
`;

const Thanks = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.color.text};
  font-family: 'Piazzolla', sans-serif;

  ${breakpoints.mobile} {
    width: 100%;
    text-align: center;
  }
`;

const InlineLink = styled(Link)``;

export default About;
