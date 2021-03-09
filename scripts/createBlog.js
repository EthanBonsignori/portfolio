const fs = require('fs');
const path = require('path');
const {
  getBlogTitleFromArgs,
  getImportStr,
  getBlogObj,
  getCommaIndex,
  insertAtStrIndex,
  newBlog,
} = require('./createBlogHelpers');

const createBlog = () => {
  const assetsPath = path.join(__dirname, '../src/assets');
  const blogTitle = getBlogTitleFromArgs();
  const mdFilename = blogTitle.replace(/\s/g, '').toLowerCase();
  const blogObj = getBlogObj(blogTitle, mdFilename);
  let blogsData = '';
  if (!blogTitle) {
    return console.log('No blog title entered... Try again with: \n\r\n\r npm run blog {new blog title here}');
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
