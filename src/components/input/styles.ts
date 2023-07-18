import styled from "styled-components";

export const Input = styled.input<{ padStart: boolean; padEnd: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  padding-left: ${({ padStart }) => (padStart ? 38 : 16)}px;
  padding-right: ${({ padEnd }) => (padEnd ? 38 : 16)}px;
  line-height: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text[200]};
    opacity: 0.5;
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`;

export const StartExtra = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
`;

export const EndExtra = styled(StartExtra)`
  left: auto;
  right: 12px;
`;

export const PasswordToggle = styled(EndExtra)`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  transition: 200ms;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text[500]};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: 1px solid ${({ theme }) => theme.colors.text[500]};
  transition: 200ms;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.primary[100]};

    ${PasswordToggle} {
      background-color: ${({ theme }) => theme.colors.background[300]};
    }
  }
`;
