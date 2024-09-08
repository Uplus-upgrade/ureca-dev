import React, { useEffect, useState } from 'react';
import UserPhoneInfo from './UserPhoneInfo';
import * as S from './UserInfo.styled';
import ChargeInfo from './ChargeInfo';
import axios from 'axios';

export default function UserInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/user',
      });
      console.log(response.data.userData[0]);
      setData(response.data.userData[0]);
    };
    func();
  }, []);

  return (
    <S.Container>
      <UserPhoneInfo data={data} />
      <ChargeInfo />
    </S.Container>
  );
}
