<div style='display: flex; justify-content: center; align-items: center;'>
  <div style='padding-right: 8px; text-align: right;'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Last Updated</span>
    <br />
    March 2, 2021
  </div>
    <img alt='Profile Pic' src='https://github.com/EthanBonsignori/portfolio/blob/master/src/assets/images/profile_pic.jpg?raw=true' height='auto' width='50' style='border-radius: 50%;' />
  <div style='padding-left: 8px'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Written By</span>
    <br />
    Ethan Bonsignori
  </div>
</div>

<div style='text-align: center; font-style: italic; margin: 30px 0;'>
I wanted to take a moment to document some of my past portfolio sites, since I've created a few. And because they become rather obsolete once I replace the previous one. I put a lot of work into these sites and I didn't want them to fade into nothingness. Here you can find some of my thoughts on my previous portfolios as well as images and links to those sites.
</div>

In my bootcamp I made not one, not two, but three different portfolios. Starting from scratch each time, they were a sort of *checkpoint* for each new skill we picked up. [My first portfolio](https://ethanbonsignori.github.io/Basic-Portfolio/index.html) was the first website I ever made. Of course I didn't have any projects to link to (as one should for a portfolio) so we were told to just make something up. I took a rather humorous approach to mine linking "projects" such as *Cats*, *Wires,* and *Cool Bridges* that just linked back to the [repo for the project](https://github.com/EthanBonsignori/Basic-Portfolio).

### 1. Vanilla HTML and CSS
<div style='text-align: center; background-color: #242424;'>
<a href='https://ethanbonsignori.github.io/Basic-Portfolio/index.html' target='_blank'>
<img width='80%' src='https://i.imgur.com/YB3jjeR.png' alt='My First Portfolio'/>
</a>
</div>

For this project we were given a few images and told to make our site match as accurately as we could, akin to how some developers make their own copies of popular sites for practice. Only this was a lot more simple. I think mine turned out quite well! Even though I cringe slightly when I read the About Me section and the contact form is a total farce (though it does actually pretend to send—[try it out!](https://ethanbonsignori.github.io/Basic-Portfolio/contact.html)), I think it's a pretty solid first website! I even went above and beyond and added [Animate CSS](https://animate.style/) for those slick slide transitions with only simple classnames—a feature that would not return until part 3!

### 2. Bootstrap CSS
<div style='text-align: center; background-color: #242424;'>
<a href='https://ethanbonsignori.github.io/Bootstrap-Portfolio/' target='_blank'>
<img width='80%' src='https://i.imgur.com/hiodtoE.png' alt='My Second Portfolio - Bootstrapped'/>
</a>
</div>

[My second portfolio](https://ethanbonsignori.github.io/Bootstrap-Portfolio/) was made with [Bootstrap CSS](https://getbootstrap.com/). That's right, *rows* and *cols* for days! I'd like to subtitle this part of the blog *one step forward, two steps back* because there were gains and losses here. What happened to those slick animations? We lost the aforementioned lovely About Me text in favor of some classic *lorem ipsum*. Why did I not copy over the previous About Section? Why not add that simple CDN script tag for Animate CSS and slap some animation classes on those divs? We may never know. One thing we do know is, the color theme was really cool. Almost similar to the default theme on this site some may say. Not as cool though, sorry past Ethan. The defining feature of this portfolio, however, had to be the [real project links](https://ethanbonsignori.github.io/Bootstrap-Portfolio/portfolio.html). There's some great fun (for me at least) in opening up my first JavaScript apps and playing around with them, remembering how much fun I was having in this new world of coding. Oh and one side note, don't click on the copyright at the bottom... Even with the obvious *roll* text I still managed to "get" myself in 2021. Sick self-burn.

### 3. Mobile Responsive
<div style='text-align: center; background-color: #242424;'>
<a href='https://ethanbonsignori.github.io/Responsive-Portfolio/index.html' target='_blank'>
<img width='80%' src='https://i.imgur.com/3NlFSKT.png' alt='My First Portfolio but Responsive'/>
</a>
</div>

The [third and final portfolio](https://ethanbonsignori.github.io/Responsive-Portfolio/index.html) I'm realizing (as I write this blog) wasn't in fact the from-scratch third portfolio I promised. I'm sorry, reader, if I mislead you but it's been a few years. I remember now that we had spent a class or two on Media Queries and Mobile Responsive design and our homework for the week was to simply take our first site and add *media query magic* to achieve that perfect mobile site. The result was... not great—I still had a lot to learn! But hey, I had **two** different breakpoints!

```css
@media (max-width: 980px) {
  .navbar {
    height: 70px;
  }
}

@media screen and (max-width: 768px) {
  .navwrap {
    width: 610px;
    height: 70px;
  }
}
```

Comically, the bootstrap site was almost *more* mobile-responsive, but don't tell my instructor... I think I had a lot going on that week.

### 4. Part Four
<div style='text-align: center; background-color: #242424;'>
<a href='https://ethanbonsignori.github.io/Portfolio-2/' target='_blank'>
<img width='80%' src='https://media.giphy.com/media/pwi8Ct5WjJAaha2f7h/giphy.gif' alt='Material UI Portfolio'/>
</a>
</div>

Yep—there's a part four. I had to deliver on my *three made-from-scratch portfolios* promise at the beginning of this blog. And this one has to take the cake as my favorite. It was one of the first projects I worked on after graduating from bootcamp. That meant a whole lot of freedom and world of possibilities. I wanted to learn a new CSS library, so I taught myself [Material-UI](https://material-ui.com/) and ran with those fancy parallaxes. Oh and that opening animation, *I mean c'mon*. I should steal that. As a matter of fact, the colors and logo *may* look somewhat familiar. I took heavy inspiration from [this portfolio site](https://melaniedaveid.com/) that I may still have bookmarked to this day as "Cool Portfolio" because *cool* it certainly is. And can the floating nav button get an honorable mention? I remember spending a good chunk of time on that. Another chunk of time was spent on something the user can't see upfront— an actual working contact form!... Well it did work. Back when it was an actual hosted site on [ethanbon.com](https://ethanbon.com) and not on Github Pages. I circumvented the need for a backend by using Google's clever [Firebase Functions](https://firebase.google.com/docs/functions) to write a script to email myself the user's input via [Nodemailer](https://nodemailer.com/about/).
```javascript
const email = functions.config().gmail.login
const pass = functions.config().gmail.pass

admin.initializeApp()

// Function to send emails
let sendEmail = function (sender, body, sEmail) {
  // Init nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
  })

  // Send email
  transporter.sendMail(mailOptions, getDeliveryStatus)
}
```

It turns out there is a [lot simpler solution](https://formspree.io/), but it was a fun learning experience.

I hope you've enjoyed this small look through my past in portfolios, and maybe gained some appreciation for how I landed on the site you're on now. I certainly had fun reminiscing.

Until next time.