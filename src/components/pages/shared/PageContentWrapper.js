import styled from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export default styled.div`
  background-color: ${({ theme }) => theme.color.background};
  width: 70%;
  margin-bottom: 3em;

  padding: 1em;
  border-radius: 5px;
  transition: background-color 500ms ease-in-out, box-shadow 500ms ease-in-out;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  ${breakpoints.landscape} {
    width: 100%;
  }

  ${breakpoints.mobile} {
    width: 100%;
  }
`;
