import ebridgeLogo from './ebridge-logo.png';
import dailychartLogo from './dailychart-logo.png';
import menyouLogo from './menyou-logo.png';

export const tags = [
  'all',
  'javascript',
  'react',
  'redux',
  'next.js',
  'styled-components',
  'electron',
  'express',
  'postgreSQL',
  'firebase',
];

export const projects = [
  {
    title: 'eBridge Club',
    projectLink: 'ebridge',
    active: true,
    image: ebridgeLogo,
    description: `A user-friendly bridge website for ex-Pogo.com
      players to play free online multiplayer contract bridge.`,
    site: 'https://ebridge.club',
    github: '',
    tags: ['javascript', 'react', 'redux', 'next.js', 'styled-components', 'express', 'postgreSQL'],
  },
  {
    title: 'Daily Chart',
    projectLink: 'dailychart',
    active: false,
    image: dailychartLogo,
    description: 'Track any daily data with this fully customizable electron chart app.',
    site: '',
    github: 'https://github.com/EthanBonsignori/daily-chart',
    tags: ['javascript', 'react', 'styled-components', 'electron'],
  },
  {
    title: 'MenYou',
    projectLink: 'menyou',
    active: false,
    image: menyouLogo,
    description: `
      A recipe database that allows users to search recipes
      and add ingredients to a local grocer's shopping cart via the Whisk API.`,
    info: `
      This was a group class project that I and a classmate completed just a month into our coding bootcamp.
      The basic requirement for the project was to utilize an API in some way. We came up with the idea to
      create a recipe search and storage
      It features user authentication through firebase, uses the Firestore database
      to cache searches and save user-recipes.`,
    site: 'ethanbonsignori.github.io/menyou/',
    github: 'https://github.com/EthanBonsignori/MenYou',
    tags: ['javascript', 'firebase'],
  },
];
