const fs = require('fs');
const path = require('path');
const {
  getBlogTitleFromArgs,
  getFilenameFromTitle,
  getBlogLinkFromTitle,
  getImportStr,
  getBlogObj,
  getCommaIndex,
  insertAtStrIndex,
  newBlog,
} = require('./createBlogHelpers');

const createBlog = async () => {
  const assetsPath = path.join(__dirname, '../src/assets');
  const getBlogNumber = async () => {
    const files = fs.readdirSync(`${assetsPath}/posts`);
    return parseInt(files[files.length - 1].substring(0, 1), 10) + 1;
  };

  const blogTitle = getBlogTitleFromArgs();
  const blogNumber = await getBlogNumber();
  const mdFilename = getFilenameFromTitle(blogNumber, blogTitle);
  const blogLink = getBlogLinkFromTitle(blogTitle);
  const blogObj = getBlogObj(blogTitle, mdFilename, blogLink);

  let blogsData = '';
  if (!blogTitle) {
    return console.warn('No blog title entered... Try again with: \n\r\n\r npm run blog {new blog title here}');
  }

  fs.writeFile(`${assetsPath}/posts/${mdFilename}.md`, newBlog(), err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`New blog post successfully created @ assets/posts/${mdFilename}.md.`);
  });

  return fs.readFile(`${assetsPath}/blogPosts.js`, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    const insertIndex = getCommaIndex(data);
    const mergedData = insertAtStrIndex(insertIndex, data, blogObj);
    const importStr = getImportStr(mdFilename);
    blogsData = `${importStr}${mergedData}`;
    return fs.writeFile(`${assetsPath}/blogPosts.js`, blogsData, error => {
      if (err) {
        return console.error(error);
      }
      return console.log('New data & import successfully added to assets/blogPosts.js');
    });
  });
};

createBlog();
