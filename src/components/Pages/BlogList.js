import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Headline from './shared/Headline';
import blogPosts from '../../assets/blogPosts';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';

const BlogList = ({ darkMode, toggleTheme }) => {
  const [dateSort, setDateSort] = useState('descending');
  const [categorySort, setCategorySort] = useState('all');

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

    if (categorySort !== 'all') {
      sortedPosts = blogPosts.filter(post => post.category.toLowerCase() === categorySort);
    }

    return sortedPosts.map((b, i) => (
      <BlogPost key={i}>
        <BlogPostHeader>
          <Link to={b.blogLink}>
            {b.title}
          </Link>
          <BlogDate>{b.createdAt}</BlogDate>
        </BlogPostHeader>
        <BlogDetails>
          <span>⟶&nbsp;{b.category}</span>
          <span>{b.author}</span>
        </BlogDetails>
      </BlogPost>
    ));
  };
  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <BlogPostsWrapper>
        <SortWrapper>
          <SortButton title={dateSort} onClick={handleDateSort}>
            Sort By Date&nbsp;
            {dateSort === 'descending'
              ? <FontAwesomeIcon icon={faCaretDown}/>
              : <FontAwesomeIcon icon={faCaretUp} />
            }
          </SortButton>
          <SelectWrapper>
            <label htmlFor='category'>Category: </label>
            <SortSelect id='category' value={categorySort} onChange={e => setCategorySort(e.target.value)}>
              <option value="all">All</option>
              <option value="technology">Technology</option>
              <option value="life">Life</option>
            </SortSelect>
          </SelectWrapper>
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
  margin: 0.2em 0;
  background-color: ${({ theme }) => theme.color.cardBackground};
  padding: 0.5em;
`;
const BlogPostHeader = styled.div`
  display: flex;
  font-size: 1.3em;
  width: 100%;
  justify-content: space-between;

  ${breakpoints.mobile} {
    font-size: 1.2em;
    flex-wrap: wrap;
  }
`;
const BlogDate = styled.span`
  font-size: 0.8em;
`;
const BlogDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  opacity: 0;
  animation: ${fadeIn} 800ms forwards;
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
const SelectWrapper = styled.div`
  font-size: 0.8em;
`;
const SortSelect = styled.select`
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.cardBackground};
  border: 1px solid ${({ theme }) => theme.color.cardBackground};

  option {
    background: ${({ theme }) => theme.color.cardBackground};
  }
`;

export default BlogList;
