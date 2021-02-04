import React from 'react';
import styled from 'styled-components';

const Header = props => (
  <HeaderContainer>
    {props.text}
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  margin: 0 6rem;
  padding: 1rem 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #70D7D0;
  font-family: Grenze Gotisch;
  font-size: clamp(2.6rem, 4.2vw, 5rem);
  color: #FF6B6B;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    right: 10px;
    bottom: -10px;
    background: #FF6B6B;
    width: 100%;
    height: 100%;
    transform: translateZ(-1px)
  }
`;

export default Header;
