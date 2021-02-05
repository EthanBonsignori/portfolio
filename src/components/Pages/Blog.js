import React from 'react';
import Headline from '../PageHeadline';

const Blog = ({ darkmode, toggleTheme }) => (
  <>
    <Headline title='BLOG' darkmode={darkmode} toggleTheme={toggleTheme} />
    Actively being worked on right now. Check back later, thanks.
  </>
);

export default Blog;
