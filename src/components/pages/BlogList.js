import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import blogPosts from '../../assets/blogPosts';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';
import Headline from './shared/Headline';

const BlogList = ({ darkMode, toggleTheme }) => {
  const [dateSort, setDateSort] = useState('descending');
  const [categorySort, setCategorySort] = useState('all');
  const navigate = useNavigate();

  const handleDateSort = () => {
    if (dateSort === 'descending') {
      return setDateSort('ascending');
    }
    return setDateSort('descending');
  };

  const getBlogsJsx = () => {
    let sortedPosts = blogPosts;
    if (dateSort === 'descending') {
      sortedPosts = blogPosts.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
      );
    } else {
      sortedPosts = blogPosts.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
      );
    }

    if (categorySort !== 'all') {
      sortedPosts = blogPosts.filter(
        (post) => post.category.toLowerCase() === categorySort,
      );
    }

    return sortedPosts.map((blog, i) => (
      <BlogPost key={i} blog={blog} onClick={() => navigate(blog.blogLink)}>
        <BlogContentWrapper>
          <BlogContent>
            <BlogPostHeader>
              <BlogLink to={blog.blogLink}>{blog.title}</BlogLink>
            </BlogPostHeader>
            <BlogBlurb>{blog.blurb}</BlogBlurb>
          </BlogContent>
          <BlogSplashImage image={blog.splash} />
        </BlogContentWrapper>
        <BlogDetails>
          <BlogCategory>{blog.category}</BlogCategory>
          <span>{blog.createdAt}</span>
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
            {dateSort === 'descending' ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </SortButton>
          <SelectWrapper>
            <label htmlFor='category'>Category: </label>
            <SortSelect
              id='category'
              value={categorySort}
              onChange={(e) => setCategorySort(e.target.value)}>
              <option value='all'>All</option>
              <option value='technology'>Technology</option>
              <option value='life'>Life</option>
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
  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.cardBackground};
  padding: 0.5em;
  cursor: pointer;
`;

const BlogContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogSplashImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 130px;
  margin-left: 2em;
  margin-right: 2em;

  ${breakpoints.mobile} {
    display: none;
  }
`;

const BlogPostHeader = styled.div`
  display: flex;
  font-size: 1.3em;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;

  ${breakpoints.mobile} {
    font-size: 1.2em;
    flex-wrap: wrap;
  }
`;

const BlogLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

const BlogDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

const BlogBlurb = styled.div`
  margin: 0.5em 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5em;
`;

const BlogCategory = styled.div`
  background-color: ${({ theme }) => theme.color.activeTab};
  border-radius: 1em;
  padding: 0.2em 0.5em;
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
  transition: all 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.cardBackground};
  border: 1px solid ${({ theme }) => theme.color.cardBackground};

  option {
    background: ${({ theme }) => theme.color.cardBackground};
  }
`;

export default BlogList;
