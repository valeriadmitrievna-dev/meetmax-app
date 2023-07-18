import styled from "styled-components";

export const Toggle = styled.label<{ centered: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ centered }) => (centered ? "center" : "flex-start")};
  gap: 8px;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.text[500]};
  transition: 200ms;
  overflow: hidden;
  cursor: pointer;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
`;

export const Text = styled.span`
  line-height: 1;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked + ${Toggle} {
    background-color: ${({ theme }) => theme.colors.primary[200]};
    border-color: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.background[100]};
  }
`;
