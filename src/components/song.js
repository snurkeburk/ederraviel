import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "../music/alter.mp3";
import image from "../images/alter.jpg";
import "../styles/song.css";
const Song = (props) => {
  return (
    <div className="song">
      <h1>Current Banger</h1>
      <img src={image} alt="alter" class="song-image" />
      <ReactAudioPlayer id="audio" src={song} autoPlay volume={0.05} controls />
      <div className="song-description">
        <p id="name">losing my mind</p>
        <p id="artist">Alter/Ego, enjoii, luna.moon</p>
      </div>
    </div>
  );
};
export default Song;
