import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Headline from './shared/Headline';
import ActionButton from './shared/ActionButton';
import profilePicture from '../../assets/images/profile_pic.jpg';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';

const About = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='ABOUT ME' darkMode={darkMode} toggleTheme={toggleTheme} />
    <AboutSection>
      <ProfilePicture />
      <div>
        <Intro darkMode={darkMode}>
          <Cursive>Hi, I&#39;m&nbsp;</Cursive>
          <Name>Ethan Bonsignori.</Name>
        </Intro>
        I&#39;m a self-taught <b>Web Developer</b> based out of Atlanta, GA.
        I&#39;ve been creating apps and websites for 2 years and enjoy learning new technologies and frameworks.
        I love both the design and problem solving aspects of web development. My unique background of graphic design
        and IT mesh perfectly for the job. Currently I am building apps with JavaScript frameworks like <b>React</b> and
        <b>Node.js</b> and writing technical guides over <Link to='/blog' title='My Blog'>on my blog</Link>.
        <i> Thanks for stopping by!</i>
        <ButtonsContainer>
          <Link to='/projects'>
            <ActionButton title='My Projects' darkMode={darkMode}>Check Out My Projects</ActionButton>
          </Link>
          <SubButtonsContainer>
            <Link to='/blog'>
              <SubButton title='My Blog'>Read My Blog</SubButton>
            </Link>
            <Link to='/contact'>
              <SubButton title='Contact Me'>Contact Me</SubButton>
            </Link>
          </SubButtonsContainer>
        </ButtonsContainer>
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
  min-width: 166px;
  height: 175px;
  margin-top: 0.5em;
  margin-right: 1em;
  align-self: baseline;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: box-shadow 500ms ease-in-out;

  ${breakpoints.mobile} {
    margin: 0;
    align-self: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Intro = styled.div`
  font-size: 1.5em;

  ${breakpoints.mobile} {
    margin-top: 0.5em;
    width: 100%;
    text-align: center;
  }
`;
const Cursive = styled.span`
  font-family: 'Nothing You Could Do', cursive;
`;
const Name = styled.span`
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;

  ${breakpoints.mobile} {
    flex-direction: column;
  }
`;

const SubButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubButton = styled(ActionButton)`
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.activeTab};
  margin: 0 0.2em;
  box-shadow: none;

  ${breakpoints.mobile} {
    margin: 1em 0.4em;
    padding: 3px 9px;
  }
`;

export default About;
