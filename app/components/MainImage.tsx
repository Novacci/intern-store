import React from 'react';
import Image from 'next/image';
import worker from '../assets/images/worker-flowers.jpg';
import admirer from '../assets/images/admiring flowers.jpg';
import girl from '../assets/images/girl-flower.jpg';

export default function MainImage() {
  return (
    <div>
      <Image width={884} height={340} src={worker} alt="garden" />
    </div>
  );
}
