import { FC, InputHTMLAttributes, useState } from "react";
import * as S from "./styles";
import { ReactComponent as PasswordShowIcon } from "icons/password-show.svg";
import { ReactComponent as PasswordHideIcon } from "icons/password-hide.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  extra?: { start?: JSX.Element; end?: JSX.Element };
}

const Input: FC<Props> = ({ extra, ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((curr) => !curr);
  };

  return (
    <S.Wrapper className={props.className}>
      {!!extra?.start && <S.StartExtra>{extra.start}</S.StartExtra>}
      <S.Input
        {...props}
        className=''
        padStart={!!extra?.start}
        padEnd={!!extra?.end}
        type={isPasswordVisible ? "text" : props.type}
      />
      {!!extra?.end && <S.EndExtra>{extra.end}</S.EndExtra>}
      {!extra?.end && props.type === "password" && (
        <S.PasswordToggle onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <PasswordShowIcon /> : <PasswordHideIcon />}
        </S.PasswordToggle>
      )}
    </S.Wrapper>
  );
};

export default Input;
