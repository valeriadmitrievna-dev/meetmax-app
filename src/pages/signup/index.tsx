import { FC } from "react";
import * as S from "./styles";
import { ReactComponent as EmailSignIcon } from "icons/email-sign.svg";
import { ReactComponent as UserCircleIcon } from "icons/user-circle.svg";
import { ReactComponent as LockIcon } from "icons/lock.svg";
import { ReactComponent as CalendarIcon } from "icons/calendar-day.svg";
import ToggleGroup from "components/toggle-group";
import { GENDER } from "utils/constants";

const SignUpPage: FC = () => {
  return (
    <S.Container className='container'>
      <S.Title>getting started</S.Title>
      <S.Text>Create an account to continue and connect with people.</S.Text>
      <S.Form>
        <S.FormGroup>
          <S.FormInput
            extra={{ start: <EmailSignIcon /> }}
            span={4}
            placeholder='Your Email'
          />
          <S.FormInput
            extra={{ start: <UserCircleIcon /> }}
            span={4}
            placeholder='Your Name'
          />
          <S.FormInput
            extra={{ start: <LockIcon /> }}
            span={4}
            placeholder='Create Password'
            type='password'
          />
          <S.FormInput
            extra={{ start: <CalendarIcon /> }}
            span={2}
            placeholder='Date of birth'
          />
          <ToggleGroup name='gender' options={GENDER} />
        </S.FormGroup>
      </S.Form>
    </S.Container>
  );
};

export default SignUpPage;
