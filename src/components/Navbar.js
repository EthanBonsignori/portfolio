import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/eb-logo.png';
import breakpoints from '../utils/breakpoints';
import {
  ABOUT,
  BLOG,
  PROJECTS,
  CONTACT,
} from '../constants/routesConstants';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const activeTab = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const navbarOffset = navbarRef?.current?.offsetTop;
      if (window.pageYOffset >= navbarOffset) {
        return setSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper ref={navbarRef} sticky={sticky}>
      <NavbarHeader>
        <NavbarLogo />
        <TabLink to='/'>
          ETHAN BONSIGNORI
        </TabLink>
      </NavbarHeader>
      <NavbarTabs sticky={sticky}>
        <TabLink to='/'>
          <Tab active={activeTab === ABOUT}>
            <TabDot active={activeTab === ABOUT} />
            ABOUT
          </Tab>
        </TabLink>
        <TabLink to='/blog'>
          <Tab active={activeTab === BLOG}>
            <TabDot active={activeTab === BLOG} />
            BLOG
          </Tab>
        </TabLink>
        <TabLink to='/projects'>
          <Tab active={activeTab === PROJECTS}>
            <TabDot active={activeTab === PROJECTS} />
            PROJECTS
          </Tab>
        </TabLink>
        <TabLink to='/contact'>
          <Tab active={activeTab === CONTACT}>
            <TabDot active={activeTab === CONTACT} />
            CONTACT
          </Tab>
        </TabLink>
      </NavbarTabs>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em;
  margin-left: 20vw;
  margin-right: 20vw;
  background: ${({ sticky, theme }) => (sticky ? theme.color.background : theme.color.background)};

  transition: background-color 500ms ease-in-out;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  padding-top: 30px;
  padding-bottom: 10px;
  top: 0;
  z-index: 100;


  @media (max-width: 1116px) {
    font-size: 0.8em;
  }

  ${breakpoints.mobile} {
    flex-direction: column;
    margin: 0;
    padding: 30px 1.2em;
    padding-bottom: 0;
    margin-top: 1px;
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
  align-items: center;
  width: 30%;

  ${breakpoints.mobile} {
    font-size: 1em;
    width: 100%;
    justify-content: center;
  }
`;

const NavbarTabs = styled.div`
  display: flex;
  height: 25px;
  justify-content: space-between;
  align-items: center;
  width: ${({ sticky }) => (sticky ? '40%' : '40%')};
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  top: 0;

  ${breakpoints.mobile} {
    width: 100%;
    margin-top: 1.5em;
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
  margin-right: 5px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 1116px) {
    font-size: 0.8em;
  }

  ${breakpoints.mobile} {
    font-size: 1em;
  }
`;

export default Navbar;
