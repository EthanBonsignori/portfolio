import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Headline from './shared/Headline';
import BackButton from './shared/BackButton';
import MarkdownRenderer from '../MarkdownRenderer';
import blogPosts from '../../assets/blogPosts';
import useLocalStorage from '../../hooks/useLocalStoage';
import { getBlog, likeBlog, unlikeBlog } from '../../utils/blogApi';
import { fadeIn } from '../../utils/keyframes';

const Blog = ({ darkMode, toggleTheme }) => {
  const [localBlogLikes, setLocalBlogLikes] = useState(0);
  const existingBlogLikes = localStorage.getItem('blogLikes') || {};
  const [blogLikes, setBlogLikes] = useLocalStorage('blogLikes', existingBlogLikes);
  const { blogLink } = useParams();
  const blogObj = blogPosts.find(b => b.blogLink === blogLink);
  const blog = blogObj.mdLink;

  useEffect(() => {
    setLocalBlogLikes(getBlog(blogLink));
  }, []);

  const handleLikeBlog = () => {
    const res = likeBlog(blogLink);
    setBlogLikes({ ...blogLikes, [blogLink]: true });
    console.log(res);
  };

  const handleUnlikeBlog = () => {
    unlikeBlog(blogLink);
    setBlogLikes({ ...blogLikes, [blogLink]: false });
  };

  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      {blogLikes[blogLink]
        ? <LikeButton onClick={handleUnlikeBlog}>Unlike {localBlogLikes}</LikeButton>
        : <LikeButton onClick={handleLikeBlog}>Like {localBlogLikes}</LikeButton>
      }
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

const LikeButton = styled.button`
  background: none;
  border: none;
`;

export default Blog;
