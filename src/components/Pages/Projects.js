import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import useWindowDimensions from '../../hooks/useWindowDimeonsions';
import { tags, projects } from '../../assets/projects';
import Headline from '../PageHeadline';
import { pulse } from '../../utils/keyframes';
import breakpoints from '../../utils/breakpoints';

const Projects = ({ darkMode, toggleTheme }) => {
  const [activeTags, setActiveTags] = useState(tags);
  const { width } = useWindowDimensions();

  const handleTag = evt => {
    const { title } = evt.target;
    if (title === 'all') {
      // toggle between all active & all inactive
      if (activeTags === tags) {
        return setActiveTags([]);
      }
      return setActiveTags(tags);
    }
    if (activeTags.includes(title)) {
      // remove tag if already active
      return setActiveTags(activeTags.filter(i => i !== title));
    }
    // add tag
    return setActiveTags([...activeTags, title]);
  };

  const getFilteredProjectsJSX = () => {
    // filter projects by if their tags are in activeTags arr
    const filteredProjects = projects.filter(p => p.tags.some(tag => activeTags.includes(tag)));

    if (filteredProjects.length === 0) {
      return <ProjectCard>There doesn&apos;t seem to be anything here. Try changing the filters.</ProjectCard>;
    }
    // map filtered projects to jsx
    return filteredProjects.map((p, i) => (
      <ProjectCard key={i}>
        {width > 768 ? <ProjectImage image={p.image}/> : null}
        <ProjectCardContent>
          <ProjectTitle>
            {width <= 768 ? <ProjectImage image={p.image}/> : null}
            {p.title}
            {p.active ? <ProjectActive title='In Active Development'/> : null}
          </ProjectTitle>
          <ProjectDescription>
            {p.description}
          </ProjectDescription>
          <ProjectButtonsWrapper>
            <Link to={p.projectLink}>
              <ProjectButton title='Project Page'>View More</ProjectButton>
            </Link>
            <ProjectLinksWrapper>
              {p.site
                ? <ProjectLink href={p.site} target='_blank' title='View Live Site' darkMode={darkMode}>
                  <FontAwesomeIcon style={{ color: 'yellow' }} icon={faBolt} />&#32;Live
                </ProjectLink>
                : null}
              {p.github
                ? <ProjectLink href={p.github} target='_blank' title='View on GitHub' darkMode={darkMode}>
                  <FontAwesomeIcon icon={faGithub} />&#32;GitHub
                </ProjectLink>
                : null
              }
            </ProjectLinksWrapper>
          </ProjectButtonsWrapper>
          <ProjectTags>
            {p.tags.map((tag, j) => <ProjectTag key={j}>{tag}</ProjectTag>)}
          </ProjectTags>
        </ProjectCardContent>
      </ProjectCard>
    ));
  };

  const tagsJSX = tags.map((tag, i) => (
    <Tag
      key={i}
      title={tag}
      active={activeTags.includes(tag)}
      onClick={handleTag}
    >
      {tag}
    </Tag>
  ));

  return (
    <>
      <Headline title='PROJECTS' darkMode={darkMode} toggleTheme={toggleTheme} />
      <ProjectsWrapper>
        <TagsWrapper>
          {tagsJSX}
        </TagsWrapper>
        {getFilteredProjectsJSX()}
      </ProjectsWrapper>
      <Outlet />
    </>
  );
};

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1em;
`;

const Tag = styled.button`
  cursor: pointer;
  outline: none;
  margin: 0.2em 0.3em;
  border: ${({ active, theme }) => (active ? `1px solid ${theme.color.accent}` : '1px solid transparent')};
  background-color: ${({ theme }) => theme.color.activeTab};
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  background-color: ${({ theme }) => theme.color.cardBackground};
`;

const ProjectTitle = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1.2em;
`;

const ProjectActive = styled.div`
  position: absolute;
  top: 10px; right: 10px;
  width: 8px;
  height: 8px;
  background-color: green;
  border-radius: 50%;

  box-shadow: 0px 0px 1px 1px transparent;
  animation: ${pulse} 2s infinite;

  ${breakpoints.mobile} {
    top: 20px;
  }
`;

const ProjectImage = styled.div`
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 75px;
  min-width: 75px;
  height: 75px;
  margin-right: 0.5em;
  margin-left: 0.2em;

  ${breakpoints.mobile} {
    width: 50px;
    min-width: 50px;
    height: 50px;
  }
`;

const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectDescription = styled.span`
  opacity: 0.8;
`;

const ProjectButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1em;
`;

const ProjectButton = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.neonBlue};
  outline: none;
  width: 100px;
  font-size: 0.8em;

  transition: background-color 250ms;
  &:hover {
    background-color: rgba(112, 215, 208, 0.3);
  }

  ${breakpoints.mobile} {
    width: 90px;
  }
`;

const ProjectLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProjectLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin-right: 1em;
  border: 1px solid ${({ theme }) => theme.color.text};
  width:  90px;
  text-align: center;
  font-size: 0.8em;
  transition: background-color 250ms;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)')};
  }

  ${breakpoints.mobile} {
    width: 75px;
    margin: 0;
    margin-left: 6px;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.5em;
`;

const ProjectTag = styled.div`
  text-decoration: underline;
  padding: 0.3em;
  padding-left: 0;
  margin-right: 0.5em;
  font-size: 0.8em;
  opacity: 0.9;
`;

export default Projects;
