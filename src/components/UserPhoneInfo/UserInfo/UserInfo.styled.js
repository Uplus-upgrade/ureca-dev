import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-width: 32rem;
  max-width: 40rem;
  height: 27vh;
  margin-top: 3.3rem;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 2rem;
  padding: 0rem 2.4rem 2rem 2.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ category }) =>
    category === 'phone' &&
    `
      :nth-child(2) {
        margin-bottom: 1.2rem;
      }
      border-bottom: 1px solid lightgray;
    `}
  ${({ category }) =>
    category === 'charge' &&
    `
      :nth-child(2) {
        display:flex;
        justify-content: space-between;
        align-items : center;
      }

       :nth-child(2) span:last-child {
        color: black; /* 두 번째 span을 검정색으로 */
        font-size: 2rem;
        font-weight: 600;
      }
    }
 `}
`;

export const h4 = styled.h4`
  margin-top: 1rem;
  font-size: 1.7rem;
  font-weight: 600;
`;

export const p = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  font-weight: 600;
  color: gray;
`;
