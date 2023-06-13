import React from 'react';
import '../app/styles/MainImage.scss';
import Image from 'next/image';
import worker from '../public/images/main-page-imgs/worker-flowers.jpg';
import admirer from '../public/images/main-page-imgs/admiring flowers.jpg';
import girl from '../public/images/main-page-imgs/girl-flower.jpg';

export default function MainImage() {
  return (
    <div>
      <Image
        className="image-style"
        width={884}
        height={340}
        src={worker}
        alt="garden"
      />
    </div>
  );
}
