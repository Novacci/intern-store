'use client';

import { useState, useEffect } from 'react';
import '../app/styles/MainImage.scss';
import Image from 'next/image';
import worker from '../public/images/main-page-imgs/worker-flowers.jpg';
import admirer from '../public/images/main-page-imgs/admiring flowers.jpg';
import girl from '../public/images/main-page-imgs/girl-flower.jpg';
import { StaticImageData } from 'next/image';

const images = [worker, admirer, girl];

interface ImageType {
  src: string | StaticImageData;
}

export default function MainImage() {
  const [currentImage, setCurrentImage] = useState<any>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Image
        className="image-style"
        width={884}
        height={340}
        src={currentImage}
        alt="garden"
      />
    </div>
  );
}
