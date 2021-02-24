import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Headline from '../PageHeadline';
import { projects } from '../../assets/projects';

const Project = ({ darkMode, toggleTheme }) => {
  const { projectLink } = useParams();
  const project = projects.find(p => p.projectLink === projectLink);

  console.log(project);
  return (
    <>
      <Headline title={'PROJECT'} darkMode={darkMode} toggleTheme={toggleTheme} />
      <ProjectWrapper>
        <ProjectLogo image={project.image}/>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectPictures></ProjectPictures>
        <ProjectInfo></ProjectInfo>
      </ProjectWrapper>
      <Outlet />
    </>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectLogo = styled.div`
  background-color: rgba(0,0,0,0.4);
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 0.5em;
`;

const ProjectTitle = styled.div`
  background-color: rgba(0,0,0,0.4);
  text-align: center;
  width: 100%;
  font-size: 1.5em;
`;

const ProjectPictures = styled.div`
  background-color: rgba(0,0,0,0.4);
  margin: 1em 0;
  width: 100%;
  height: 340px;
`;

const ProjectInfo = styled.div`
  background-color: red;
  width: 100%;
`;

export default Project;
