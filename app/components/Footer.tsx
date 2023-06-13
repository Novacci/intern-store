import React from 'react';
import '../styles/Footer.scss';
import Image from 'next/image';
import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import instagram from '../assets/icons/instagram.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
          <Image width={12.5} height={20} src={facebook} alt="facebook_icon" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
          <Image
            width={17.5}
            height={20}
            src={instagram}
            alt="instagram_icon"
          />
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/">
          <Image width={22.5} height={20} src={youtube} alt="youtube_icon" />
        </a>
      </div>
      <div className="flex-position">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <p>Copyright © 2023 Novacci</p>
      </div>
    </footer>
  );
}
