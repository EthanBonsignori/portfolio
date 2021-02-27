import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import PageHeadline from '../PageHeadline';
import MarkdownRenderer from '../MarkdownRenderer';
import { blogs } from '../../assets/blogs';

const Blog = ({ darkMode, toggleTheme }) => {
  const { blogLink } = useParams();
  const blogObj = blogs.find(b => b.blogLink === blogLink);
  const blog = blogObj.mdLink;

  return (
    <>
      <PageHeadline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <MarkdownRenderer content={blog} />
      <Outlet />
    </>
  );
};

export default Blog;
