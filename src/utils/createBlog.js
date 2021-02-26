const { exec } = require('child_process');
const path = require('path');

const getBlogTitle = () => process.argv.splice(2, process.argv.length).join(' ');

const getBlogObj = (title, file) => `
import ${file} from './blogs/${file}.md'

{
  title: '${title}',
  date: '${new Date().toLocaleDateString()}',
  time: '${new Date().getHours()}:${new Date().getMinutes()}',
  blogLink: '${file}',
  mdLink: ${file},
},`;

const createBlog = () => {
  const blogTitle = getBlogTitle();
  const mdFilename = blogTitle.replace(/\s/g, '').toLocaleLowerCase();
  if (!blogTitle) {
    return console.log('No blog title entered... Try again with: \n\r\n\r npm run blog {new blog title here}');
  }

  exec(`touch ${path.join(__dirname, `../assets/blogs/${mdFilename}.md`)}`, err => {
    if (err) {
      console.log(err);
    }
  });

  console.log(`New blog created at assets/blogs/${mdFilename}.md`);
  const blogObj = getBlogObj(blogTitle, mdFilename);
  return console.log(`Copy and paste the following into assets/blogs.js: \n\r\n\r ${blogObj}`);
};

createBlog();
