
eBridge is my most ambitious project to date-and still very much a work in progress!
It started out as a simple idea to provide a platform for free online contract bridge
after pogo shut down its (rather old) free bridge app around June 2019. I quickly realized
how complex not only a multiplayer card game, but what is essentially a social site can be.
I wanted to have chat, friends, ranking, matchmaking, custom profiles, and more. Some of these
features already exist- go check the site out- but most are still in the works. I've been working
on it in my free time nearly the entire COVID pandemic and there's still much to be done.

I wanted not only to incorporate all of the best technology I'd used in previous projects,
but also to push myself to learn new technologies while creating eBridge. It is built on
a Next.js + React.js foundation, to gain the benefit of load-times, SEO, and more that come with 
Server-Side Rendering. Most of the React used are functional components with React Hooks. The chat
and eventual game logic are made with socket.io. The most recent feature I added was user profile
picture upload with a cropping tool. The pictures are stored in Digital Ocean Spaces which is
equivalent to Amazon's S3. The next planned feature is the game-logic and rooms, so keep an eye out!