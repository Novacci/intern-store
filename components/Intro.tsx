import React from 'react';
import '../app/styles/Intro.scss';
import Link from 'next/link';

export default function Intro() {
  return (
    <div className="intro-container-style">
      <h2>Hey, we're InternStore</h2>
      <p>
        We are a flower and cactus shop born out of a passion for the beauty of
        nature. Based in Ford Lauderdale, Florida, we provide unique plants that
        add natural charm to your spaces. Join our community of plant
        enthusiasts and discover the magic of nature at our store.
      </p>
      <Link href="/about">
        <span>more about us</span>
      </Link>
    </div>
  );
}
