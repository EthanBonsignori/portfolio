import React from 'react';
import { ThemeProvider } from 'styled-components';

const baseColors = {
  salmon: '#FF6B6B',
  neonBlue: '#70D7D0',
};

const darkTheme = {
  color: {
    ...baseColors,
    background: '#141414',
    cardBackground: '#242424',
    accent: '#70D7D0',
    navbarScroll: '#222222',
    activeTab: '#333333',
    text: '#fff',
  },
};

const lightTheme = {
  color: {
    ...baseColors,
    background: '#fff',
    cardBackground: '#f2f2f2',
    accent: '#FF6B6B',
    navbarScroll: '#f5f5f5',
    activeTab: '#DEDEDE',
    text: '#000',
  },
};

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
);

export default Theme;
