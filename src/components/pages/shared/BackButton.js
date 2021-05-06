import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn } from '../../../utils/keyframes';

const BackButton = ({ link, text, delay }) => (
  <Link to={link || '/'}>
    <StyledButton title='Back' delay={delay}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      &nbsp;{text || 'Back'}
    </StyledButton>
  </Link>
);

const StyledButton = styled.button`
  cursor: pointer;
  opacity: 0;
  background: none;
  border: none;
  text-decoration: underline;

  animation: ${fadeIn} 1s forwards;
  animation-delay: ${({ delay }) => `${delay || 0}ms`};
`;

export default BackButton;
