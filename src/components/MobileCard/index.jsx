import useGetMobileData from '../../hooks/queries/useGetMobileData';
import * as S from './MobileCard.styled';
import Badge from './Badge';

export default function MobileCard() {
  const { data } = useGetMobileData();
  console.log(data);

  return (
    <S.Container>
      {data?.map((item) => {
        return (
          <S.Wrapper>
            <S.TitleArea>
              <S.TitleText>{item.name}</S.TitleText>
              <S.PlanText>{item.plan}</S.PlanText>
            </S.TitleArea>
            <S.PhoneImg src={item.photo} alt={item.name} />
            <Badge recent={item.recent} popular={item.popular} />
            <S.PriceWrapper>
              <S.PriceArea>
                <S.Label>통신료</S.Label>
                <S.Price>{item.planPrice}</S.Price>
              </S.PriceArea>
              <S.PriceArea>
                <S.Label>휴대폰</S.Label> <S.Price>{item.phonePrice}</S.Price>
              </S.PriceArea>
            </S.PriceWrapper>
            <S.TotalPriceArea>
              <S.TotalLabel>월</S.TotalLabel>
              <S.TotalPrice>
                {(
                  Number(item.planPrice.replace(/,/g, '')) +
                  Number(item.phonePrice.replace(/,/g, ''))
                ).toLocaleString()}
              </S.TotalPrice>
            </S.TotalPriceArea>
            {/* <S.Price planPrice={item.planPrice} phonePrice={item.phonePrice} /> */}
            {/* <S.TotalPrice>{item.planPrice+item.phonePrice}</S.TotalPrice>  */}
          </S.Wrapper>
        );
      })}
    </S.Container>
  );
}
