'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../app/styles/MainImage.scss';
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
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image width={884} height={340} src={currentImage} alt="garden" />
    </motion.div>
  );
}
