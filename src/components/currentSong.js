import React, { useEffect, useState } from "react";
import "../styles/currentSong.css";

const CurrentSong = () => {
  return (
    <div className="current-song-container">
      <div className="current-song-smaller-container">
        <iframe
          className="currentSong"
          src="https://open.spotify.com/embed/track/3BlBvioz11ieGlLti9MgOw?utm_source=generator&theme=0"
          width="100%"
          height="380px"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div id="block">
        <p>Hunter of Lost Souls</p>
        <p>Meteor</p>
      </div>
    </div>
  );
};

export default CurrentSong;
