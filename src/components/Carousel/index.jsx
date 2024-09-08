import React, { useEffect, useState } from 'react';
import * as S from './Carousel.style';

// const images = [
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8a2kVsR3KxIIP-U89bU1genrenQb7I9CNyQ&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhghOVmF3cH1DJqHAyPadBLq8etqMxc2vm7w&s',
//   'https://search.pstatic.net/sunny/?src=http%3A%2F%2Fkr-cdn.spooncast.net%2Fprofiles%2Fd%2FjAB6gdfjM8eaq%2F66ad7083-6f7e-4435-98d7-f0a1d9f9118b.jpg&type=a340',
// ];

export default function Carousel({images}) {
  const TOTAL_SLIDES = 2;
  const [curruntIdx, setCurrentIdx] = useState(0);
  const [count, setCount] = useState(0);
  //   const slideRef = useRef(null);

  const nextSlide = () => {
    if (curruntIdx >= TOTAL_SLIDES) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (curruntIdx === 0) {
      setCurrentIdx(TOTAL_SLIDES);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === TOTAL_SLIDES ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const handleInputLabel = (idx) => {
    setCount(idx);
  };

  return (
    <>
      <S.Container>
        <S.ImageBox count={count}>
          {images.map((image, idx) => (
            <S.ImageList>
              <S.Image src={image} alt={idx} />
            </S.ImageList>
          ))}
        </S.ImageBox>
      </S.Container>
      <S.Bullets>
        {images.map((_, idx) => (
          <S.Label onClick={() => handleInputLabel(idx)} count={count} idx={idx} />
        ))}
      </S.Bullets>
    </>
  );
}
