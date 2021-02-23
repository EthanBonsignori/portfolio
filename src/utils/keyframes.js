import { keyframes } from 'styled-components';

export const drawBorder = keyframes`
  from {
    width: 20px;
  }
  to {
    width: 100%:
  }
`;

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(0, 255, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 6px rgba(0, 255, 0, 0);
  }
`;

export const placeholder = '';
