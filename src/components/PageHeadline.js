import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import ThemeToggle from './ThemeToggle';
import { drawBorder } from '../utils/keyframes';

const PageHeadline = ({ title, darkmode, toggleTheme }) => (
  <Headline darkmode={darkmode}>
    <h2>{title}</h2>
    <ToggleContainer>
      <Lightbulb darkmode={darkmode}>
        <FontAwesomeIcon icon={faLightbulb} />
      </Lightbulb>
      <ThemeToggle darkmode={darkmode} toggleTheme={toggleTheme}/>
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
    border: 1px solid ${({ darkmode, theme }) => (darkmode ? theme.color.salmon : theme.color.neonBlue)};
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
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
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
    background: ${({ darkmode }) => (darkmode ? 'transparent' : 'yellow')};
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
