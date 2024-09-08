import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../apis/getUserData';

export default function useGetUserData() {
  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: getUserData,
    staleTime: 1000 * 60 * 5,
  });

  return data;
}
