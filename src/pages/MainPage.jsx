import React from 'react';
import UserPhoneInfo from '../components/UserPhoneInfo';
import Carousel from '../components/Carousel';
import image1 from '../assets/photo/1.jpg';
import image2 from '../assets/photo/2.jpg';
import image3 from '../assets/photo/3.png';

export default function MainPage() {
  const images = [image1, image2, image3];

  return (
    <>
      <UserPhoneInfo />
      <Carousel images={images} />
    </>
  );
}
