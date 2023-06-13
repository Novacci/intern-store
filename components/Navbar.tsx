import React from 'react';
import MidBar from './MidBar';
import TopBar from './TopBar';
import BotBar from './BotBar';
import '../app/styles/Navbar.scss';

export default function Navbar() {
  return (
    <nav className="sticky">
      <TopBar />
      <MidBar />
      <BotBar />
    </nav>
  );
}
