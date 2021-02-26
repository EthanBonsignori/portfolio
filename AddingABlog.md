# How to add a new blog

To add a new blog, follow these steps;

1. run the following command where {title} is the name of the new blog:
```javascript
npm run blog {blog title here} // can contain spaces!
```

2. Copy and paste the output into assets/blogs.js

```javascript
// New blog created at location assets/blogs/test.md
// Copy and paste the following into assets/blogs.js:

import testblog from './blogs/testblog.md'

{
  title: 'Test Blog',
  date: '2/26/2021',
  time: '13:01',
  blogLink: 'testblog',
  mdLink: testblog,
},

```

3. Open up the new .md file and start writing that blog!
