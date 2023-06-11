import React from 'react';
import login from '../assets/login.svg';
import Image from 'next/image';

export default function Login() {
  return (
    <div>
      <Image src={login} alt="login" />
    </div>
  );
}
