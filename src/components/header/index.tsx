import { FC } from "react";
import * as S from "./styles";
import { LANGUAGES } from "../../utils/constants";

interface Props {
  isAuth: boolean;
}

const Header: FC<Props> = ({ isAuth }) => {
  return (
    <S.Wrapper>
      <S.Container className='container'>
        <S.LogoWrapper>
          <S.Logo />
          <S.LogoText>MeetMax</S.LogoText>
        </S.LogoWrapper>
        {isAuth ? (
          <S.AuthContent>
            <input type='text' placeholder='Search' />
            <span>user</span>
          </S.AuthContent>
        ) : (
          <S.LanguageSwitch value='EN' options={LANGUAGES} autoWidth disabled />
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
