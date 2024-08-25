import React from 'react';
import UserPhoneInfo from './UserPhoneInfo';
import * as S from './UserInfo.styled';
import ChargeInfo from './ChargeInfo';

export default function UserInfo() {
  return (
    <S.Container>
      <UserPhoneInfo />
      <ChargeInfo />
    </S.Container>
  );
}
