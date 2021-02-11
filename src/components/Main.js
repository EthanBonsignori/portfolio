import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import breakpoints from '../utils/breakpoints';

const Main = ({ darkMode, toggleTheme }) => (
  <>
    <Navbar />
    <PageContent>
      <PageContentWrapper>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <About darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route
            exact
            path='/blog'
            component={() => <Blog darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route
            exact
            path='/projects'
            component={() => <Projects darkMode={darkMode} toggleTheme={toggleTheme} />} />
          <Route
            exact
            path='/contact'
            component={() => <Contact darkMode={darkMode} toggleTheme={toggleTheme} />} />
        </Switch>
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
