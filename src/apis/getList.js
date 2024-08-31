import axios from 'axios';

export const getList = (setState) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    return res.data;
  });
};
