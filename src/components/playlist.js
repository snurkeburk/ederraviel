import React from "react";
import "../styles/playlist.css";
const Playlist = () => {
  return (
    <div className="playlist-container">
      <iframe
        style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/0GIEEiAOqIW7UTptmT41Jy?utm_source=generator&theme=0"
        width="100%"
        height="300px"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Playlist;
