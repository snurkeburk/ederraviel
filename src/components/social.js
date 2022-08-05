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
    if (window.innerWidth < 600) {
      setSmallWindow(true);
    } else {
      setSmallWindow(false);
    }
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
        visible: { opacity: 1, x: -20, width: "5rem" },
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
  const itemDiscord = smallWindow
    ? {
        visible: { opacity: 1, x: -20, y: -0, width: "9rem" },
        hidden: {
          opacity: 0,
          x: 0,
          width: "0px",
          display: "none",
        },
        visibleIcon: { opacity: 1, x: 0 },
        hiddenIcon: { opacity: 0, x: -10 },
      }
    : {
        visible: { opacity: 1, x: -180, width: "19rem" },
        hidden: { opacity: 0, x: 0, width: "0px" },
        visibleIcon: { opacity: 1, x: 0 },
        hiddenIcon: { opacity: 0, x: -100 },
      };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0px" }}
      transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
      className="social-container"
    >
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
              <a href="https://open.spotify.com/user/522ju0hoey7zisnyc60tpnuui?si=eb10da7dec8d4b73">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <a href="https://open.spotify.com/user/522ju0hoey7zisnyc60tpnuui?si=eb10da7dec8d4b73">
                Ederraviel <FiExternalLink />
              </a>
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
            className="social-description discord"
            initial={false}
            variants={itemDiscord}
            animate={hover ? "visible" : "hidden"}
            style={{ position: "absolute" }}
          >
            {smallWindow ? (
              <p
                style={{
                  paddingRight: "1rem",
                  position: "absolute",
                  left: "0px",
                  top: "40px",
                }}
              >
                Ederraviel#9999
              </p>
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
              <a href="https://steamcommunity.com/id/Ederraviel/">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <a href="https://steamcommunity.com/id/Ederraviel/">
                Ederraviel <FiExternalLink />
              </a>
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
              <a href="https://www.instagram.com/_ederraviel/">
                <FiExternalLink className="social-link" />
              </a>
            ) : (
              <a href="https://www.instagram.com/_ederraviel/">
                _ederraviel <FiExternalLink />
              </a>
            )}
            <AiFillInstagram id="instagram-expanded" />
          </motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default Social;
