import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import breakpoints from '../utils/breakpoints';
import { fadeIn } from '../utils/keyframes';

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
              <SubmitButton title='Send'>SEND <FontAwesomeIcon icon={faPaperPlane} /></SubmitButton>
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

  opacity: 0;
  animation: ${fadeIn} 800ms forwards;
  animation-delay: 50ms;
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
  display: flex;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.color.salmon};
  width: 50%;
  
  border: none;
  outline: none;
  padding: 0.6em;
  margin: 10px 0;

  ${breakpoints.landscape} {
    width: 60%;
  }

  ${breakpoints.mobile} {
    width: 70%;
  }
`;

export default ContactForm;
