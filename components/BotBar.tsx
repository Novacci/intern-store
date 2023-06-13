import Link from 'next/link';
import '../app/styles/BotBar.scss';

export default function BotBar() {
  return (
    <div className="links-position">
      <Link href="/cactuses">
        <span>cactuses</span>
      </Link>
      <Link href="/plants">
        <span>plants</span>
      </Link>
      <Link href="/contact">
        <span>contact</span>
      </Link>
      <Link href="/about">
        <span>about us</span>
      </Link>
    </div>
  );
}
