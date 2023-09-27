import React from 'react';

export default function MapSection() {
  return (
    <div className="flex flex-col items-center h-[700px] justify-center">
      <h2
        className="text-center text-[rgb(64,54,54)] font-normal opacity-80 pb-8
  font-family: itc-avant-garde-gothic-pro, sans-serif mt-12"
      >
        Visit us
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114618.17655766585!2d-80.21560737217096!3d26.137475969638082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90191e0f45403%3A0x58a319d61e89fe4a!2sGarden%20Center!5e0!3m2!1spl!2spl!4v1687261479057!5m2!1spl!2spl"
        width="600"
        height="450"
        className="border-[none] "
      ></iframe>
    </div>
  );
}
