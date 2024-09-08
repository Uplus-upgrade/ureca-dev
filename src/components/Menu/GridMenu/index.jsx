import React from 'react';
import * as S from './GridMenu.style';
export default function GridMenu() {
  return (
    <S.Container>
      <S.FirstRowWrapper>
        <S.Button>내 가입정보</S.Button>
        <S.Button>해외 로밍</S.Button>
        <S.Button>데이터 선물</S.Button>
      </S.FirstRowWrapper>
      <S.SecondRowWrapper>
        <S.Button>휴대폰 구매</S.Button>
        <S.Button>인터넷/IPTV</S.Button>
        <S.Button>이벤트</S.Button>
      </S.SecondRowWrapper>
    </S.Container>
  );
}
