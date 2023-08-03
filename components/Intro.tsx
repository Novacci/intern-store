import React from 'react';
import Link from 'next/link';

export default function Intro() {
  return (
    <div
      className="flex flex-col items-center gap-8 mt-8 pt-10 pb-[120px] px-[15px]
    font-family: itc-avant-garde-gothic-pro, sans-serif"
    >
      <h2 className="text-[rgb(64,54,54)] opacity-80 m-0">
        Hey, we're InternStore
      </h2>
      <p className="text-[1.2rem]">
        We are a flower and cactus shop born out of a passion for the beauty of
        nature. Based in Ford Lauderdale, Florida, we provide unique plants that
        add natural charm to your spaces. Join our community of plant
        enthusiasts and discover the magic of nature at our store.
      </p>
      <Link
        className="no-underline m-12 px-5 py-[22px] border-2 border-solid border-[rgb(0,193,137)] hover:bg-[rgb(0,193,137)] hover:text-[white] transition-colors duration-500 ease-in-out;"
        href="/about"
      >
        <span className="uppercase">more about us</span>
      </Link>
    </div>
  );
}
