import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import aboutMarkdown from '../../assets/about.md';
import profilePicture from '../../assets/images/profile_pic.jpg';
import breakpoints from '../../utils/breakpoints';
import { latestBlogPost, latestProject } from '../../utils/getLatestContent';
import { fadeIn } from '../../utils/keyframes';
import ContactForm from '../ContactForm';
import MarkdownRenderer from '../MarkdownRenderer';
import ActionButton from './shared/ActionButton';
import Headline from './shared/Headline';

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
            <MainButton title='My Projects' darkMode={darkMode}>
              Check Out My Projects
            </MainButton>
          </Link>
          <Link to='/blog' className='__sub'>
            <SubButton title='My Blog'>Read My Blog</SubButton>
          </Link>
        </ButtonsContainer>
      </div>
    </AboutSection>

    <RecentSection>
      <SubSection>
        <Cursive>Recent Project</Cursive>
        <ContentLink
          to={`projects/${latestProject.projectLink}`}
          title='View Project'>
          <ContentCard>
            <CardImage image={latestProject.image} />
            <CardInnerContent>
              <CardTitle>
                <b>{latestProject.title}</b> - {latestProject.description}
              </CardTitle>
              <CardButtonWrapper>
                <div></div>
                <CardActionButton title='View Project'>
                  <FontAwesomeIcon icon={faExpandAlt} size='lg' />
                </CardActionButton>
              </CardButtonWrapper>
            </CardInnerContent>
          </ContentCard>
        </ContentLink>
        <Link to='projects'>View All Projects →</Link>
      </SubSection>

      <SubSection>
        <Cursive>Latest Blog Post</Cursive>
        <ContentLink to={`blog/${latestBlogPost.blogLink}`} title='View Post'>
          <ContentCard>
            <CardImage image={latestBlogPost.splash} />
            <CardInnerContent>
              <CardTitle>
                <b>{latestBlogPost.title}</b>
              </CardTitle>
              <CardButtonWrapper>
                {latestBlogPost.createdAt}
                <CardActionButton title='View Post'>
                  <FontAwesomeIcon icon={faExpandAlt} size='lg' />
                </CardActionButton>
              </CardButtonWrapper>
            </CardInnerContent>
          </ContentCard>
        </ContentLink>
        <Link to='blog'>View All Blog Posts →</Link>
      </SubSection>
    </RecentSection>

    <ContactSection>
      <FormWrapper>
        <Cursive>
          ~ Get In Touch <FontAwesomeIcon icon={faPaperPlane} />
        </Cursive>
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

const RecentSection = styled(AboutSection)`
  margin-top: 5em;
  animation-delay: 300ms;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${breakpoints.mobile} {
    margin-top: 2em;
    flex-direction: column;
  }
`;

const ContactSection = styled(AboutSection)`
  margin-top: 5em;
  animation-delay: 500ms;
  padding: 0 2em;

  ${breakpoints.mobile} {
    padding: 0 1em;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  ${breakpoints.mobile} {
    width: 100%;
    margin-top: 3em;
  }
`;

const ContentLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  margin-bottom: 1.5em;
  margin-top: 0.5em;

  ${breakpoints.mobile} {
    margin-bottom: 1em;
  }
`;

const ContentCard = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.activeTab};
  border-radius: 6px;
  min-height: 120px;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.activeTab}, rgba(0, 0, 0, 0))`};
  transition: border 500ms ease-in-out;
  display: flex;
  flex-direction: row;
`;

const CardImage = styled.div`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 25%;

  ${breakpoints.mobile} {
    position: absolute;
    z-index: 99;
    width: 50%;
    opacity: 0.3;
  }
`;

const CardInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 66.666%;

  ${breakpoints.mobile} {
    width: 100%;
    z-index: 100;
  }
`;

const CardTitle = styled.div`
  padding: 5px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${breakpoints.mobile} {
    text-align: center;
  }
`;

const CardButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 5px;
  position: 'relative';
  min-height: 30px;

  ${breakpoints.mobile} {
    padding: 10px 1em;
  }
`;

const CardActionButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  color: ${({ theme }) => theme.color.main};
  position: absolute;
  right: 0;
`;

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
  justify-content: left;

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
  color: ${({ theme }) => theme.color.text};
`;

const SubButton = styled(ActionButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.activeTab};
  box-shadow: none;
  color: ${({ theme }) => theme.color.text};
  margin-left: 1em;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export default Home;
