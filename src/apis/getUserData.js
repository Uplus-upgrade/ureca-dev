import axios from 'axios';

export const getUserData = async () => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:3000/api/user',
  });
  return response.data.userData[0];
};
