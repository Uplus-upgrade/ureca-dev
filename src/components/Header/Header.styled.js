import styled from 'styled-components';

export const Container = styled.header`
  z-index: 100;
  padding: 0 1.6rem;
  width: 100%;
  /* min-width: 32rem;
  max-width: 43rem; */
  height: 6rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :first-child {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 1.3rem;
  * {
    cursor: pointer;
  }
`;
