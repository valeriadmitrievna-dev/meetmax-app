import styled from "styled-components";
import { ReactComponent as ChevronDownIcon } from "../../icons/chevron-down.svg";
import Backdrop from "../backdrop";

export const Title = styled.button<{ opened: string }>`
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme, opened }) =>
    opened === "true"
      ? theme.colors.background[300]
      : theme.colors.background[200]};
  transition: background-color 200ms;
  display: flex;
  align-items: center;
  gap: 16px;
  line-height: 16px;
  user-select: none;
  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background[300]};
  }
`;

export const Chevron = styled(ChevronDownIcon)`
  width: 16px;
  height: 16px;
`;

export const Overlay = styled(Backdrop)`
  background-color: transparent;
`;

export const Body = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background[200]};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  cursor: default;
  padding: 10px 16px;
  z-index: 5;
`;

export const Options = styled(Body)`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div<{ selected: boolean }>`
  padding: 10px 16px;
  padding-right: 64px;
  cursor: pointer;
  transition: 200ms;
  line-height: 16px;
  background-color: ${({ theme, selected }) =>
    selected && theme.colors.background[400]};
  user-select: none;

  &:hover {
    background-color: ${({ theme, selected }) =>
      !selected && theme.colors.background[300]};
  }
`;
