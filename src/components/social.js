import React, { useEffect, useState } from "react";
import "../styles/social.css";
import { FaSpotify, FaDiscord, FaSteam } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { motion } from "framer-motion";

const Social = (props) => {
  const [icon, setIcon] = useState(props.icon);
  const [hover, setHover] = useState(false);
  const [smallWindow, setSmallWindow] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 600) {
        setSmallWindow(true);
      } else {
        setSmallWindow(false);
      }
    });
    setIcon(props.icon);
  });

  const item = smallWindow
    ? {
        visible: { opacity: 1, x: -40, width: "7rem" },
        hidden: { opacity: 0, x: 0, width: "0px" },
        visibleIcon: { opacity: 1, x: 0 },
        hiddenIcon: { opacity: 0, x: -10 },
      }
    : {
        visible: { opacity: 1, x: -180, width: "18rem" },
        hidden: { opacity: 0, x: 0, width: "0px" },
        visibleIcon: { opacity: 1, x: 0 },
        hiddenIcon: { opacity: 0, x: -100 },
      };

  return (
    <div className="social-container">
      {icon === "spotify" ? (
        <motion.div
          className="social-item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            initial={false}
            variants={item}
            animate={!hover ? "visibleIcon" : "hiddenIcon"}
          >
            <FaSpotify id="spotify" />
          </motion.div>
          <motion.div
            className="social-description"
            initial={false}
            variants={item}
            animate={hover ? "visible" : "hidden"}
          >
            {smallWindow ? (
              <a href="#">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <p>Ederraviel</p>
            )}
            <FaSpotify id="spotify-expanded" />
          </motion.div>
        </motion.div>
      ) : icon === "discord" ? (
        <motion.div
          className="social-item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            initial={false}
            variants={item}
            animate={!hover ? "visibleIcon" : "hiddenIcon"}
          >
            <FaDiscord id="discord" />
          </motion.div>
          <motion.div
            className="social-description"
            initial={false}
            variants={item}
            animate={hover ? "visible" : "hidden"}
          >
            {smallWindow ? (
              <a href="#">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <p>Ederraviel#9999</p>
            )}
            <FaDiscord id="discord-expanded" />
          </motion.div>
        </motion.div>
      ) : icon === "steam" ? (
        <motion.div
          className="social-item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            initial={false}
            variants={item}
            animate={!hover ? "visibleIcon" : "hiddenIcon"}
          >
            <FaSteam id="steam" />
          </motion.div>
          <motion.div
            className="social-description"
            initial={false}
            variants={item}
            animate={hover ? "visible" : "hidden"}
          >
            {smallWindow ? (
              <a href="#">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <p>Ederraviel</p>
            )}
            <FaSteam id="steam-expanded" />
          </motion.div>
        </motion.div>
      ) : icon === "instagram" ? (
        <motion.div
          className="social-item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.div
            initial={false}
            variants={item}
            animate={!hover ? "visibleIcon" : "hiddenIcon"}
          >
            <AiFillInstagram id="instagram" />
          </motion.div>
          <motion.div
            className="social-description"
            initial={false}
            variants={item}
            animate={hover ? "visible" : "hidden"}
          >
            {smallWindow ? (
              <a href="#">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <p>_ederraviel</p>
            )}
            <AiFillInstagram id="instagram-expanded" />
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Social;
