import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const projectsArr = [
  {
    name: 'Contract Bridge',
    imgUrl: 'https://github.com/EthanBonsignori/portfolio/blob/master/src/assets/bridge_ss.png?raw=true',
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
      An Electron.js application to keep track of and compare any two sets of data you would like to measure.
      Completely customizeable display and UI to suit your data tracking needs.
      View added data in graph form via Graph.js by day, week, or month. Built with React. 
    `,
  },
  {
    name: 'MenYou',
    imgUrl: 'https://github.com/EthanBonsignori/MenYou/raw/master/assets/images/MenYou-image.png',
    link: 'https://github.com/EthanBonsignori/MenYou',
    about: `
      A Recipe search database and API created as a group project in my Bootcamp. 
      Firebase authentication and search caching via Firebase. Each new unique search is cached in a Firestore
      for quicker subsquent load times and less hits to the Recipe API. Add all the ingredients from a
      searched recipe to an online shopping cart of a grocer near you via the Whisk API.
    `,
  },
];

const Projects = () => (
  <>
    <ProjectsContainer>
      <Header text='Projects' />
      <ProjectsGrid>
        {projectsArr.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectLink href={project.link} target='_blank' rel="noopener noreferrer">View on GitHub</ProjectLink>
            <ProjectDescription>{project.about}</ProjectDescription>
            <ProjectImageContainer>
              <ProjectImage src={project.imgUrl} alt={`${project.name} Screenshot`}/>
            </ProjectImageContainer>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  </>
);

const ProjectsContainer = styled.div`
  margin-top: 3rem;
`;

const ProjectsGrid = styled.div`
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 4px solid #FF6B6B;
  justify-content: space-between;
  background: #292F36;
`;

const ProjectTitle = styled.span`
  font-family: Grenze Gotisch;
  font-size:  clamp(2rem, 3vw, 4rem);
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

const ProjectDescription = styled.p`
  font-size:  clamp(1rem, 1.5vw, 1.5rem);
  color: #fff
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
