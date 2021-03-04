import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Headline from './shared/Headline';
import BackButton from './shared/BackButton';
import MarkdownRenderer from '../MarkdownRenderer';
import blogPosts from '../../assets/blogPosts';
import { fadeIn } from '../../utils/keyframes';

const Blog = ({ darkMode, toggleTheme }) => {
  const { blogLink } = useParams();
  const blogObj = blogPosts.find(b => b.blogLink === blogLink);
  const blog = blogObj.mdLink;

  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <BlogWrapper>
        <MarkdownRenderer content={blog} />
      </BlogWrapper>
      <Link to='/blog'>
        <BackButton>&#8592;&nbsp;Back to Blog</BackButton>
      </Link>
      <Outlet />
    </>
  );
};

const BlogWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 50ms;
`;

export default Blog;
