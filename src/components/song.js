import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "../music/alter.mp3";
import image from "../images/alter.jpg";
import "../styles/song.css";
import platform from "platform";
const Song = (props) => {
  useEffect(() => {
    console.log(platform.name);
  });
  return (
    <div className="song">
      <h1>Current Banger</h1>
      <img src={image} alt="alter" class="song-image" />
      <ReactAudioPlayer
        style={
          platform.name == "Chrome"
            ? { backgroundColor: "white" }
            : { backgroundColor: "black" }
        }
        id="audio"
        src={song}
        autoPlay
        volume={0.05}
        controls
      />
      <div className="song-description">
        <p id="name">losing my mind</p>
        <p id="artist">Alter/Ego, enjoii, luna.moon</p>
      </div>
    </div>
  );
};
export default Song;
