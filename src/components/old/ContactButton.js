import React from 'react';
import styled from 'styled-components';

const contactButtonsArr = [
  {
    text: 'GitHub',
    link: 'https://github.com/EthanBonsignori',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ethanbonsignori/',
  },
];

const ContactButtons = () => (
  <ContactButtonsGrid>
    {contactButtonsArr.map((button, index) => (
      <ContactButton key={index}>
        <ContactAnchor href={button.link} target='_blank'rel="noopener noreferrer">
          {button.text}
        </ContactAnchor>
      </ContactButton>
    ))}
  </ContactButtonsGrid>
);

const ContactButtonsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactButton = styled.div`
  border: 2px solid #FF6B6B;
  border-radius: 10px;
  background: #373c45;
  padding: 10px;
  margin: 0 4rem;

  &:hover {
    background: rgba(112, 215, 208, 0.6);
    cursor: pointer;
  }

  &:active {
    background: #58a8a3;
  }
`;

const ContactAnchor = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
`;

export default ContactButtons;
