import redditcloneLogo from './images/redditclone-logo.png';
import ebridgeLogo from './images/ebridge-logo.png';
import dailychartLogo from './images/dailychart-logo.png';
import menyouLogo from './images/menyou-logo.png';
import redditcloneMD from './projects/redditclone.md';
import ebridgeMD from './projects/ebridge.md';
import dailychartMD from './projects/dailychart.md';
import menyouMD from './projects/menyou.md';
import {
  reddit1,
  reddit2,
  reddit3,
} from './images/RedditClone';
import {
  ebridge1,
  ebridge2,
  ebridge3,
  ebridge4,
  ebridge5,
  ebridge6,
} from './images/eBridge';
import {
  dailychart1,
  dailychart2,
} from './images/DailyChart';
import {
  menyou1,
  menyou2,
  menyou3,
  menyou4,
  menyou5,
  menyou6,
} from './images/MenYou';

export const tags = [
  'all',
  'javascript',
  'typescript',
  'node',
  'react',
  'redux',
  'next.js',
  'chakra',
  'styled-components',
  'electron',
  'express',
  'graphql',
  'postgreSQL',
  'socket.io',
  'firebase',
  'typeorm',
  'apollo',
];

export const projects = [
  {
    title: 'cReddit - Reddit Clone',
    projectLink: 'reddit-clone',
    active: true,
    image: redditcloneLogo,
    description: 'A fullstack reddit clone built with GraphQL, Typescript, Next.js, React and Chakra UI.',
    mdLink: redditcloneMD,
    site: '',
    github: 'https://github.com/EthanBonsignori/reddit-clone',
    tags: [
      'javascript',
      'typescript',
      'node',
      'react',
      'next.js',
      'chakra',
      'graphql',
      'postgreSQL',
      'apollo',
      'typeorm',
    ],
    screenshots: [redditcloneLogo, reddit1, reddit2, reddit3],
  },
  {
    title: 'eBridge Club',
    projectLink: 'ebridge',
    active: true,
    image: ebridgeLogo,
    description: `A user-friendly bridge website for ex-Pogo.com
      players to play free online multiplayer contract bridge.`,
    mdLink: ebridgeMD,
    site: '',
    github: 'https://github.com/ebridge/bridge-web',
    tags: [
      'javascript',
      'node',
      'react',
      'redux',
      'next.js',
      'styled-components',
      'express',
      'postgreSQL',
      'socket.io',
    ],
    screenshots: [
      ebridge1,
      ebridge2,
      ebridge3,
      ebridge4,
      ebridge5,
      ebridge6,
    ],
  },
  {
    title: 'Daily Chart',
    projectLink: 'dailychart',
    active: false,
    image: dailychartLogo,
    description: 'Track any daily data with this fully customizable electron chart app.',
    mdLink: dailychartMD,
    site: '',
    github: 'https://github.com/EthanBonsignori/daily-chart',
    tags: ['javascript', 'node', 'react', 'styled-components', 'electron'],
    screenshots: [dailychart1, dailychart2],
  },
  {
    title: 'MenYou',
    projectLink: 'menyou',
    active: false,
    image: menyouLogo,
    description: `
      A recipe database that allows users to search recipes
      and add ingredients to a local grocer's shopping cart via the Whisk API.`,
    mdLink: menyouMD,
    site: 'https://ethanbonsignori.github.io/MenYou/',
    github: 'https://github.com/EthanBonsignori/MenYou',
    tags: ['javascript', 'firebase'],
    screenshots: [
      menyou1,
      menyou2,
      menyou3,
      menyou4,
      menyou5,
      menyou6,
    ],
  },
];
