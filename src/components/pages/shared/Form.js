import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin: 10px 0;
  outline: none;
  border: none;

  transition: background-color 500ms ease-in-out;
  background-color: ${({ theme }) => theme.color.activeTab};
  border: 1px solid
    ${({ theme, error }) => (error ? 'red' : theme.color.activeTab)};
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
`;

export const Label = styled.label`
  width: 100%;
  padding-top: 0.5em;
`;

export const HelperText = styled.span`
  margin-top: -0.5em;
  color: ${({ theme, error }) => (error ? 'red' : theme.color.text)};
`;
