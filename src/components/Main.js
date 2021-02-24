import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import breakpoints from '../utils/breakpoints';

const Main = ({ darkMode, toggleTheme }) => (
  <>
    <Navbar />
    <PageContent>
      <PageContentWrapper>
        <Routes>
          <Route path='/' element={<About darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path='blog'element={<Blog darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path='projects' element={<Projects darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path='projects/:projectLink' element={<Project darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route path='contact' element={<Contact darkMode={darkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </PageContentWrapper>
    </PageContent>
  </>
);

const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 20vw;
  position: relative;
  z-index: 0;

  ${breakpoints.mobile} {
    margin: 1.2em;
  }
`;

const PageContentWrapper = styled.div`
  width: 70%;
  ${breakpoints.mobile} {
    width: 100%;
  }
`;

export default Main;
