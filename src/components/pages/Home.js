import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Headline from './shared/Headline';
import ActionButton from './shared/ActionButton';
import ContactForm from '../ContactForm';
import MarkdownRenderer from '../MarkdownRenderer';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';
import aboutMarkdown from '../../assets/about.md';
import profilePicture from '../../assets/images/profile_pic.jpg';

const Home = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='HOME' darkMode={darkMode} toggleTheme={toggleTheme} />
    <AboutSection>
      <ProfilePicture />
      <div>
        <Intro darkMode={darkMode}>
          <Cursive>Hi, I&#39;m&nbsp;</Cursive>
          <Name>Ethan Bonsignori.</Name>
        </Intro>
        <AboutText>
          <MarkdownRenderer content={aboutMarkdown} />
        </AboutText>
        <ButtonsContainer>
          <Link to='/projects' className='__main'>
            <MainButton title='My Projects' darkMode={darkMode}>Check Out My Projects</MainButton>
          </Link>
          <Link to='/blog' className='__sub'>
            <SubButton title='My Blog'>Read My Blog</SubButton>
          </Link>
        </ButtonsContainer>
      </div>
    </AboutSection>
    {/* <Section>
      <SectionHeadline>
        <Cursive>Recent Projects</Cursive>
        <Link to='projects'>View All Projects →</Link>
      </SectionHeadline>
      <ProjectsWrapper>

      </ProjectsWrapper>
    </Section> */}
    <ContactSection>
      <FormWrapper>
        <Cursive>~ Get In Touch <FontAwesomeIcon icon={faPaperPlane} /></Cursive>
        <ContactForm darkMode={darkMode} />
      </FormWrapper>
      <ContactReasons>
        <Cursive style={{ fontSize: '1em' }}>
          <Arrow>-&gt;</Arrow> Email me about
        </Cursive>
        <BulletList>
          <li>Custom Websites</li>
          <li>Graphic Design</li>
          <li>Questions</li>
          <li>...to say Hi!</li>
        </BulletList>
      </ContactReasons>
    </ContactSection>
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

const ContactSection = styled(AboutSection)`
  margin-top: 5em;
  animation-delay: 500ms;
`;

// const SectionHeadline = styled.div`
//   display: flex;
//   align-items: center;

//   a {
//     margin-left: 1em;
//   }

//   ${breakpoints.mobile} {
//     flex-direction: column;
//   }
// `;

// const ProjectsWrapper = styled.div`
//   display: flex;

// `;

const FormWrapper = styled.div`
  width: 70%;
  position: relative;
  z-index: 100;

  ${breakpoints.mobile} {
    margin-left: 0;
    width: 100%;
  }
`;

const ContactReasons = styled.div`
  width: 30%;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.mobile} {
    width: 100%;
    margin-top: 1em;
    margin-left: 2.5em;
    align-items: baseline;
  }
`;

const BulletList = styled.ul`
  list-style-type: square;
    
  li::marker {
    transition: color 500ms ease-in-out;
    color: ${({ theme }) => theme.color.main};
    border-radius: 0px;
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
  margin-bottom: 1em;

  ${breakpoints.mobile} {
    margin-top: 0.5em;
    width: 100%;
    text-align: center;
  }
`;
const AboutText = styled.div`
  margin-bottom: 2em;
  
  a { 
    text-decoration-color: ${({ theme }) => theme.color.accent};
  }
`;

const Cursive = styled.span`
  position: relative;
  font-family: 'Nothing You Could Do', cursive;
  font-size: 1.5em;
`;

const Arrow = styled.div`
  position: absolute;
  font-family: 'Nothing You Could Do', cursive;
  color: ${({ theme }) => theme.color.main};
  font-size: 2em;
  left: -35px;
  top: -10px;
  z-index: 10;
`;

const Name = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.color.main};
  transition: text-decoration-color 500ms ease;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .__main {
    width: 50%;
    
    ${breakpoints.landscape} {
      width: 60%;
    }

    ${breakpoints.mobile} {
      width: 50%;
    }
  }

  .__sub {
    width: 30%;
    
    ${breakpoints.landscape} {
      width: 37%;
    }

    ${breakpoints.mobile} {
      width: 40%;
    }
  }
`;

const MainButton = styled(ActionButton)`
  width: 100%;
`;

const SubButton = styled(ActionButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.activeTab};
  box-shadow: none;
  color: ${({ theme }) => theme.color.text};
  
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export default Home;
