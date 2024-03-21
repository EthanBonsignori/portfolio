import dockerizingapyt from './posts/5-dockerizingapyt.md';
import settingupautoma from './posts/4-settingupautoma.md';
import uploadingcroppe1 from './posts/3-uploadingcropp1.md';
import mydeveloperstor from './posts/2-mydeveloperstor.md';
import lookingbackatpa from './posts/1-lookingbackatpa.md';
import { PLACEHOLDER_SPLASH_URL } from '../../scripts/createBlogHelpers';

const posts = [
  {
    title: 'My Developer Story',
    blurb:
      'I wanted to share a small but important ongoing piece of my story. My process of becoming a developer, the help I had along the way, and my outlook going forward. I tried to write this post as more of an entertaining story than a technical piece about code. I plan to publish more technical blog posts soon—stay tuned.',
    author: 'Ethan Bonsignori',
    category: 'Life',
    createdAt: 'March 3, 2021',
    blogLink: 'my-developer-story',
    mdLink: mydeveloperstor,
    splash: PLACEHOLDER_SPLASH_URL,
  },
  {
    title: 'Looking Back at Past Portfolios',
    blurb:
      "I take a moment to document some of my past portfolio sites since I've created a few and they become rather obsolete once I replace the previous one. I put a lot of work into these sites and I didn't want them to fade into nothingness. Here you can find some of my thoughts on my previous portfolios as well as images and links to those sites.",
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 2, 2021',
    blogLink: 'looking-back-at-past-portfolios',
    mdLink: lookingbackatpa,
    splash: PLACEHOLDER_SPLASH_URL,
  },
  {
    title: 'Uploading Cropped Profile Images to Digital Ocean Spaces',
    blurb:
      "A work in progress tutorial that turned out to be too big of a scope to fit in one guide. It aims to show how to upload and crop a user's profile picture and store it in Digital Ocean Spaces.",
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 17, 2021',
    blogLink: 'uploading-cropped-profile-images-to-digital-ocean-spaces-part-1',
    mdLink: uploadingcroppe1,
    splash: 'https://i.imgur.com/3Dv1hM3.png',
  },
  {
    title:
      'Setting up Automatic Firebase Hosting Deploys with Environment Secrets',
    blurb:
      'A quick guide on automating deployments for a Firebase Hosting project using GitHub Actions and how to access Environment Variables in your project.',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 7, 2024',
    blogLink:
      'setting-up-automatic-firebase-hosting-deploys-with-environment-secrets',
    mdLink: settingupautoma,
    splash: 'https://i.imgur.com/2gt4eK2.png',
  },
  {
    title: 'Dockerizing a Python FastAPI App',
    blurb:
      'A guide on how to Dockerize a Python FastAPI application. I wrote this guide to help you get started with creating and running a Docker image of your FastAPI application following the steps I used to Dockerize my recent FastAPI project, UserVote',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 10, 2024',
    blogLink: 'dockerizing-a-python-fastapi-app',
    mdLink: dockerizingapyt,
    splash: 'https://i.imgur.com/slD02OW.png',
  },
];

export default posts;
