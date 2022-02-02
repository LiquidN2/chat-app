import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid #ced4da;
  border-radius: 3px;
  padding: 1rem;
  overflow: auto;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
