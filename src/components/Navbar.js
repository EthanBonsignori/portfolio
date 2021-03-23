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
      return true;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper ref={navbarRef} sticky={sticky}>
      <NavbarPositioner>
        <NavbarContainer>
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
        </NavbarContainer>
      </NavbarPositioner>
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
  padding-top: 10px;

  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  top: 0;
  z-index: 100;

  ${breakpoints.landscape} {
    margin-left: 15vw;
    margin-right: 15vw;
  }

  ${breakpoints.mobile} {
    margin: 1.2em;
    padding-top: 5px;
    padding-bottom: 0;
    margin-top: 15px;
  }
`;

const NavbarPositioner = styled.div`
  width: 70%;
  border-radius: 5px;
  padding: 10px 5px;
  background: ${({ theme }) => theme.color.background};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
          box-shadow: ${({ theme }) => theme.boxShadow};

  ${breakpoints.landscape} {
    width: 100%;
  }

  ${breakpoints.mobile} {
    width: 100%;
    padding-bottom: 1px;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${breakpoints.landscape} {
    width: 100%;
  }

  ${breakpoints.mobile} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const NavbarLogo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  min-width: 25px;
  min-height: 25px;
  margin-right: 5px;
`;

const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  width: 33.333%;

  ${breakpoints.landscape} {
    width: 45%;
  }

  ${breakpoints.mobile} {
    width: 100%;
    justify-content: center;
  }
`;

const NavbarTabs = styled.div`
  display: flex;
  height: 25px;
  width: 66.666%;
  justify-content: space-between;
  align-items: center;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  top: 0;

  ${breakpoints.landscape} {
    width: 55%;
  }

  ${breakpoints.mobile} {
    width: 100%;
    margin-top: 1.5em;
  }
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ active, theme }) => (active ? theme.color.activeTab : 'none')};
  border-radius: 4px;

  ${breakpoints.mobile} {
    flex-direction: column;
    padding-top: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const TabDot = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${({ active, theme }) => (active ? theme.color.neonBlue : theme.color.activeTab)};
  margin-right: 5px;

  ${breakpoints.mobile} {
    width: 20px;
    margin: 0;
    border-radius: 3px;
    border-top-left-radius: ${({ active }) => (active ? '0px' : '3px')};
    border-top-right-radius: ${({ active }) => (active ? '0px' : '3px')};
  }
`;

const TabLink = styled(Link)`
  text-decoration: none;
`;

export default Navbar;
