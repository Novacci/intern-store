import React from 'react';
import MidBar from './MidBar';
import TopBar from './TopBar';
import BotBar from './BotBar';

export default function Navbar() {
  return (
    <nav className="fixed bg-[white] z-[2]">
      <TopBar />
      <MidBar />
      <BotBar />
    </nav>
  );
}
