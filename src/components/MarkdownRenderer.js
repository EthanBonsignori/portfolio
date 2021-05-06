// https://intoli.com/blog/webpack-markdown-setup/
import React from 'react';
import '../assets/css/gruvbox-dark.css';

const wrapMarkup = (html) => ({
  __html: html,
});

const MarkdownRenderer = ({ content }) => (
  <div className='markdown' dangerouslySetInnerHTML={wrapMarkup(content)} />
);

export default MarkdownRenderer;
