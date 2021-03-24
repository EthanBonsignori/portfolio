import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import logo from '../assets/images/eb-logo.png';
import breakpoints from '../utils/breakpoints';
import {
  ABOUT,
  BLOG,
  PROJECTS,
  CONTACT,
} from '../constants/routesConstants';

const Navbar = () => {
  const isMobile = useWindowDimensions().width < 768;
  const location = useLocation();
  // Gets the base route (i.e. /blog) from /blog/blog-title
  const activeTab = location.pathname.split('/')[1];
  return (
    <>
      {isMobile
        ? <MobileNavbarWrapper>
          <MobileNavbarContainer>
            <NavbarHeader>
              <TabLink to='/'>
                <NavbarLogo />
              ETHAN BONSIGNORI
              </TabLink>
            </NavbarHeader>
          </MobileNavbarContainer>
        </MobileNavbarWrapper>
        : null
      }
      <NavbarWrapper>
        <NavbarContainer>
          {isMobile
            ? null
            : <NavbarHeader>
              <TabLink to='/'>
                <NavbarLogo />
              ETHAN BONSIGNORI
              </TabLink>
            </NavbarHeader>
          }
          <NavbarTabs>
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
      </NavbarWrapper>
    </>
  );
};

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 20vw;
  margin-top: 2em;
  padding-top: 10px;

  position: sticky;
  top: 0;
  z-index: 100;

  ${breakpoints.landscape} {
    margin-left: 15vw;
    margin-right: 15vw;
  }

  ${breakpoints.mobile} {
    margin: 1.2em;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  border-radius: 5px;
  padding: 10px 5px;
  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.background};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
          box-shadow: ${({ theme }) => theme.boxShadow};

  ${breakpoints.landscape} {
    width: 100%;
  }

  ${breakpoints.mobile} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-bottom: 1px;

    min-height: 60px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    -webkit-box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 6px 6px 8px 0px rgba(0, 0, 0, 0.1);
  }
`;

const MobileNavbarWrapper = styled(NavbarWrapper)`
  ${breakpoints.mobile} {
    margin: 1.2em;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0.5em;
  }
`;

const MobileNavbarContainer = styled(NavbarContainer)`
  ${breakpoints.mobile} {
    min-height: 0px;
    height: 45px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
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
    width: 40%;
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
  justify-content: space-evenly;
  align-items: center;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  top: 0;

  ${breakpoints.landscape} {
    width: 60%;
  }

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  background: ${({ active, theme }) => (active ? theme.color.activeTab : 'none')};
  border-radius: 4px;

  ${breakpoints.mobile} {
    width: 100%;
    flex-direction: column;
    padding-top: 0;
  }
`;

const TabDot = styled.div`
  width: 7px;
  height: 7px;
  transition: background-color 500ms ease-in-out;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  ${breakpoints.landscape} {
    width: 100%;
  }
`;

export default Navbar;
