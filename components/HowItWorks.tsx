'use client';
import React from 'react';
import Image from 'next/image';
import stageOne from '../public/images/main-page-imgs/stage1.png';
import stageTwo from '../public/images/main-page-imgs/stage2.png';
import stageThree from '../public/images/main-page-imgs/stage3.png';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <>
      <div
        className="flex
  font-family: itc-avant-garde-gothic-pro, sans-serif"
      >
        <div className="flex flex-col gap-12 w-6/12 h-[450px]">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-[rgb(0,193,137)] mt-0">How it works</h3>
            <h2 className="text-[1.8rem] text-[rgb(64,54,54)] opacity-80">
              On-demand and tailored to you
            </h2>
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
            <div className="relative">
              <p className="pl-[1.2rem] before:content-[''] before:bg-green-600 before:absolute before:opacity-20 before:left-[-7px] before:w-[3.75rem] before:h-[3.25rem] before:rounded-[2rem] before:-top-3.5">
                How it works
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-8 items-center px-[25px] py-0"
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
          className="flex flex-col justify-between w-6/12 h-[450px]"
        >
          <div>
            <h3 className="text-[rgb(0,193,137)] m-0">You order</h3>
            <span>You build a unique product list suited to Your needs.</span>
          </div>
          <div>
            <h3 className="text-[rgb(0,193,137)] m-0">We prepare</h3>
            <span>
              Our employees gather products for You, and we inform You on every
              step of the way.
            </span>
          </div>
          <div>
            <h3 className="text-[rgb(0,193,137)] m-0">You receive</h3>
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
