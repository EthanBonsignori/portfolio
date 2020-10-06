import React from 'react';
import styled from 'styled-components';

const width = 5;

export default () => (
  <NavigationLineContainer>
    <NavigationLine />
  </NavigationLineContainer>
)

const NavigationLineContainer = styled.div`
  position: absolute;
  top: -70px;
  left: -${width / 2}px;
  z-index: -10;
  overflow: hidden;
`;

const NavigationLine = styled.div`
  height: 95vh;
  width: ${width}px;
  background: #FF6B6B;

`;
