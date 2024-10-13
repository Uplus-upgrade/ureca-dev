import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  scroll-behavior: smooth;
  gap: 1rem;
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

export const Wrapper = styled.div`
  height: 40rem;
  min-width: 180px;
  width: 60rem;
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow-x: hidden; /* 넘치는 콘텐츠를 숨김 */
`;

export const TitleArea = styled.div`
  height: 8rem;
  width: 100%;
`;

export const TitleText = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  word-wrap: break-word;
`;
export const PlanText = styled.p`
  margin: 2px;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  color: gray;

  /* word-break: break-all; */
`;

export const PhoneImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const PriceArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-size: 1.5rem;
  color: gray;
  font-weight: 600;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid lightgray;
`;

export const TotalPriceArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  font-size: large;
  font-weight: bold;
`;

export const TotalPrice = styled.span`
  font-size: large;
  font-weight: bold;
  color: #ff017c;
`;
