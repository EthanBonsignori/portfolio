import React, { useState } from 'react';
import styled from 'styled-components';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import logo from '../assets/EB_logo.png';
import { breakpoints } from '../utils/styleUtils';
import {
  ABOUT,
  BLOG,
  PROJECTS,
  CONTACT,
} from '../constants/tabsConstants';

const Main = () => {
  const [activeTab, setActiveTab] = useState(ABOUT);

  const handleActiveTab = evt => {
    evt.preventDefault();
    const { id } = evt.target;
    setActiveTab(id);
  };

  let activeContent = <About />;
  switch (activeTab) {
  case BLOG:
    activeContent = <Blog />;
    break;
  case PROJECTS:
    activeContent = <Projects />;
    break;
  case CONTACT:
    activeContent = <Contact />;
    break;
  default:
    activeContent = <About />;
    break;
  }
  return (
    <>
      <Navbar>
        <NavbarHeader>
          <NavbarLogo />
          ETHAN BONSIGNORI
        </NavbarHeader>
        <NavbarTabs>
          <Tab
            id={ABOUT}
            active={activeTab === ABOUT}
            onClick={handleActiveTab}
          >
            <TabDot active={activeTab === ABOUT} />ABOUT
          </Tab>
          <Tab
            id={BLOG}
            active={activeTab === BLOG}
            onClick={handleActiveTab}
          >
            <TabDot active={activeTab === BLOG} />BLOG
          </Tab>
          <Tab
            id={PROJECTS}
            active={activeTab === PROJECTS}
            onClick={handleActiveTab}
          >
            <TabDot active={activeTab === PROJECTS} />PROJECTS
          </Tab>
          <Tab
            id={CONTACT}
            active={activeTab === CONTACT}
            onClick={handleActiveTab}
          >
            <TabDot active={activeTab === CONTACT} />CONTACT
          </Tab>
        </NavbarTabs>
      </Navbar>
      <PageContent>
        <PageContentWrapper>
          {activeContent}
        </PageContentWrapper>
      </PageContent>
    </>
  );
};

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;

  ${breakpoints.mobile} {
    flex-direction: column;
    margin: 2em;
  }
`;

const NavbarLogo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const NavbarHeader = styled.div`
  display: flex;
  
  width: 30%;
  ${breakpoints.mobile} {
    width: 100%;
    justify-content: center;
  }
`;

const NavbarTabs = styled.div`
  display: flex;
  width: 40%;
  height: 25px;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.mobile} {
    width: 100%;
    margin-top: 2em;
  }
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ active, theme }) => (active ? theme.color.activeTab : 'none')};
`;

const TabDot = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${({ active, theme }) => (active ? theme.color.neonBlue : theme.color.activeTab)};
  margin-right: 2px;
`;

const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;
`;
const PageContentWrapper = styled.div`
  width: 70%;
  ${breakpoints.mobile} {
    width: 100%;
  }
`;

export default Main;
