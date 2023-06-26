'use client';
import React from 'react';
import Image from 'next/image';
import '../app/styles/HowItWorks.scss';
import stageOne from '../public/images/main-page-imgs/stage1.png';
import stageTwo from '../public/images/main-page-imgs/stage2.png';
import stageThree from '../public/images/main-page-imgs/stage3.png';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <>
      <div className="sections-position">
        <div className="first-section">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h3>How it works</h3>
            <h2>On-demand and tailored to you</h2>
            <span>
              Tell us what You need, how many You need, and when You need.
              You'll then receive a package straight to Your doosteps.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p className="green-circle">How it works</p>{' '}
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="second-section"
        >
          <Image height={60} src={stageOne} alt="stageOne" />
          <Image height={60} src={stageTwo} alt="stageTwo" />
          <Image height={60} src={stageThree} alt="stageThree" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="third-section"
        >
          <div>
            <h3>You order</h3>
            <span>You build a unique product list suited to Your needs.</span>
          </div>
          <div>
            <h3>We prepare</h3>
            <span>
              Our employees gather products for You, and we inform You on every
              step of the way.
            </span>
          </div>
          <div>
            <h3>You receive</h3>
            <span>
              You receive Your package almost instantly to given address. Its
              protected and sealed for safety.
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
