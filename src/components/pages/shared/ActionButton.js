import styled from 'styled-components';

const ActionButton = styled.button`
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

export default ActionButton;

export const SubActionButton = styled(ActionButton)`
  background-color: ${({ theme }) => theme.color.activeTab};
  box-shadow: none;
  margin-left: 1em;
  color: ${({ theme }) => theme.color.text};
`;

export const IconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.text};
  transition: all 500ms ease;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.accent};
  }
`;
