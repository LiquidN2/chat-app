import styled, { css } from 'styled-components';

const MessageContainerStyles = css`
  display: grid;
  grid-column-gap: 1rem;
`;

export const MessageContainerTarget = styled.div`
  ${MessageContainerStyles};

  grid-template-columns: minmax(min-content, max-content) 1fr;
`;

export const MessageContainerSelf = styled.div`
  ${MessageContainerStyles};

  grid-template-columns: 1fr minmax(min-content, max-content);
`;

export const UserAvatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
`;

const MessageTextStyles = css`
  width: 80%;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    background-color: inherit;
    position: absolute;
    top: 1rem;
    transform: rotate(45deg);
  }
`;

export const MessageTextTarget = styled.div`
  ${MessageTextStyles};
  background-color: #0d6efd;
  color: white;

  &::before {
    left: -0.3rem;
  }
`;

export const MessageTextSelf = styled.div`
  ${MessageTextStyles};
  background-color: #f1f2f6;
  justify-self: end;
  color: black;

  &::before {
    right: -0.3rem;
  }
`;
