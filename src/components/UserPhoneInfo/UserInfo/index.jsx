import React from 'react';
import UserPhoneInfo from './UserPhoneInfo';
import * as S from './UserInfo.styled';
import ChargeInfo from './ChargeInfo';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import useGetUserData from '../../../hooks/queries/useGetUserData';

export default function UserInfo() {
  const data = useGetUserData();

  return (
    <S.Container>
      <UserPhoneInfo data={data} />
      <ChargeInfo />
    </S.Container>
  );
}
