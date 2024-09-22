import React from 'react';
import UserPhoneInfo from './UserPhoneInfo';
import * as S from './UserInfo.styled';
import ChargeInfo from './ChargeInfo';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

export default function UserInfo({data}) {

  return (
    <S.Container>
      <UserPhoneInfo data={data} />
      <ChargeInfo data={data}/>
    </S.Container>
  );
}
