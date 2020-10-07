import React from 'react';
import styled from 'styled-components';

const AboutText = () => (
  <About>
    <Hi>Hi,</Hi><br />
    <AboutTextContainer>
      Welcome to my portfolio site!
      I&#39;m a web developer currently living in Savannah, GA.
      I decided to make a change in 2019 and attend a 6-month <Underline>Full-Stack Bootcamp</Underline> offered
      by The Georgia Institute of Technology. I fell in love with the constant learning and problem solving
      that web development with JavaScript offered and dug my heels in to learning newer technologies like
      Next and React to solve (and often open up a whole new set!) of problems.
      Here you can find some of my recent projects as well as some ways to get in touch. Thanks for stopping by!
    </AboutTextContainer>
  </About>
);

const About = styled.div`
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding: 1rem;
  border-radius: 40px;
  height: 100%;
`;

const AboutTextContainer = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;

const Hi = styled.span`
  color: #70D7D0;
  font-family: Grenze Gotisch;
  font-size: clamp(2rem, 3vw, 3rem);
`;

const Underline = styled.span`
  text-decoration: underline #70D7D0;
`;

export default AboutText;
