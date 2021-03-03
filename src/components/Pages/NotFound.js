import React from 'react';
import Headline from './shared/Headline';

console.log('ok');
const NotFound = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='404' darkMode={darkMode} toggleTheme={toggleTheme} />
    <div>Not Found</div>
  </>
);

export default NotFound;
