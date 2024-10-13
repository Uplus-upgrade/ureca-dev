import instance from './index';

export const getMobileData = async () => {
  const { data } = await instance.get(`/api/popular-mobile`);

  return data;
};
