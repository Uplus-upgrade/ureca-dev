import React from 'react';
import * as S from './UserInfo.styled';

export default function UserPhoneInfo({ data }) {
  console.log(data);
  return (
    <>
      <S.Wrapper category="phone">
        <S.h4>{data?.phoneNumber}</S.h4>
        <S.p>{data?.chargePlan}</S.p>
      </S.Wrapper>
    </>
  );
}
