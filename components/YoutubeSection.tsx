import React from 'react';
import '../app/styles/YoutubeSection.scss';

export default function YoutubeSection() {
  return (
    <div className="youtube-container">
      <h2>our youtube channel</h2>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/i810CxN5Q6Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.youtube.com/@BrunoSaraviaPhotography?sub_confirmation=1"
      >
        subscribe
      </a>
    </div>
  );
}
