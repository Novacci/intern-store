import React from 'react';
import login from '../assets/login.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <Link href="/login">
        <Image src={login} alt="login" />
      </Link>
    </div>
  );
}
