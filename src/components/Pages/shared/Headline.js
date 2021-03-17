import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import ThemeToggle from './ThemeToggle';
import breakpoints from '../../../utils/breakpoints';
import { drawBorder } from '../../../utils/keyframes';

const Headline = ({ title, darkMode, toggleTheme }) => (
  <PageHeadline darkMode={darkMode}>
    <PageTitle>{title}</PageTitle>
    <ToggleContainer>
      <Lightbulb darkMode={darkMode}>
        <FontAwesomeIcon icon={faLightbulb} />
      </Lightbulb>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme}/>
    </ToggleContainer>
  </PageHeadline>
);

const PageHeadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;

  position: relative;
  vertical-align: middle;

  &::before {
    box-sizing: inherit;
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    border-bottom: 1px solid ${({ darkMode, theme }) => (darkMode ? theme.color.salmon : theme.color.neonBlue)};
    width: 100%;
    animation: ${drawBorder} 1s forwards;
    transition: width 0.5s ease-out;
  }

  ${breakpoints.mobile} {
    flex-direction: column-reverse;
  }
`;

const PageTitle = styled.h2`
  font-weight: normal;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;

`;

const Lightbulb = styled.div`
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  position: relative;
  font-size: 1.3em;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -4.5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ darkMode }) => (darkMode ? 'transparent' : 'yellow')};
    filter: blur(2px);
    z-index: -1;
    opacity: 0.6;
  }

  svg {
    position: relative;
    z-index: 100;
  }
`;

export default Headline;
