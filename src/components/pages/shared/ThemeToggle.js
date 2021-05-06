import React from 'react';
import styled from 'styled-components';

const ThemeToggle = ({ darkMode, toggleTheme }) => (
  <>
    <Input
      type='checkbox'
      id='toggle'
      checked={darkMode}
      onChange={toggleTheme}
    />
    <Label htmlFor='toggle'>Toggle</Label>
  </>
);

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: ${({ theme }) => theme.color.salmon};
  }

  &:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  position: relative;
  width: 35px;
  height: 21px;
  background: ${({ theme }) => theme.color.neonBlue};
  transition: background-color 500ms ease-in-out;
  margin: 0 auto;
  text-indent: -9999px;

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  &:after {
    content: '';
    background: #fff;
    width: 12px;
    height: 12px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }
`;

export default ThemeToggle;
