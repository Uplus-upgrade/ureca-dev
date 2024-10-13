import * as S from './Badge.styled';
export default function Badge({ recent, popular }) {
  return recent && popular ? (
    <S.Badge>
      최신
      <S.Separator></S.Separator>
      인기
    </S.Badge>
  ) : (
    <S.Badge>{recent ? '최신' : '인기'}</S.Badge>
  );
}
