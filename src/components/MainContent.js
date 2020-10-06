import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';
import Projects from './Projects';

const MainContent = () => (
  <ContentWrapper>
    <ContentContainer>
      <Bio />
    </ContentContainer>
    <Projects />
  </ContentWrapper>
);

const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: clamp(100ch, 80%, 200ch);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #292F36;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 4px solid #FF6B6B;
`;

export default MainContent;
