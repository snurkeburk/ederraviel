import React from "react";
import "../styles/name.css";
import rosesmall from "../images/rose-smol.png";
import rosebig from "../images/rose-big.png";
import { motion } from "framer-motion";
const Name = (props) => {
  return (
    <div className="name-container">
      <div className="name-top">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
          src={rosesmall}
          alt="rose"
          className="rose-small one"
        />
        <h1>{props.name}</h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
          src={rosesmall}
          alt="rose"
          className="rose-small two"
        />
      </div>
      <div className="name-bottom">
        <p>21</p>
        <p>German</p>
        <p>INFJ-T</p>
      </div>
    </div>
  );
};

export default Name;
