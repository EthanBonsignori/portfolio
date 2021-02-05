import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/EB_logo.png';
import { breakpoints } from '../utils/styleUtils';
import {
  ABOUT,
  BLOG,
  PROJECTS,
  CONTACT,
} from '../constants/routesConstants';

const Navbar = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <NavbarWrapper>
      <NavbarHeader>
        <NavbarLogo />
        ETHAN BONSIGNORI
      </NavbarHeader>
      <NavbarTabs>
        <Tab active={activeTab === ABOUT}>
          <TabDot active={activeTab === ABOUT} />
          <TabLink to='/'>ABOUT</TabLink>
        </Tab>
        <Tab active={activeTab === BLOG}>
          <TabDot active={activeTab === BLOG} />
          <TabLink to='/blog'>BLOG</TabLink>
        </Tab>
        <Tab active={activeTab === PROJECTS}>
          <TabDot active={activeTab === PROJECTS} />
          <TabLink to='/projects'>PROJECTS</TabLink>
        </Tab>
        <Tab active={activeTab === CONTACT}>
          <TabDot active={activeTab === CONTACT} />
          <TabLink to='/contact'>CONTACT</TabLink>
        </Tab>
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

  ${breakpoints.mobile} {
    flex-direction: column;
    margin: 0;
    margin-top: 2em;
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
  margin-right: 5px;
`;

const TabLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export default Navbar;
