import React from 'react';
import UserInfo from './UserInfo';
import UsedDataInfo from './UsedDataInfo';
import useGetUserData from '../../hooks/queries/useGetUserData';

export default function UserPhoneInfo() {
  const data = useGetUserData();
  return (
    <div>
      <UserInfo data={data}/>
      <UsedDataInfo data={data} />
    </div>
  );
}
