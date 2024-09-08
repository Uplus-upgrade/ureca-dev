import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const ImageBox = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0;
  width: 100%;
  height: 20rem;
  display: flex;
  transition: ${(props) => (!props.count ? '' : 'all 0.5s ease-in-out')};
  transform: ${(props) => `translateX(calc(-${props.count} * (100vw - 3.2rem)))`};
`;

export const ImageList = styled.li`
  list-style: none;
  width: 100%;
  border-radius: 40px;
`;

export const Image = styled.img`
  width: calc(100vw - 3.2rem);
  height: 100%;
  border-radius: 40px;
  object-fit: cover;
  src: ${(props) => props.src};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Bullets = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  z-index: 100;
`;

export const Label = styled.div`
  background-color: ${(props) =>
    props.idx === props.count ? '#ff007c' : 'rgba(88, 84, 84, 0.25)'};
  display: inline-block;
  border-radius: 10px;
  width: ${(props) => (props.idx === props.count ? '16px' : '8px')};
  height: 10px;
  margin-top: 5px;
  cursor: pointer;
`;
