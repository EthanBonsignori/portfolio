const getBlogTitleFromArgs = () => process.argv.splice(2, process.argv.length).join(' ');

const getImportStr = file => `import ${file} from './posts/${file}.md';
`;

const getCommaIndex = str => str.lastIndexOf('];');

const insertAtStrIndex = (index, str, blog) => `${str.slice(0, index - 1)}${blog}${str.slice(index)}`;

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
    <span style='font-size: 0.8em; opacity: 0.5;'>Last Updated</span>
    <br />
    ${getBlogDate()}
  </div>
    <img alt='Profile Pic' src='https://github.com/EthanBonsignori/portfolio/blob/master/src/assets/images/profile_pic.jpg?raw=true' height='auto' width='50' style='border-radius: 50%;' />
  <div style='padding-left: 8px'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Written By</span>
    <br />
    Ethan Bonsignori
  </div>
</div>

<div style='text-align: center; font-style: italic; margin: 30px 0;'>
~Blog thoughts here
</div>

~Blog text here
`;

const getBlogObj = (title, file) => `
  {
    title: '${title}',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: '${getBlogDate()}',
    blogLink: '${file}',
    mdLink: ${file},
  },
`;

module.exports = {
  getBlogTitleFromArgs,
  getImportStr,
  getBlogObj,
  getCommaIndex,
  insertAtStrIndex,
  getBlogDate,
  newBlog,
};
