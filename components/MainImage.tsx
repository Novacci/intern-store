'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import worker from '../public/images/main-page-imgs/worker-flowers.jpg';
import admirer from '../public/images/main-page-imgs/admiring flowers.jpg';
import girl from '../public/images/main-page-imgs/girl-flower.jpg';
import { StaticImageData } from 'next/image';

const images = [worker, admirer, girl];

export default function MainImage() {
  const [currentImage, setCurrentImage] = useState<StaticImageData>(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Image width={884} height={340} src={currentImage} alt="garden" />
    </div>
  );
}
