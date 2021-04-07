import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Design from './pages/Design';
import breakpoints from '../utils/breakpoints';

const Main = ({ darkMode, toggleTheme }) => (
  <>
    <Wrapper>
      <Navbar darkMode={darkMode} />
      <PageContent>
        <PageContentWrapper>
          <Routes>
            <Route path='/' element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path='blog' element={<BlogList darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path='blog/:blogLink' element={<Blog darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path='projects' element={<Projects darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path='projects/:projectLink' element={<Project darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path='design' element={<Design darkMode={darkMode} toggleTheme={toggleTheme} />} />
            {/* <Route element={<NotFound darkMode={darkMode} toggleTheme={toggleTheme} />} /> */}
          </Routes>
        </PageContentWrapper>
      </PageContent>
      <Footer darkMode={darkMode} />
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 20vw;
  position: relative;
  z-index: 0;

  ${breakpoints.landscape} {
    margin: 2em 15vw;
  }

  ${breakpoints.mobile} {
    margin: 1.2em;
  }
`;

const PageContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  width: 70%;

  padding: 1em;
  border-radius: 5px;
  transition: background-color 500ms ease-in-out, box-shadow 500ms ease-in-out;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
          box-shadow: ${({ theme }) => theme.boxShadow};
  ${breakpoints.landscape} {
    width: 100%;
  }

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

export default Main;
