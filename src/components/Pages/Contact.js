import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Headline from '../PageHeadline';
import ContactForm from '../ContactForm';
import { breakpoints } from '../../utils/styleUtils';

const Contact = () => (
  <>
    <Headline>CONTACT</Headline>
    <ContactForm />
    <CardsWrapper>
      <CardsPositioner>
        <CardsTitle>CONNECT</CardsTitle>
        <ContactLink
          title='Email'
          target='_blank'
          rel="noreferrer noopener"
          href='mailto:ebonsignori@gmail.com'
        >
          <ContactCard>
            <FontAwesomeIcon icon='envelope' />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='GitHub'
          target='_blank'
          rel="noreferrer noopener"
          href='https://www.github.com/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='LinkedIn'
          target='_blank'
          rel="noreferrer noopener"
          href='https://www.linkedin.com/in/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </ContactCard>
        </ContactLink>
        <ContactLink
          title='Facebook'
          target='_blank'
          rel="noreferrer noopener"
          href='https://www.facebook.com/EthanBonsignori/'
        >
          <ContactCard>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
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

`;

const CardsPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 60%;

  border-top: 1px solid #fff;

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

const CardsTitle = styled.div`

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

  &:hover,
  &:active {
    opacity: 0.5;
  }
`;

export default Contact;
