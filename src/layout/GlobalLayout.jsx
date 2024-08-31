import React from 'react';
import * as S from './GlobalLayout.style';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserPhoneInfo from '../components/UserPhoneInfo';
export default function GlobalLayout() {
  return (
    <S.GlobalContainer>
      {/* header 자리  */}
      <Header />
      <S.GlobalContent>
        <UserPhoneInfo />
        <Outlet />
      </S.GlobalContent>
    </S.GlobalContainer>
  );
}
