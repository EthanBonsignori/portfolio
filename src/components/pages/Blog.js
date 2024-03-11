import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import blogPosts from '../../assets/blogPosts';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getBlog, likeBlog } from '../../utils/blogApi';
import { fadeIn } from '../../utils/keyframes';
import MarkdownRenderer from '../MarkdownRenderer';
import BackButton from './shared/BackButton';
import Headline from './shared/Headline';

const Blog = ({ darkMode, toggleTheme }) => {
  const [localBlogLikes, setLocalBlogLikes] = useState(0);
  const existingBlogLikes = localStorage.getItem('blogLikes') || {};
  const [blogLikes, setBlogLikes] = useLocalStorage(
    'blogLikes',
    existingBlogLikes,
  );
  const { blogLink } = useParams();
  const blogObj = blogPosts.find((b) => b.blogLink === blogLink);
  const blogDBName = blogLink.replace(/-/g, '');
  const blog = blogObj.mdLink;

  const fetchBlogLikes = async () => {
    const data = await getBlog(blogDBName);
    setLocalBlogLikes(data?.likes ?? 0);
  };

  useEffect(() => {
    fetchBlogLikes();
  }, []);

  const handleLikeBlog = async () => {
    setBlogLikes({ ...blogLikes, [blogDBName]: true });
    await likeBlog(blogDBName);
    return setTimeout(() => {
      fetchBlogLikes();
    }, 500);
  };

  const BlogBarJsx = (
    <BlogBar>
      <BackButton link='/blog' text='Back to Blog Posts' delay={0} />
      <div>
        <LikeButton title='Like' onClick={handleLikeBlog}>
          <FontAwesomeIcon icon={faHeart} />
        </LikeButton>
        &nbsp;{localBlogLikes}
      </div>
    </BlogBar>
  );

  return (
    <>
      <Headline
        title={blogObj.title}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      {BlogBarJsx}
      <BlogWrapper>
        <MarkdownRenderer content={blog} />
      </BlogWrapper>
      {BlogBarJsx}
    </>
  );
};

const BlogWrapper = styled.div`
  opacity: 0; // to prevent flashing
  animation: ${fadeIn} 1s forwards;
  animation-delay: 500ms;
`;

const LikeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

const BlogBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 350ms;
  margin-bottom: 10px;
`;

export default Blog;
