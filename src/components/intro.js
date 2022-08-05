import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const delay = 0.5;
  const delayShort = 2;
  const duration = 2;
  const durationShort = 1;
  const transition = {
    duration: duration,
    delay: delay,
    ease: "easeInOut",
    type: "tween",
  };
  const transitionShort = {
    duration: durationShort,
    delay: delayShort,
    ease: "easeIn",
    type: "tween",
  };
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{ duration: 1, delay: 3.2 }}
      id="bg-intro"
    >
      <div className="logo-right">
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 1px)",
            left: "calc(50% - 11px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="line-mid"
          style={{
            position: "absolute",
            top: "calc(50% - 35px)",
            left: "calc(50% + 24.5px)",
          }}
          initial={{ scaleY: 0, rotate: 0 }}
          animate={{
            scaleY: 1,
            rotate: 0,
          }}
          transition={transitionShort}
        ></motion.div>
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 50px)",
            left: "calc(50% - 11px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="line-long mid"
          style={{
            position: "absolute",
            top: "calc(50% + 87px)",
            left: "calc(50% + 14px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>

        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 127px)",
            left: "calc(50% - 11px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
      </div>
      <div className="logo-left">
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 1px)",
            left: "calc(50% - 13px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="line-short"
          style={{
            position: "absolute",
            top: "calc(50% - 85px)",

            left: "calc(50% + 23px)",
          }}
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
          }}
          transition={transitionShort}
        ></motion.div>
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 50px)",
            left: "calc(50% - 13px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 76px)",
            left: "calc(50% - 13px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="line-short"
          style={{
            position: "absolute",
            top: "calc(50% - 10px)",
            left: "calc(50% + 23px)",
            height: "55px",
          }}
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
          }}
          transition={transitionShort}
        ></motion.div>
        <motion.div
          className="line-long"
          style={{
            position: "absolute",
            top: "calc(50% + 127px)",
            left: "calc(50% - 13px)",
          }}
          initial={{ scaleX: 0, rotate: 0 }}
          animate={{ scaleX: 1, rotate: 45 }}
          transition={transition}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
