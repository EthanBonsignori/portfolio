import React from 'react';
import styled from 'styled-components';

const AboutText = () => (
  <About>
    I&#39;m <Name>Ethan Bonsignori</Name> and welcome to my portfolio site.
  </About>
);

const About = styled.div`
  color: #fff;
  font-size:  clamp(1rem, 2.5vw, 2rem);
  border: 3px solid #24282b;
  padding: 1rem;
  border-radius: 40px;
  height: 
`;

const Name = styled.span`
  text-decoration: underline #70D7D0;
  font-size:  clamp(1.5rem, 3vw, 3rem);
`;

export default AboutText;
