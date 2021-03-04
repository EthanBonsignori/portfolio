import ebridgeLogo from './images/ebridge-logo.png';
import dailychartLogo from './images/dailychart-logo.png';
import menyouLogo from './images/menyou-logo.png';
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
  'node',
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
      eBridge is my most ambitious project to date-and still very much a work in progress!
      It started out as a simple idea to provide a platform for free online contract bridge
      after pogo shut down its (rather old) free bridge app around June 2019. I quickly realized
      how complex not only a multiplayer card game, but what is essentially a social site can be.
      I wanted to have chat, friends, ranking, matchmatking, custom profiles, and more. Some of these
      features already exist- go check the site out- but most are still in the works. I've been working
      on it in my free time nearly the entire COVID pandmenic and there's still much to be done.
    `,
    moreInfo: `
      I wanted not only to incorporate all of the best technology I'd used in previous projects,
      but also to push myself to learn new technologies while creating eBridge. It is built on
      a Next.js + React.js foundation, to gain the benefit of load-times, SEO, and more that come with 
      Server-Side Rendering. Most of the React used are functional components with React Hooks. The chat
      and eventual game logic are made with socket.io. The most recent feature I added was user profile
      picture upload with a cropping tool. The pictures are stored in Digital Ocean Spaces which is
      equivalent to Amazon's S3. The next planned feature is the game-logic and rooms, so keep an eye out! 
    `,
    site: 'https://ebridge.club',
    github: '',
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
    info: `
      Daily Chart started as a way to track phone calls I was making each day during a certain global pandemic.
      I wanted it to be universal and customizable for other purposes, so I converted it to React, added
      settings, and a nice UI so that anyone could use it. Why? To track occurences of just about anything
      over a day and see that data in a nice graph! You can look at that data in bar-graph form over the past
      7 or 30 days too, with optional weekend dates! I had fun learning a lot about Electron while creating this
      app.
    `,
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
    info: `
      MenYou is the outcome of the first group project of my Bootcamp.
      While it only uses vanilla JS, HTML and CSS it was only a month into our learning and
      I like to keep it on my portfolio because of how proud I am of what I was able to achieve such a short
      time after learning the basics of JavaScript. The only requirements for the project were to utilize two
      web APIs in some way. My partner and I decided to create a recipe search and storage app. We quickly ran into
      an API call limit issue with our recipe search API while developing. This was never going to work as an actual
      deployed app if users would see an 'API limit reached' error for most of their searches! I researched some
      potential workarounds and came up with a bit of fun code that caches each unique search in the Firestore Database.
      After implementing that it was simply a matter of checking whether each search already existed in Firestore
      before sending the request off to the API. If not-cache away! Voilà, not only were our searches loading more
      quickly from Firestore, but I had also circumvented our API call limit issue!`,
    moreInfo: `
      It also features user authentication through 
      firebase with custom login and register forms. While there aren't a all of user-account features that I would
      have liked (the deadline was only 2 weeks!) you can add your own recipes with a custom input form that allows
      you to add and remove ingredients and write directions. As for the other API we needed for our 2 API requirement,
      my partner discovered the Whisk API- a rather magical API that takes an array of ingredients, asks for your zip
      code so it can find a local grocery store, and sends those ingredients to an online shopping cart of that grocer
      for instant curbside pickup or delivery! While I can't take credit for Whisk's ingenuity, it does fit rather
      perfectly with MenYou. MenYou was nominated for best project of the running GA-Tech bootcamps at the time!`,
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
