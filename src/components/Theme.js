import React from 'react';
import { ThemeProvider } from 'styled-components';

export const baseColors = {
  salmon: '#FF6B6B',
  neonBlue: '#70D7D0',
};

const darkTheme = {
  boxShadow: '4px 4px 8px 0px rgba(0,0,0,1)',
  color: {
    ...baseColors,
    background: '#141414',
    cardBackground: '#242424',
    main: '#FF6B6B',
    accent: '#70D7D0',
    navbarScroll: '#222222',
    activeTab: '#333333',
    text: '#fff',
    otherText: '#EBEBEB',
  },
};

const lightTheme = {
  boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.2)',
  color: {
    ...baseColors,
    background: '#F0F2F5',
    cardBackground: '#fff',
    main: '#70D7D0',
    accent: '#FF6B6B',
    navbarScroll: '#f5f5f5',
    activeTab: '#DEDEDE',
    text: '#3a4a5a',
    otherText: '#202932',
  },
};

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
