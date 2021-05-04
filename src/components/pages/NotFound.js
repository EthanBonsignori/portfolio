import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './shared/BackButton';
import Headline from './shared/Headline';

console.log('ok');
const NotFound = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='404' darkMode={darkMode} toggleTheme={toggleTheme} />
    <Link to='/'>
      <BackButton>&#8592;&nbsp;Go Back</BackButton>
    </Link>
  </>
);

export default NotFound;
