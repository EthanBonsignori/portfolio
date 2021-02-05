import React from 'react';
import styled from 'styled-components';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Headline from '../PageHeadline';
import { breakpoints } from '../../utils/styleUtils';

const Contact = () => (
  <>
    <Headline>CONTACT ME</Headline>
    <ContactCards>
      <ContactLink
        target='_blank'
        rel="noreferrer noopener"
        href='mailto:ebonsignori@gmail.com'
      >
        <ContactCard>
          <EmailOutlined />
          Email
        </ContactCard>
      </ContactLink>
      <ContactLink
        target='_blank'
        rel="noreferrer noopener"
        href='https://www.github.com/EthanBonsignori/'
      >
        <ContactCard>
          <GitHubIcon />
          GitHub
        </ContactCard>
      </ContactLink>
      <ContactLink
        target='_blank'
        rel="noreferrer noopener"
        href='https://www.linkedin.com/in/EthanBonsignori/'
      >
        <ContactCard>
          <LinkedInIcon />
          LinkedIn
        </ContactCard>
      </ContactLink>
    </ContactCards>
  </>
);

const ContactCards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5em;
  margin: 1em;

  border: 1px solid ${({ theme }) => theme.color.salmon};
  color: ${({ theme }) => theme.color.neonBlue};

  svg {
    font-size: 3em;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.activeTab};
  }

  ${breakpoints.mobile} {
    width: 100%;
  }
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export default Contact;
