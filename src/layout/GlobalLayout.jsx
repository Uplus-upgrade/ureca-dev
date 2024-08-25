import React from 'react';
import * as S from './GlobalLayout.style';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import UserInfo from '../components/UserPhoneInfo/UserInfo';

export default function GlobalLayout({ children }) {
  return (
    <S.GlobalContainer>
      {/* header 자리  */}
      <S.GlobalContent>
        <Header />
        <UserInfo />
        <Outlet />
      </S.GlobalContent>
    </S.GlobalContainer>
  );
}
