import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const Wrapper = styled.div<{ visible: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation-duration: 200ms;
  animation-fill-mode: forwards;
  animation-name: ${({ visible }) => (visible === "true" ? show : hide)};
  overflow: hidden;
`;
