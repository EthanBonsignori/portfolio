import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub, faLinkedin, faFacebook, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Headline from './shared/Headline';
import ContactForm from '../ContactForm';
import breakpoints from '../../utils/breakpoints';
import { fadeIn } from '../../utils/keyframes';

const Contact = ({ darkMode, toggleTheme }) => (
  <>
    <Headline title='CONTACT' darkMode={darkMode} toggleTheme={toggleTheme} />
    <ContactForm darkMode={darkMode} />
    <CardsWrapper>
      <CardsPositioner>
        CONNECT:
        <ContactLink
          title='Email'
          target='_blank'
          rel='noreferrer noopener'
          href='mailto:ebonsignori@gmail.com'
        >
          <ContactCard>
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='GitHub'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.github.com/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={faGithub} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='LinkedIn'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.linkedin.com/in/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={faLinkedin} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='Facebook'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.facebook.com/ethan.bonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={faFacebook} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='Twitter'
          target='_blank'
          rel='noreferrer noopener'
          href='https://www.twitter.com/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={faTwitter} />
          </ContactCard>
        </ContactLink>
      </CardsPositioner>
    </CardsWrapper>
  </>
);

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2em;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 250ms;
`;

const CardsPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 60%;

  border-top: 1px solid ${({ theme }) => theme.color.text};

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;

  color: ${({ theme }) => theme.color.neonBlue};

  svg {
    font-size: 1.5em;
  }

  ${breakpoints.mobile} {
    width: 100%;
    margin: 1em 0;
  }
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;

export default Contact;
