// import axios from 'axios';
import instance from './index';

export const getUserData = async () => {
  const response = await instance.get(`/api/user`); //첫번째 인자에 url 이어서 쓰기
  return response.data.userData[0];
};
