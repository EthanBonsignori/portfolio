import styled from 'styled-components';
import { fadeIn } from '../../../utils/keyframes';

export default styled.button`
  cursor: pointer;
  opacity: 0;
  background: none;
  border: none;
  margin-top: 1em;
  width: 123px;
  align-self: left;

  animation: ${fadeIn} 1s forwards;
  animation-delay: 800ms;
`;
