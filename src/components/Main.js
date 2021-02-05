import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { breakpoints } from '../utils/styleUtils';

const Main = () => (
  <>
    <Navbar />
    <PageContent>
      <PageContentWrapper>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
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
