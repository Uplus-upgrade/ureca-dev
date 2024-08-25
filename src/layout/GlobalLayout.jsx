import React from 'react';
import * as S from './GlobalLayout.style';
import { Outlet } from 'react-router-dom';

export default function GlobalLayout({ children }) {
  return (
    <S.GlobalContainer>
      {/* header 자리  */}
      <S.GlobalContent>
        <Outlet />
      </S.GlobalContent>
    </S.GlobalContainer>
  );
}
