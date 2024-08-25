import React from 'react';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
import { ReactComponent as SearchLogo } from '../../assets/images/searchLogo.svg';
import { ReactComponent as BasketLogo } from '../../assets/images/basketLogo.svg';
import { ReactComponent as MenuLogo } from '../../assets/images/menuLogo.svg';
import * as S from './Header.styled';

export default function Header() {
  return (
    <S.Container>
      <MainLogo />
      <S.Wrapper>
        <SearchLogo />
        <BasketLogo />
        <MenuLogo />
      </S.Wrapper>
    </S.Container>
  );
}
