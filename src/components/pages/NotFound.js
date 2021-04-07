import React from 'react';
import { Link } from 'react-router-dom';
import Headline from './shared/Headline';
import BackButton from './shared/BackButton';

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
