import {
  faFacebook, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Footer = ({ darkMode }) => (
  <FooterWrapper>
    <ContactWrapper>
      <ContactText>CONNECT:</ContactText>
      <ContactCard>
        <ContactLink
          darkMode={darkMode}
          title='GitHub'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.github.com/EthanBonsignori/'
        >
          <FontAwesomeIcon icon={faGithub} />
        </ContactLink>
      </ContactCard>
      <ContactCard>
        <ContactLink
          darkMode={darkMode}
          title='LinkedIn'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.linkedin.com/in/EthanBonsignori/'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </ContactLink>
      </ContactCard>
      <ContactCard>
        <ContactLink
          darkMode={darkMode}
          title='Facebook'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.facebook.com/ethan.bonsignori/'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </ContactLink>
      </ContactCard>
      <ContactCard>
        <ContactLink
          darkMode={darkMode}
          title='Twitter'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.twitter.com/EthanBonsignori/'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </ContactLink>
      </ContactCard>
    </ContactWrapper>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding-top: 3em;
  padding-bottom: 1.5em;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContactText = styled.span`
  opacity: 0.4;
`;

const ContactCard = styled.div`
  transition: all .3s ease-in-out;

  &:hover,
  &:active a {
    transform: translateY(-5px) scale(1.2);
  }
`;

const ContactLink = styled.a`
  cursor: pointer;
  font-size: 1.2em;
  margin: 0 0.5em;
  opacity: 0.4;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &:hover,
  &:active {
    transform: scale(2);
  }
`;

export default Footer;
