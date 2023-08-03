import React from 'react';
import Image from 'next/image';
import facebook from '../public/images/icons/facebook.svg';
import youtube from '../public/images/icons/youtube.svg';
import instagram from '../public/images/icons/instagram.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center text-[rgba(34,34,34,0.4)] mt-12
    font-family: itc-avant-garde-gothic-pro, sans-serif"
    >
      <div>
        <Link
          className="no-underline text-[rgba(34,34,34,0.4)] cursor-pointer "
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/"
        >
          <Image
            width={12.5}
            height={20}
            src={facebook}
            alt="facebook_icon"
            className="px-8 py-0"
          />
          d
        </Link>
        <Link
          className="no-underline text-[rgba(34,34,34,0.4)] cursor-pointer"
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/"
        >
          <Image
            width={17.5}
            height={20}
            src={instagram}
            alt="instagram_icon"
            className="px-8 py-0 "
          />
          c
        </Link>
        <Link
          className="no-underline text-[rgba(34,34,34,0.4)] cursor-pointer"
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/"
        >
          b
          <Image
            width={22.5}
            height={20}
            src={youtube}
            alt="youtube_icon"
            className="px-8 py-0"
          />
          a
        </Link>
      </div>
      <div className="flex flex-col items-center mx-0 my-12">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <p className="m-0 p-2">Copyright © 2023 Novacci</p>
      </div>
    </footer>
  );
}
