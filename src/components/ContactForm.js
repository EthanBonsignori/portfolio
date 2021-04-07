import React, { useState } from 'react';
import styled from 'styled-components';
import ActionButton from './pages/shared/ActionButton';
import breakpoints from '../utils/breakpoints';

const ContactForm = ({ darkMode }) => {
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
      <Form
        onSubmit={submitForm}
        action='https://formspree.io/f/xoqpbkdn'
        method='POST'
      >
        <Input type='email' name='email' placeholder='Email' />
        <Textarea type='text' name='message' placeholder='Message' rows='7' />
        {status === 'SUCCESS'
          ? <Status>Thanks for reaching out! I&#39;ll get back to you as soon as possible.</Status>
          : <SubmitWrapper>
            <SubmitButton title='Send' darkMode={darkMode}>Send</SubmitButton>
          </SubmitWrapper>
        }
        {status === 'ERROR' && <Status>Error: Please make sure you entered a valid email address.</Status>}
      </Form>
    </>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin: 10px 0;
  outline: none;
  border: none;

  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.activeTab};
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
  margin-top: 1em;
  display: flex;
`;

const SubmitButton = styled(ActionButton)`
  width: 50%;

  ${breakpoints.landscape} {
    width: 60%;
  }

  ${breakpoints.mobile} {
    width: 50%;
  }
`;

export default ContactForm;
