import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import ThemeToggle from './ThemeToggle';
import { drawBorder } from '../utils/keyframes';

const PageHeadline = ({ title, darkMode, toggleTheme }) => (
  <Headline darkMode={darkMode}>
    <h2>{title}</h2>
    <ToggleContainer>
      <Lightbulb darkMode={darkMode}>
        <FontAwesomeIcon icon={faLightbulb} />
      </Lightbulb>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme}/>
    </ToggleContainer>
  </Headline>
);

const Headline = styled.div`
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
    right: -5px;
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

export default PageHeadline;
