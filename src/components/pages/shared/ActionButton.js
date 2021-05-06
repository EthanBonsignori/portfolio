import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  color: ${({ darkMode, theme }) =>
    darkMode ? theme.color.cardBackground : theme.color.text};
  background-color: ${({ theme }) => theme.color.main};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
  font-weight: bold;
  border-radius: 3px;
  font-size: 1em;
  padding: 0.3em 0.8em;
  transition: all 500ms ease;

  &:hover,
  &:active {
    opacity: 0.8;
    box-shadow: none;
  }
`;
