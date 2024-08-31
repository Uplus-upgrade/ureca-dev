import styled from 'styled-components';

export const ProgressbarWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  background-color: #f3f3f3;
  border-radius: 2rem;
  padding: 1rem 2.4rem 1rem 2.4rem;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const h4 = styled.h4`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.7rem;
  font-weight: 600;
`;

export const p = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ size }) => `${size}rem`};
  font-weight: 600;
  color: black;
`;

export const span = styled.span`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: 400;
  color: gray;
`;

export const chartText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ff017c;
`;

export const chartSmallText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff017c;
`;
