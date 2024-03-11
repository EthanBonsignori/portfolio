import dockerizingapyt from './posts/5-dockerizingapyt.md';
import settingupautoma from './posts/4-settingupautoma.md';
import uploadingcroppe1 from './posts/3-uploadingcropp1.md';
import mydeveloperstor from './posts/2-mydeveloperstor.md';
import lookingbackatpa from './posts/1-lookingbackatpa.md';
import { PLACEHOLDER_SPLASH_URL } from '../../scripts/createBlogHelpers';

const posts = [
  {
    title: 'My Developer Story',
    author: 'Ethan Bonsignori',
    category: 'Life',
    createdAt: 'March 3, 2021',
    blogLink: 'my-developer-story',
    mdLink: mydeveloperstor,
    splash: PLACEHOLDER_SPLASH_URL,
  },
  {
    title: 'Looking Back at Past Portfolios',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 2, 2021',
    blogLink: 'looking-back-at-past-portfolios',
    mdLink: lookingbackatpa,
    splash: PLACEHOLDER_SPLASH_URL,
  },
  {
    title:
      'Uploading Cropped Profile Images to Digital Ocean Spaces Part 1: Frontend',
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
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 10, 2024',
    blogLink: 'dockerizing-a-python-fastapi-app',
    mdLink: dockerizingapyt,
    splash: 'https://i.imgur.com/slD02OW.png',
  },
];

export default posts;
