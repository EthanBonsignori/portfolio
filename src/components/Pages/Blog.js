import React from 'react';
import PageHeadline from '../PageHeadline';
import MarkdownRenderer from '../MarkdownRenderer';
import myStory from '../../assets/blogs/my-story.md';

const Blog = ({ darkMode, toggleTheme }) => (
  <>
    <PageHeadline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
    <MarkdownRenderer content={myStory} />
  </>
);

export default Blog;
