import React, { useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faHeartBroken, faLock } from '@fortawesome/free-solid-svg-icons';
import Headline from './shared/Headline';
import BackButton from './shared/BackButton';
import { projects } from '../../assets/projects';
import {
  popIn,
  fadeIn,
  logoSlide,
  titleSlide,
} from '../../utils/keyframes';

const Project = ({ darkMode, toggleTheme }) => {
  const { projectLink } = useParams();
  const project = projects.find(p => p.projectLink === projectLink);
  const {
    title,
    image,
    description,
    info,
    moreInfo,
    site,
    github,
    tags,
    screenshots,
  } = project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Headline title='PROJECT' darkMode={darkMode} toggleTheme={toggleTheme} />
      <ProjectWrapper>
        <ProjectLogoAnimated image={image}/>
        <ProjectLogo image={image} />
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTitleAnimated>{title}</ProjectTitleAnimated>
        <LinksWrapper>
          {site
            ? <ProjectLink target='_blank' href={site} title='View Live Site' darkMode={darkMode}>
              <FontAwesomeIcon style={{ color: 'yellow' }} icon={faBolt} />&nbsp;Live Site
            </ProjectLink>
            : <PrivateLink title='This project is not Deployed' darkMode={darkMode}>
              <FontAwesomeIcon icon={faHeartBroken} />&nbsp;Not Deployed
            </PrivateLink>
          }
          {github
            ? <ProjectLink target='_blank' href={github} title='View on GitHub' darkMode={darkMode}>
              <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
            </ProjectLink>
            : <PrivateLink title='The GitHub repo for this project is Private' darkMode={darkMode}>
              <FontAwesomeIcon icon={faLock} />&nbsp;Private Repo
            </PrivateLink>
          }
        </LinksWrapper>
        <Description>{description}</Description>
        <ProjectPictures>
          <AliceCarousel autoPlay autoHeight autoPlayInterval={6000} mouseTracking infinite disableButtonsControls>
            {screenshots.map((ss, i) => (<Screenshot key={i} image={ss} />))}
          </AliceCarousel>
        </ProjectPictures>
        <InfoHeader></InfoHeader>
        <Info>{info}</Info>
        {moreInfo && <><br /><Info>{moreInfo}</Info></>}
        <Link to='/projects'>
          <BackButton>&#8592;&nbsp;Back to Projects</BackButton>
        </Link>
        <TagsHeader>Tags</TagsHeader>
        <Tags>{tags.map((tag, i) => (<Tag key={i}>{tag}</Tag>))}</Tags>
      </ProjectWrapper>
      <Outlet />
    </>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProjectLogo = styled.div`
  align-self: center;
  background: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 75px;
  height: 75px;
  margin-bottom: 0.5em;
  animation: ${popIn} 1s forwards;
`;

const ProjectLogoAnimated = styled(ProjectLogo)`
  position: absolute;
  animation: ${logoSlide} 1s forwards;
`;

const ProjectTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 0.8em;
  animation: ${popIn} 1s forwards;
`;

const ProjectTitleAnimated = styled(ProjectTitle)`
  position: absolute;
  animation: ${titleSlide} 1s forwards;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  animation: ${fadeIn} 1s forwards;
`;

const ProjectLink = styled.a`
  font-size: 0.9em;
  width: 120px;
  margin-bottom: 0.5em;
  text-align: center;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.color.text};
  padding: 2px 5px;
  transition: background-color 250ms;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)')};
  }
`;

const PrivateLink = styled(ProjectLink)`
  &:hover {
    background-color: rgba(255, 0, 0, 0.2);
  }
`;

const Description = styled.div`
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 150ms;
`;

const ProjectPictures = styled.div`
  align-self: center;
  opacity: 0;
  background-color: rgba(0,0,0,0.4);
  margin: 1em 0;
  width: 100%;
  height: 360px;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 300ms;
`;

const Screenshot = styled.div`
  width: 100%;
  height: 360px;

  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoHeader = styled.div`
  opacity: 0;
  margin-top: 2.5em;
  font-size: 1.2em;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 450ms;
`;

const Info = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 650ms;
`;

const TagsHeader = styled(InfoHeader)`
  animation-delay: 950ms;
  margin-top: 0.8em;
`;

const Tags = styled(Info)`
  display: flex;
  flex-wrap: wrap;
  animation-delay: 1100ms;
`;

const Tag = styled.div`
  text-decoration: underline;
  padding: 0.3em;
  padding-left: 0;
  margin-right: 0.5em;
  font-size: 0.8em;
  opacity: 0.9;
`;

export default Project;
