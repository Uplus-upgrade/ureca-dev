import React from 'react';
import * as S from './UserInfo.styled';

export default function ChargeInfo({ data }) {
  console.log(data);
  return (
    <>
      <S.Wrapper category="charge">
        <S.h4>{data?.month} 청구요금</S.h4>
        <S.p>
          <span>{data?.pay}</span>
          <span>{data?.chargePrice}원</span>
        </S.p>
      </S.Wrapper>
    </>
  );
}
