import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    salmon: '#FF6B6B',
    neonBlue: '#70D7D0',
    activeTab: '#333333',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
