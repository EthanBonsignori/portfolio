const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const getBlogDate = () => new Date().toLocaleDateString('en-US', options);

const newBlog = title => `## ${title}
<div style='display: flex; justify-content: space-between'>
  <span>By Ethan</span>
  <span>${getBlogDate()}</span>
</div>

---

Blog Text Here
`;

module.exports = {
  getBlogDate,
  newBlog,
};
