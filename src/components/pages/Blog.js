import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-dom-confetti';
import HashLoader from 'react-spinners/HashLoader';
import blogPosts from '../../assets/blogPosts';
import { getBlog, likeBlog } from '../../utils/blogApi';
import { fadeIn } from '../../utils/keyframes';
import MarkdownRenderer from '../MarkdownRenderer';
import BackButton from './shared/BackButton';
import Headline from './shared/Headline';
import { baseColors } from '../Theme';

const ANIMATION_TIME = 500;
const TEXT_ANIMATION_TIME = 300;

const confettiConfig = {
  angle: '100',
  spread: '50',
  startVelocity: '100',
  elementCount: '31',
  dragFriction: '0.35',
  duration: '1370',
  stagger: '4',
  width: '7px',
  height: '6px',
  perspective: '1000px',
};

const Blog = ({ darkMode, toggleTheme }) => {
  const [blogLikes, setBlogLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [likeAnimationActive, setLikeAnimationActive] = useState(false);
  const [textAnimationActive, setTextAnimationActive] = useState(false);
  const { blogLink } = useParams();
  const blogObj = blogPosts.find((b) => b.blogLink === blogLink);
  const blogDBName = blogLink.replace(/-/g, '');
  const blog = blogObj.mdLink;

  const fetchBlogLikes = async () => {
    const data = await getBlog(blogDBName);
    setBlogLikes(data?.likes ?? 0);
    const loadingTime = Math.random() * (3000 - 800 + 1) + 800;
    return setTimeout(() => setLoading(false), loadingTime);
  };

  useEffect(() => {
    fetchBlogLikes();
    setLoading(true);
  }, []);

  const handleLikeBlog = async () => {
    setLikeAnimationActive(true);
    setTextAnimationActive(true);
    setBlogLikes(blogLikes + 1);
    await likeBlog(blogDBName);

    setTimeout(() => {
      setLikeAnimationActive(false);
    }, ANIMATION_TIME);

    setTimeout(() => {
      setTextAnimationActive(false);
    }, TEXT_ANIMATION_TIME);
  };

  const BlogBarJsx = (
    <BlogBar>
      <BackButton link='/blog' text='Back to Blog Posts' delay={0} />
      <div>
        {loading ? (
          <HashLoader
            size={22}
            color={darkMode ? baseColors.salmon : baseColors.neonBlue}
          />
        ) : (
          <LikeButtonContainer>
            <LikeButton
              title='Like'
              onClick={handleLikeBlog}
              className={
                likeAnimationActive ? 'animate-like' : 'not-animating'
              }>
              <FontAwesomeIcon icon={faHeart} size='2x' />
            </LikeButton>
            <BlogLikes
              className={textAnimationActive ? 'animate-likes-number' : ''}>
              &nbsp;{blogLikes}
            </BlogLikes>
            <Confetti active={likeAnimationActive} config={confettiConfig} />
          </LikeButtonContainer>
        )}
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

const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const likeAnimation = keyframes`
  0% {
    transform: scale(1) rotate(-1deg);
    color: #FFEBEB;
  }
  10% {
    transform: scale(1.4) rotate(-1.5deg);
    color: #FFD6D6;
  }
  20% {
    transform: scale(1.8) rotate(-2deg);
    color: #FF9999;
  }
  30% {
    transform: scale(2) rotate(-2.5deg);
    color: #FF7070;
  }
  40% {
    transform: scale(2.2) rotate(-3deg);
    color: #FF4747;
  }
  50% {
    transform: scale(2.8) rotate(-3.2deg);
    color: #FF1F1F;
  }
  60% {
    transform: scale(2.9) rotate(-3.4);
    color: #FF1F1F;
  }
  70% {
    transform: scale(2.9) rotate(-5deg);
    color: #FF4747;
  }
  80% {
    transform: scale(2.7) rotate(-3.2deg);
    color: #FF7070;
  }
  90% {
    transform: scale(2.25) rotate(-2.5deg);
    color: #FF9999;
  }
  95% {
    transform: scale(1.9) rotate(-1.5deg);
    color: #FFD6D6;
  }
  100% {
    transform: scale(1) rotate(-1.5deg);
    color: inherit;
  }
`;

const LikeButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: transform ${ANIMATION_TIME}ms;

  &.not-animating {
    transition: transform ${ANIMATION_TIME}ms;
    &:hover {
      transition: transform ${ANIMATION_TIME}ms;
      transform: scale(1.2);
    }

    &:active {
      transition: transform ${ANIMATION_TIME}ms;
      transform: scale(1.5);
    }
  }

  &.animate-like {
    animation: ${likeAnimation} ${ANIMATION_TIME}ms;
  }
`;

const BlogLikes = styled.div`
  -webkit-transition: transform ${TEXT_ANIMATION_TIME}ms;
  -moz-transition: transform ${TEXT_ANIMATION_TIME}ms;
  -o-transition: transform ${TEXT_ANIMATION_TIME}ms;
  -ms-transition: transform ${TEXT_ANIMATION_TIME}ms;
  transition: transform ${TEXT_ANIMATION_TIME}ms;

  &.animate-likes-number {
    transform: scale(1.3) rotate(2deg);
  }
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
