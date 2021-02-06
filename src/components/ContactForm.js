import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import breakpoints from '../utils/breakpoints';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <FormWrapper>
        <Form
          onSubmit={submitForm}
          action='https://formspree.io/f/xoqpbkdn'
          method='POST'
        >
          <div style={{ width: '100%' }}>EMAIL ME</div>
          <Input type='email' name='email' placeholder='Email' />
          <Textarea type='text' name='message' placeholder='Message' rows='7' />
          {status === 'SUCCESS'
            ? <Status>Thanks for reaching out! I&#39;ll get back to you as soon as possible.</Status>
            : <SubmitWrapper>
              <SubmitButton><FontAwesomeIcon icon={faPaperPlane} /></SubmitButton>
            </SubmitWrapper>
          }
          {status === 'ERROR' && <Status>Error: Please make sure you entered a valid email address.</Status>}
        </Form>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 60%;
  
  ${breakpoints.mobile} {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin: 10px 0;
  outline: none;
  border: none;

  background: ${({ theme }) => theme.color.activeTab};
`;

const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
`;

const Status = styled.p`
  text-align: center;
  margin: 4px 0;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.color.salmon};
  color: ${({ theme }) => theme.color.salmon};
  border: none;
  outline: none;
  margin: 10px 0;
  width: 50%;
  padding: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  

  &::before {
    color: #fff;
    position: absolute;
    box-sizing: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    content: 'Send';
    z-index: 11;
    transition: z-index 0.5s ease-out, color 0.5s ease-out;
  }

  svg {
    transition: color 0.5s ease-out, z-index 0.5s;
    z-index: -100;
  }

  &:hover svg {
    color: #fff;
    z-index: 100;
  }
  &:hover::before {
    color: ${({ theme }) => theme.color.salmon};
    z-index: -1;
  }

  &:active {
    opacity: 0.8;
  }

  ${breakpoints.mobile} {
    width: 70%;
  }
`;

export default ContactForm;
