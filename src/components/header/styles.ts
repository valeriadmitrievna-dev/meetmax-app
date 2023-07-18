import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import Select from '../popover/select';

export const Wrapper = styled.header``;

export const Container = styled.div`
  padding: 16px 20px;
  display: grid;
  align-items: center;
  grid-template-columns: 256px 1fr;
`;

export const AuthContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LanguageSwitch = styled(Select)`
  margin-left: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled(LogoIcon)`
  width: 26px;
  height: 26px;
  color: ${({ theme }) => theme.colors.primary[100]};
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
