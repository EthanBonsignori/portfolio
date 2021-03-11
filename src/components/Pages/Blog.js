import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Headline from './shared/Headline';
import BackButton from './shared/BackButton';
import MarkdownRenderer from '../MarkdownRenderer';
import blogPosts from '../../assets/blogPosts';
import useLocalStorage from '../../hooks/useLocalStorage';
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

  return (
    <>
      <Headline title={blogObj.title} darkMode={darkMode} toggleTheme={toggleTheme} />
      <BlogBar>
        <BackButton link='/blog' text='Back to Blog Posts' delay={0}/>
        {blogLikes[blogLink]
          ? <div>
            <LikeButton title='Unlike' onClick={handleUnlikeBlog}>
              <FontAwesomeIcon icon={faSolidHeart} />
            </LikeButton>&nbsp;{localBlogLikes}
          </div>
          : <div>
            <LikeButton title='Like' onClick={handleLikeBlog}>
              <FontAwesomeIcon icon={faHeart} />
            </LikeButton>&nbsp;{localBlogLikes}
          </div>
        }
      </BlogBar>
      <BlogWrapper>
        <MarkdownRenderer content={blog} />
      </BlogWrapper>
      <BlogBar>
        <BackButton link='/blog' text='Back to Blog Posts' delay={800}/>
        {blogLikes[blogLink]
          ? <div>
            <LikeButton title='Unlike' onClick={handleUnlikeBlog}>
              <FontAwesomeIcon icon={faSolidHeart} />
            </LikeButton>&nbsp;{localBlogLikes}
          </div>
          : <div>
            <LikeButton title='Like' onClick={handleLikeBlog}>
              <FontAwesomeIcon icon={faHeart} />
            </LikeButton>&nbsp;{localBlogLikes}
          </div>
        }
      </BlogBar>
    </>
  );
};

const BlogWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 500ms;
`;

const LikeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
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
