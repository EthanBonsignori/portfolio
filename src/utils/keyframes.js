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

export const popIn = keyframes`
  0% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }

  100% {
    opactiy: 1;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity 0;
  }

  60% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

export const logoSlide = keyframes`
  0% {
    top: 50%;
    left: 20px;
  }

  99% {
    opacity: 1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  100% {
    opacity: 0;
  }
`;

export const titleSlide = keyframes`
  0% {
    top: 50%;
    left: 100px;
  }
  
  99% {
    opacity 1;
    top: 83px;
    left: 50%;
    transform: translateX(-50%);
  }

  100% {
    opacity: 0;
  }
`;
