import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { PageTitle } from './pages/shared/Headline';
import { setOpacity } from '../utils/styleUtils';
import { Form, HelperText, Input, Label, Textarea } from './pages/shared/Form';
import ActionButton, {
  IconButton,
  SubActionButton,
} from './pages/shared/ActionButton';
import { commentBlog } from '../utils/blogApi';
import { baseColors } from './Theme';

Modal.setAppElement('#root');

export default function CommentModal({ darkMode, isOpen, closeModal }) {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [commentValue, setCommentValue] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { blogLink } = useParams();
  const blogDBName = blogLink.replace(/-/g, '');

  const resetForm = () => {
    setSuccess(null);
    setSubmitted(false);
    setNameValue('');
    setNameError(null);
    setEmailValue('');
    setEmailError(null);
    setCommentValue('');
    setCommentError(null);
  };

  const onRequestClose = () => {
    resetForm();
    closeModal();
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    if (!nameValue || nameValue?.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!emailValue || emailValue?.trim() === '') {
      setEmailError('Please enter your email address');
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!commentValue || commentValue?.trim() === '') {
      setCommentError('Please enter a comment');
      isValid = false;
    } else if (commentValue.length > 1000) {
      setCommentError('Comment must be less than 1000 characters');
      isValid = false;
    } else {
      setCommentError(false);
    }

    return isValid;
  };

  const style = {
    overlay: {
      backgroundColor: setOpacity(theme.color.background, 0.8),
    },
    content: {
      backgroundColor: theme.color.cardBackground,
      border: 'none',
      minWidth: '300px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setLoading(true);
      try {
        const result = await commentBlog(blogDBName, {
          name: nameValue,
          email: emailValue,
          comment: commentValue,
        });
        if (result.success === true) {
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setSuccess(false);
        }
      } catch (error) {
        setLoading(false);
        setSuccess(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
      contentLabel='Comment'>
      <PageTitleWrapper>
        <PageTitle>Add Comment</PageTitle>
        <IconButton onClick={onRequestClose}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </PageTitleWrapper>

      {loading ? (
        <LoadingWrapper>
          <HashLoader color={baseColors.salmon} />
        </LoadingWrapper>
      ) : (
        React.null
      )}

      {!loading && submitted === false ? (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='name' error={nameError}>
            Name
          </Label>
          <Input
            error={nameError}
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          {nameError ? (
            <HelperText error={nameError}>{nameError}</HelperText>
          ) : (
            React.null
          )}
          <Label error={emailError} htmlFor='email'>
            Email (will not be displayed publicly)
          </Label>
          <Input
            error={emailError}
            type='email'
            id='email'
            name='email'
            value={emailValue}
            placeholder='Your email address'
            onChange={(e) => setEmailValue(e.target.value)}
          />
          {emailError ? (
            <HelperText error={emailError}>{emailError}</HelperText>
          ) : (
            React.null
          )}
          <Label error={commentError} htmlFor='comment'>
            Comment
          </Label>
          <Textarea
            error={commentError}
            type='text'
            id='comment'
            name='comment'
            value={commentValue}
            placeholder='Your comment'
            rows='7'
            maxLength={1000}
            onChange={(e) => setCommentValue(e.target.value)}
          />
          <CommentHelperTextWrapper>
            <HelperText error={commentError}>{commentError}</HelperText>
            <HelperText>{commentValue.length} / 1000</HelperText>
          </CommentHelperTextWrapper>
          <SubmitButtonWrapper>
            <ActionButton darkMode={darkMode} title='Submit'>
              Submit
            </ActionButton>
            <SubActionButton
              darkMode={darkMode}
              title='Close'
              onClick={(e) => {
                e.preventDefault();
                onRequestClose();
              }}>
              Close
            </SubActionButton>
          </SubmitButtonWrapper>
        </Form>
      ) : (
        React.null
      )}

      {!loading && submitted === true && success === true ? (
        <ResultWrapper>
          <HelperText>
            Your comment was submitted successfully! It will be displayed after
            it has been reviewed.
          </HelperText>
          <ResultActionButton
            darkMode={darkMode}
            title='Close'
            onClick={(e) => {
              e.preventDefault();
              onRequestClose();
            }}>
            Close
          </ResultActionButton>
        </ResultWrapper>
      ) : (
        React.null
      )}

      {!loading && submitted === true && success === false ? (
        <ResultWrapper>
          <HelperText>
            There was an error submitting your comment. Please try again.
          </HelperText>
          <ResultActionButton
            darkMode={darkMode}
            title='Close'
            onClick={(e) => {
              e.preventDefault();
              onRequestClose();
            }}>
            Close
          </ResultActionButton>
        </ResultWrapper>
      ) : (
        React.null
      )}
    </Modal>
  );
}

const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6em;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultActionButton = styled(SubActionButton)`
  width: 50%;
  margin-top: 1em;
  margin-left: 0;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const CommentHelperTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
