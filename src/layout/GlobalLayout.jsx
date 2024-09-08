import React from 'react';
import * as S from './GlobalLayout.style';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
export default function GlobalLayout() {
  return (
    <S.GlobalContainer>
      {/* header 자리  */}
      <Header />
      <S.GlobalContent>
        <Outlet />
      </S.GlobalContent>
    </S.GlobalContainer>
  );
}
