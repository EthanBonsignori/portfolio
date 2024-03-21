const PLACEHOLDER_SPLASH_URL = 'https://i.imgur.com/GbIQNMe.png';

const getBlogTitleFromArgs = () =>
  process.argv.splice(2, process.argv.length).join(' ');

const getFilenameFromTitle = (number, title) =>
  `${number}-${title.replace(/-|\s/g, '').substring(0, 15).toLowerCase()}`;

const getBlogLinkFromTitle = (title) => title.replace(/\s/g, '-').toLowerCase();

const removeIndex = (str) => str.substring(2, str.length);

const getImportStr = (file) => `import ${removeIndex(
  file,
)} from './posts/${file}.md';
`;

const getCommaIndex = (str) => str.lastIndexOf('];');

const insertAtStrIndex = (index, str, blog) =>
  `${str.slice(0, index - 1)}${blog}${str.slice(index)}`;

const getBlogDate = () => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date().toLocaleDateString('en-US', options);
};

const newBlog = () => `
<div style='display: flex; justify-content: center; align-items: center;'>
  <div style='padding-right: 8px; text-align: right;'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Published</span>
    <br />
    ${getBlogDate()}
  </div>
    <img alt='Profile Pic' src='https://i.imgur.com/k0Py8Ex.jpg?1' height='auto' width='50' style='border-radius: 50%;' />
  <div style='padding-left: 8px'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Written By</span>
    <br />
    Ethan Bonsignori
  </div>
</div>

<div style='text-align: center; font-style: italic; margin: 30px 0;'>
~Blog thoughts here~
</div>

~Blog text here~

*Last updated ${getBlogDate()}*
`;

const getBlogObj = (title, file, link) => `
  {
    title: '${title}',
    blurb: 'Put here what you want to show up on the blog list page. This should be a short description of the blog post, usually in the blog thoughts section as well.'
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: '${getBlogDate()}',
    blogLink: '${link}',
    mdLink: ${removeIndex(file)},
    splash: PLACEHOLDER_SPLASH_URL,
  },
`;

module.exports = {
  getBlogTitleFromArgs,
  getFilenameFromTitle,
  getBlogLinkFromTitle,
  getImportStr,
  getBlogObj,
  getCommaIndex,
  insertAtStrIndex,
  getBlogDate,
  newBlog,
  PLACEHOLDER_SPLASH_URL,
};
