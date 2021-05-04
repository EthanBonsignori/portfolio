import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import designs from '../../assets/designs';
import breakpoints from '../../utils/breakpoints';
import Headline from './shared/Headline';

const Design = ({ darkMode, toggleTheme }) => {
  const designsJsx = designs.map((design, i) => (
    <DesignItemWrapper key={i}>
      <DesignItemOverlay>
        <OverlayName>
          <span>{design.name}</span>
          <span>{design.type}</span>
        </OverlayName>
        <OverlayLink
          href={design.url}
          target='_blank'
          rel='noreferrer'
          title='View Image'
        >View <FontAwesomeIcon icon={faExternalLinkAlt}/>
        </OverlayLink>
      </DesignItemOverlay>
      <DesignItem image={design.url} />
    </DesignItemWrapper>
  ));

  return (<>
    <Headline title='DESIGN' darkMode={darkMode} toggleTheme={toggleTheme} />
    <DesignsWrapper>
      {designsJsx}
    </DesignsWrapper>
  </>
  );
};

const DesignsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const DesignItemWrapper = styled.div`
  position: relative;
  width: 30%;
  padding: 0 1em;
  margin-bottom: 1em;
  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.activeTab};

  ${breakpoints.landscape} {
    width: 48%;
  }

  ${breakpoints.mobile} {
    width: 90%;
  }
`;

const DesignItemOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  top: 0;
  left: 0;
  transition: opacity 200ms ease;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#000, rgba(0, 0, 0, 0));
  opacity: 0;

  &:hover, &:active {
    opacity: 1;
  }
`;

const OverlayName = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;

  span:first-child {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

const OverlayLink = styled.a`
  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.main};
  font-family: 'Piazzolla';
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  padding: 0 1em;

  svg {
    width: 0.8em !important;
  }
`;

const DesignItem = styled.div`
  width: 100%;
  padding: 15px;
  height: 200px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default Design;
