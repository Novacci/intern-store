'use client';

import React from 'react';
import '../app/styles/YoutubeSection.scss';
import { motion } from 'framer-motion';

export default function YoutubeSection() {
  return (
    <div className="youtube-container">
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <h2>our youtube channel</h2>
      </motion.div>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/i810CxN5Q6Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="sub-position"
      >
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/@BrunoSaraviaPhotography?sub_confirmation=1"
        >
          subscribe
        </a>
      </motion.div>
    </div>
  );
}
