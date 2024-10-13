import { useQuery } from '@tanstack/react-query';
import { getMobileData } from '../../apis/getMobileData';

export default function useGetMobileData() {
  const { data, isLoading } = useQuery({
    queryKey: ['mobileData'],
    queryFn: getMobileData,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading };
}

//여기서 { data } : 얘는 객체를 의미하는게 아님*** ->구조 분해 할당 표현식
// data 키에 있는 값을 저장하겠다~~! 그러면 data에 '갤럭시 어쩌구' 문자열이 들어있다고 쳤을때, data에 저장되고 얘는 string을 저장하는 변수가 되는거임
