import React from 'react';
import styled from 'styled-components';
import Headline from '../PageHeadline';
// import breakpoints from '../../utils/breakpoints';

const Projects = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='PROJECTS' darkMode={darkMode} toggleTheme={toggleTheme} />
    <ProjectsWrapper>
      <Card>
        <CardContent>
        Actively being worked on right now. Check back later, thanks.
        </CardContent>

      </Card>
    </ProjectsWrapper>
  </>
);

const ProjectsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  position: relative;
  width: 50%;

  &::before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`;

const CardContent = styled.div`
  /* float: left; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Projects;
