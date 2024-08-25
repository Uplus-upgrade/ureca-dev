import React from 'react';
import * as S from './GlobalLayout.style';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function GlobalLayout({ children }) {
  return (
    <S.GlobalContainer>
      {/* header 자리  */}
      <S.GlobalContent>
      <Header/>
        <Outlet />
      </S.GlobalContent>
    </S.GlobalContainer>
  );
}
