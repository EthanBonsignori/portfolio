import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';
import Footer from './Footer';
import Navbar from './Navbar';
import Blog from './pages/Blog';
import PageContentWrapper from './pages/shared/PageContentWrapper';
import BlogList from './pages/BlogList';
import Design from './pages/Design';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';

export default function Main({ darkMode, toggleTheme }) {
  const pageContentRef = useRef(null);
  const [pageContentNode, setPageContentNode] = useState(null);

  useEffect(() => {
    if (pageContentRef?.current) {
      setPageContentNode(pageContentRef.current);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Navbar darkMode={darkMode} />
        <PageContent ref={pageContentRef}>
          <PageContentWrapper>
            <Routes>
              <Route
                path='/'
                element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />}
              />
              <Route
                path='blog'
                element={
                  <BlogList darkMode={darkMode} toggleTheme={toggleTheme} />
                }
              />
              <Route
                path='blog/:blogLink'
                element={
                  <Blog
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    pageContentNode={pageContentNode}
                  />
                }
              />
              <Route
                path='projects'
                element={
                  <Projects darkMode={darkMode} toggleTheme={toggleTheme} />
                }
              />
              <Route
                path='projects/:projectLink'
                element={
                  <Project darkMode={darkMode} toggleTheme={toggleTheme} />
                }
              />
              <Route
                path='design'
                element={
                  <Design darkMode={darkMode} toggleTheme={toggleTheme} />
                }
              />
              {/* <Route element={<NotFound darkMode={darkMode} toggleTheme={toggleTheme} />} /> */}
            </Routes>
          </PageContentWrapper>
        </PageContent>
        <Footer darkMode={darkMode} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 25vw;
  position: relative;
  z-index: 0;

  ${breakpoints.landscape} {
    margin: 2em 15vw;
  }

  ${breakpoints.mobile} {
    margin: 1.2em;
  }
`;
