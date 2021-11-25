<img align="right" src="src/assets/images/eb-logo.png" height="200px" />

# My Portfolio

Personal developer portfolio, blog, and place to show off projects. Designed from scratch with [React](https://reactjs.org/), [Webpack](https://webpack.js.org/), and [Styled Components](https://styled-components.com/). Fully mobile responsive through use of standardized media queries. Also features a toggleable light 🌞 and dark 🌙 theme!

## About Page

![About Page](https://i.imgur.com/6846SW2.png)

## Running Locally

1. `bash git clone git@github.com:EthanBonsignori/portfolio.git`
2. `yarn` or `npm i`
3. `

## Adding a new Blog

Run the following command replacing the brackets with the title:

```bash
npm run blog {blog title here}
```

This creates a new entry in the posts folder such as: `src/assets/posts/x-title.md` where:

- **x:** numerical order of blog based on when it was created
- **title:** up to the first 15 characters (lower cased and spaces removed) of the blog, for normalized file names
