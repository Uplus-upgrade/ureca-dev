import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2rem;
  background-color: #f3f3f3;
  padding: 0.5rem 2rem;
`;

export const FirstRowWrapper = styled.div`
  display: flex;
  width: 100%;
  :last-child {
    border-right: none;
  }
`;

export const SecondRowWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid lightgray;
  :last-child {
    border-right: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 2rem 0;
  border-right: 1px solid lightgray;
  & :last-child {
    border-right: none;
  }
`;
