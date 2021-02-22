import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import Headline from '../PageHeadline';
import breakpoints from '../../utils/breakpoints';
import ebridgeLogo from '../../assets/ebridge-logo.png';
import dailychartLogo from '../../assets/dailychart-logo.png';
import menyouLogo from '../../assets/menyou-logo.png';

const tags = [
  'all',
  'javascript',
  'react',
  'redux',
  'next.js',
  'styled-components',
  'electron',
  'express',
  'postgreSQL',
  'firebase',
];

const projects = [
  {
    title: 'eBridge Club',
    active: true,
    image: ebridgeLogo,
    description: `A user-friendly bridge website for ex-Pogo.com
      players to play free online multiplayer contract bridge.`,
    site: 'https://ebridge.club',
    github: '',
    tags: ['javascript', 'react', 'redux', 'next.js', 'styled-components', 'express', 'postgreSQL'],
  },
  {
    title: 'Daily Chart',
    active: false,
    image: dailychartLogo,
    description: 'Track any daily data with this fully customizable electron chart app.',
    site: '',
    github: 'https://github.com/EthanBonsignori/daily-chart',
    tags: ['javascript', 'react', 'styled-components', 'electron'],
  },
  {
    title: 'MenYou',
    active: false,
    image: menyouLogo,
    description: `
      A recipe database that allows users to search recipes
      and add ingredients to a local grocer's shopping cart via the Whisk API.`,
    info: `
      This was a group class project that I and a classmate completed just a month into our coding bootcamp.
      The basic requirement for the project was to utilize an API in some way. We came up with the idea to
      create a recipe search and storage
      It features user authentication through firebase, uses the Firestore database
      to cache searches and save user-recipes.`,
    site: 'ethanbonsignori.github.io/menyou/',
    github: 'https://github.com/EthanBonsignori/MenYou',
    tags: ['javascript', 'firebase'],
  },
];

const Projects = ({ darkMode, toggleTheme }) => {
  const [activeTags, setActiveTags] = useState(tags);

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
        <ProjectImage image={p.image}/>
        <ProjectCardContent>
          <ProjectTitle>
            {p.title}
            {p.active ? <ProjectActive>In Development</ProjectActive> : null}
          </ProjectTitle>
          <ProjectDescription>
            {p.description}
          </ProjectDescription>
          <ProjectButtonsWrapper>
            <ProjectButton>View More</ProjectButton>
            <ProjectLinksWrapper>
              {p.site
                ? <ProjectLink href={p.site} target='_blank' title='View Live Site'>
                  <FontAwesomeIcon style={{ color: 'yellow' }} icon={faBolt} />&#32;Live
                </ProjectLink>
                : null}
              {p.github
                ? <ProjectLink href={p.github} target='_blank' title='View on GitHub'>
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
  font-size: 1.2em;
`;

const ProjectActive = styled.span`
  font-size: 0.6em;
  font-style: italic;
  color: green;
  margin-left: 1em;
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
    width: 75px;
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
  border: 1px solid white;
  width:  90px;
  text-align: center;
  font-size: 0.8em;
  transition: background-color 250ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  ${breakpoints.mobile} {
    width: 65px;
    margin: 0;
    margin-left: 3px;
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
