import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const projectsArr = [
  {
    name: 'Contract Bridge',
    imgUrl: '',
    link: 'https://github.com/EthanBonsignori/bridge-web',
    about: `
      Online Contract Bridge platform WIP. Uses Next.js for React server-side-rendering.
      Redux and web sockets used to managing game state. CSS-in-JS through Styled-components.
      Currently adding integration testing via Mocha and Chai for existing User auth routes.
    `,
  },
  {
    name: 'Daily Chart',
    imgUrl: 'https://github.com/EthanBonsignori/daily-chart/raw/master/static/images/chart-screenshot.png',
    link: 'https://github.com/EthanBonsignori/daily-chart',
    about: `
      An Electron.js application to keep track of and compare any datasets you would like to measure.
      View added data in graph form via Graph.js by day, week, or month. Built with React. 
    `,
  },
  {
    name: 'MenYou',
    imgUrl: 'https://github.com/EthanBonsignori/MenYou/raw/master/assets/images/MenYou-image.png',
    link: 'https://github.com/EthanBonsignori/MenYou',
    about: `
      A Recipe search database and API created as a group project in my Bootcamp. 
      Firebase authentication and search caching via Firestore. Add all
      ingredients from a searched recipe to an online shopping cart of a grocer
      near you via the Whisk API.
    `,
  },
];

const Projects = () => (
  <>
    <Header text='Projects' />
    <ProjectsContainer>
      {projectsArr.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectLink href={project.link} target='_blank' rel="noopener noreferrer">View on GitHub</ProjectLink>
          <p>{project.about}</p>
          <ProjectImageContainer>
            <ProjectImage src={project.imgUrl} alt={`${project.name} Screenshot`}/>
          </ProjectImageContainer>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  </>
);

const ProjectsContainer = styled.div`
  height: auto;
  display: grid;
  grid-gap: 5rem;
  margin: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 10px;
  justify-content: space-between;
  background: #292F36;
`;

const ProjectTitle = styled.span`
  font-family: Grenze Gotisch;
  font-size: 3rem;
  content: ${props => props.text};
  color: #fff;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #70D7D0;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectImageContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectImage = styled.img`
  width: 100%;
  width: 100%;
  object-fit: contain;
`;

export default Projects;
