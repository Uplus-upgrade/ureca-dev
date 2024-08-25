import React from 'react';
import * as S from './UserInfo.styled';

export default function ChargeInfo() {
  return (
    <>
      <S.Wrapper category="charge">
        <S.h4>8월 청구요금</S.h4>
        <S.p>
          <span>납부 완료</span>
          <span>41,800원</span>
        </S.p>
      </S.Wrapper>
    </>
  );
}
