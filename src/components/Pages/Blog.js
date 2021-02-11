import React from 'react';
import Headline from '../PageHeadline';

const Blog = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
    Actively being worked on right now. Check back later, thanks.
  </>
);

export default Blog;
