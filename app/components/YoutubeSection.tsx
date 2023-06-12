import React from 'react';
import '../styles/YoutubeSection.scss';
import Link from 'next/link';

export default function YoutubeSection() {
  return (
    <div className="youtube-container">
      <h2>our youtube channel</h2>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/i810CxN5Q6Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Link href="/">
        <span>subscribe</span>
      </Link>
    </div>
  );
}
