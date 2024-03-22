<img align="right" src="src/assets/images/eb-logo.png" height="200px" />

# My Portfolio

My personal developer portfolio and blog. Designed from scratch with [React](https://reactjs.org/), [Webpack](https://webpack.js.org/), and [Styled Components](https://styled-components.com/). Fully mobile responsive through use of standardized media queries. Also features a toggleable light 🌞 and dark 🌙 theme!

## About Page

![About Page](https://i.imgur.com/6846SW2.png)

## Running Locally

1. ```bash
   git clone git@github.com:EthanBonsignori/portfolio.git
   ```
2. Copy the `.env.example` file to `.env` and fill in the necessary environment variables, found on the Firebase Console > Project Settings > General > Your Apps > Firebase SDK snippet > Config

3. ```bash
   npm install
   ```
4. ```bash
   npm run dev
   ```

## Adding a new Blog

Run the following command replacing the brackets with the title:

```bash
npm run blog {blog title here}
```

This creates a new entry in the posts folder such as: `src/assets/posts/x-title.md` where:

- **x:** numerical order of blog based on when it was created
- **title:** up to the first 15 characters (lower cased and spaces removed) of the blog, for normalized file names

## Adding a new Project

Add a new project to the top of the `projects` array in `src/assets/data/projects.js`:

```javascript
{
  title: 'Project Title',
  projectLink: 'project-route',
  active: boolean, // true if project is live, false if not
  image: 'project-image.png',
  description: 'Project Description',
  mdLink: 'project-markdown.md',
  site: 'project-site.com', // optional
  github: 'https://github.com/EthanBonsignori/repo-name', // optional
  tags: ['tag1', 'tag2', 'tag3']
  screenshots: ['screenshot1.png', 'screenshot2.png']
}
```
