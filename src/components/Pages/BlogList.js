import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Headline from '../PageHeadline';
import { blogs } from '../../assets/blogs';

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
    let sortedBlogs = blogs;
    if (dateSort === 'descending') {
      sortedBlogs = blogs.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    } else {
      sortedBlogs = blogs.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    return sortedBlogs.map((b, i) => (
      <div key={i}>
        <div>{b.title}</div>
      </div>
    ));
  };
  return (
    <>
      <Headline title='BLOG' darkMode={darkMode} toggleTheme={toggleTheme} />
      <BlogsWrapper>
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
      </BlogsWrapper>
    </>
  );
};

const BlogsWrapper = styled.div`
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
