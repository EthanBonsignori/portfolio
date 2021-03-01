import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Headline from './shared/Headline';
import MarkdownRenderer from '../MarkdownRenderer';
import blogPosts from '../../assets/blogPosts';

const Blog = ({ darkMode, toggleTheme }) => {
  const { blogLink } = useParams();
  const blogObj = blogPosts.find(b => b.blogLink === blogLink);
  const blog = blogObj.mdLink;

  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <MarkdownRenderer content={blog} />
      <Outlet />
    </>
  );
};

export default Blog;
