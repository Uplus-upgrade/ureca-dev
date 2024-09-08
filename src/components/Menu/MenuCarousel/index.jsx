import React from 'react';
import GridMenu from '../GridMenu';
import * as S from './MenuCarousel.style';
export default function MenuCaresel() {
  return (
    <S.Container>
      <GridMenu />
      <GridMenu />
    </S.Container>
  );
}
