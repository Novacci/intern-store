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
      <div className="flex flex-col gap-16 font-family: itc-avant-garde-gothic-pro, sans-serif p-6 md:flex-row">
        <div className="flex my-4 flex-col gap-12 ">
          <div>
            <h3 className="text-[rgb(0,193,137)] mt-0 font-bold">
              How it works
            </h3>
            <h4 className="text-[1.8rem] text-[rgb(64,54,54)] opacity-80">
              On-demand and tailored to you
            </h4>
            <span>
              Tell us what You need, how many You need, and when You need.
              You'll then receive a package straight to Your doosteps.
            </span>
          </div>
          <div>
            <div className="relative">
              <p className="pl-[1.2rem] before:content-[''] before:bg-green-600 before:absolute before:opacity-20 before:left-[-7px] before:w-[3.75rem] before:h-[3.25rem] before:rounded-[2rem] before:-top-3.5">
                How it works
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex gap-12 items-center">
            <Image height={60} src={stageOne} alt="stageOne" />
            <div className="flex flex-col">
              <h3 className="text-[rgb(0,193,137)] m-0 font-bold">You order</h3>
              <span>You build a unique product list suited to Your needs.</span>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <Image height={60} src={stageTwo} alt="stageTwo" />
            <div className="flex flex-col ">
              <h3 className="text-[rgb(0,193,137)] m-0 font-bold">
                We prepare
              </h3>
              <span>
                Our employees gather products for You, and we inform You on
                every step of the way.
              </span>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <Image height={60} src={stageThree} alt="stageThree" />
            <div className="flex flex-col ">
              <h3 className="text-[rgb(0,193,137)] m-0 font-bold">
                You receive
              </h3>
              <span>
                You receive Your package almost instantly to given address. Its
                protected and sealed for safety.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
