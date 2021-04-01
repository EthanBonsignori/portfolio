import uploadingcroppe1 from './posts/3-uploadingcropp1.md';
import mydeveloperstor from './posts/2-mydeveloperstor.md';
import lookingbackatpa from './posts/1-lookingbackatpa.md';

const posts = [
  {
    title: 'My Developer Story',
    author: 'Ethan Bonsignori',
    category: 'Life',
    createdAt: 'March 3, 2021',
    blogLink: 'my-developer-story',
    mdLink: mydeveloperstor,
  },
  {
    title: 'Looking Back at Past Portfolios',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 2, 2021',
    blogLink: 'looking-back-at-past-portfolios',
    mdLink: lookingbackatpa,
  },
  {
    title: 'Uploading Cropped Profile Images to Digital Ocean Spaces Part 1: Frontend',
    author: 'Ethan Bonsignori',
    category: 'Technology',
    createdAt: 'March 17, 2021',
    blogLink: 'uploading-cropped-profile-images-to-digital-ocean-spaces-part-1',
    mdLink: uploadingcroppe1,
  },
];

export default posts;
