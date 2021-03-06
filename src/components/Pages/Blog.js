import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
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

  const fetchBlogLikes = async () => {
    const data = await getBlog(blogLink);
    setLocalBlogLikes(data.likes);
  };

  useEffect(() => {
    fetchBlogLikes();
  }, []);

  const handleLikeBlog = async () => {
    setBlogLikes({ ...blogLikes, [blogLink]: true });
    await likeBlog(blogLink);

    return fetchBlogLikes();
  };

  const handleUnlikeBlog = async () => {
    setBlogLikes({ ...blogLikes, [blogLink]: false });
    await unlikeBlog(blogLink);

    return fetchBlogLikes();
  };

  const blogBar = <BlogBar>
    <Link to='/blog'>
      <BackButton>&#8592;&nbsp;Back to Blog</BackButton>
    </Link>
    {blogLikes[blogLink]
      ? <LikeButton title='Unlike' onClick={handleUnlikeBlog}>
        <FontAwesomeIcon icon={faSolidHeart} />&nbsp;&nbsp;{localBlogLikes}
      </LikeButton>
      : <LikeButton title='Like' onClick={handleLikeBlog}>
        <FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;{localBlogLikes}
      </LikeButton>
    }
  </BlogBar>;

  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      {blogBar}
      <BlogWrapper>
        <MarkdownRenderer content={blog} />
      </BlogWrapper>
      {blogBar}
      <Outlet />
    </>
  );
};

const BlogWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 500ms;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
`;

const BlogBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 100ms;
`;

export default Blog;
