import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Headline from './shared/Headline';
import blogPosts from '../../assets/blogPosts';

const BlogList = ({ darkMode, toggleTheme }) => {
  const [dateSort, setDateSort] = useState('descending');
  // const [tagSort, setTagSort] = useState('all');

  const handleDateSort = () => {
    if (dateSort === 'descending') {
      return setDateSort('ascending');
    }
    return setDateSort('descending');
  };

  const getBlogsJsx = () => {
    let sortedPosts = blogPosts;
    if (dateSort === 'descending') {
      sortedPosts = blogPosts.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    } else {
      sortedPosts = blogPosts.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
    }

    return sortedPosts.map((b, i) => (
      <BlogPost key={i}>
        <BlogPostHeader>
          <Link to={b.blogLink}>
            {b.title}
          </Link>
          <span>
            {new Date(b.createdAt).toLocaleDateString('en-US')}
          </span>
        </BlogPostHeader>
        ⟶
      </BlogPost>
    ));
  };
  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <BlogPostsWrapper>
        <SortWrapper>
          <SortButton title={dateSort} onClick={handleDateSort}>
            Date&nbsp;
            {dateSort === 'descending'
              ? <FontAwesomeIcon icon={faCaretDown}/>
              : <FontAwesomeIcon icon={faCaretUp} />
            }
          </SortButton>
        </SortWrapper>
        {getBlogsJsx()}
      </BlogPostsWrapper>
      <Outlet />
    </>
  );
};

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;
const BlogPostHeader = styled.div`
  display: flex;
  font-size: 1.3em;
  width: 100%;
  justify-content: space-between;
`;

const BlogPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SortWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1em;
  justify-content: space-evenly; 
`;
const SortButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export default BlogList;
