'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function YoutubeSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[rgb(0,193,137)] m-0 pt-64 pb-12">
          our youtube channel
        </h2>
      </motion.div>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/i810CxN5Q6Q"
        title="YouTube video player"
        className="border-[none]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <a
          rel="noreferrer"
          target="_blank"
          className="no-underline uppercase m-12 px-5 py-[22px] border-2 border-solid border-[rgb(0,193,137)] hover:bg-[rgb(0,193,137)] hover:text-[white] transition-colors duration-500 ease-in-out"
          href="https://www.youtube.com/@BrunoSaraviaPhotography?sub_confirmation=1"
        >
          subscribe
        </a>
      </motion.div>
    </div>
  );
}
