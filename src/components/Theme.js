import React from 'react';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  color: {
    // change on theme
    background: '#141414',
    navbarScroll: '#222222',
    activeTab: '#333333',
    text: '#fff',
    // stay the same
    salmon: '#FF6B6B',
    neonBlue: '#70D7D0',
  },
};

const lightTheme = {
  color: {
    // change on theme
    background: '#fff',
    navbarScroll: '#f5f5f5',
    activeTab: '#DEDEDE',
    text: '#000',
    // stay the same
    salmon: '#FF6B6B',
    neonBlue: '#70D7D0',
  },
};

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
);

export default Theme;
