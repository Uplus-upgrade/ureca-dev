import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-width: 32rem;
  max-width: 43rem;
  height: 100%;

  background-color: #fff;
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
`;

export const GlobalContent = styled.div`
  flex: 1; 
  padding: 2.4rem 1.6rem 0;
`;
