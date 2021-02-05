import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const PageHeadline = ({ title, darkmode, toggleTheme }) => (
  <Headline>
    <h2>{title}</h2>
    <ToggleContainer>
      <Lightbulb icon={faLightbulb} darkmode={darkmode} />
      <ThemeToggle darkmode={darkmode} toggleTheme={toggleTheme}/>
    </ToggleContainer>
  </Headline>
);

const Headline = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.salmon};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Lightbulb = styled(FontAwesomeIcon)`
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#FFEE93')}
`;

export default PageHeadline;
