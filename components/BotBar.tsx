import Link from 'next/link';

export default function BotBar() {
  return (
    <div className="flex max-w-[900px] min-w-[360px] justify-between items-center h-[55px] px-5 py-0 border-b-[#9e9e9e] border-b border-solid">
      <Link
        href="/cactuses"
        className="no-underline text-[black] hover:opacity-50 hover:transition-opacity hover:duration-[0.5s] hover:ease-[ease]
  font-family: itc-avant-garde-gothic-pro, sans-serif"
      >
        <span>cactuses</span>
      </Link>
      <Link
        href="/plants"
        className="no-underline text-[black] hover:opacity-50 hover:transition-opacity hover:duration-[0.5s] hover:ease-[ease]
  font-family: itc-avant-garde-gothic-pro, sans-serif"
      >
        <span>plants</span>
      </Link>
      <Link
        href="/contact"
        className="no-underline text-[black] hover:opacity-50 hover:transition-opacity hover:duration-[0.5s] hover:ease-[ease]
  font-family: itc-avant-garde-gothic-pro, sans-serif"
      >
        <span>contact</span>
      </Link>
      <Link
        href="/about"
        className="no-underline text-[black] hover:opacity-50 hover:transition-opacity hover:duration-[0.5s] hover:ease-[ease] font-family: itc-avant-garde-gothic-pro, sans-serif"
      >
        <span>about us</span>
      </Link>
    </div>
  );
}
