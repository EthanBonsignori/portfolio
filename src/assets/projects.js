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
  'socket.io',
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
    info: `
      eBridge is my most ambitious project to date- and still very much a work of progress!
      It started out as a simple idea to provide a platform for free online contract bridge
      after pogo shut down it's (rather old) free bridge app in June of 2019. I quickly
      realized the levels of complexity that comes with creating a multiplayer card game
      with chat, rankings, accounts, email-verification and state-storage. I opted to use
      a socket based system for the chat and game logic.`,
    site: 'https://ebridge.club',
    github: '',
    tags: ['javascript', 'react', 'redux', 'next.js', 'styled-components', 'express', 'postgreSQL', 'socket.io'],
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
    site: 'https://ethanbonsignori.github.io/MenYou/',
    github: 'https://github.com/EthanBonsignori/MenYou',
    tags: ['javascript', 'firebase'],
  },
];
