import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/pictures.css";
import { AiOutlineClose } from "react-icons/ai";
const Pictures = (props) => {
  const [rotation, setRotation] = useState(50);
  const [x, setX] = useState(0);
  const [cardClicked, setCardClicked] = useState(false);
  const [smallWindow, setSmallWindow] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 600) {
      setSmallWindow(true);
    } else {
      setSmallWindow(false);
    }
    // add event listener to window size
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 600) {
        setSmallWindow(true);
      } else {
        setSmallWindow(false);
      }
    });
    switch (props.number) {
      case 1:
        // if screen width > 600px
        if (!smallWindow) {
          setRotation(10);
          setX(75);
        } else {
          setX(70);
        }

        break;
      case 2:
        if (!smallWindow) {
          setRotation(20);
          setX(100);
        } else {
          setX("25vw");
        }
        break;
      case 3:
        if (!smallWindow) {
          setRotation(30);
          setX(125);
        } else {
          setX("30vw");
        }
        break;
      case 4:
        if (!smallWindow) {
          setRotation(-10);
          setX(-75);
        } else {
          setX(-70);
        }
        break;
      case 5:
        if (!smallWindow) {
          setRotation(-20);
          setX(-100);
        } else {
          setX("-25vw");
        }

        break;
      case 6:
        if (!smallWindow) {
          setRotation(-30);
          setX(-125);
        } else {
          setX("-30vw");
        }
        break;
    }
  });

  if (props.number == 1 || props.number == 2 || props.number == 3) {
    return (
      <div>
        <motion.div className="picture-container">
          <motion.div
            className="picture-card"
            initial={{ rotate: 0, x: 0, y: 75 }}
            animate={
              props.number == 1
                ? {
                    rotate: rotation,
                    x: x,
                    y: 75,
                    filter: "brightness(0.4)",
                  }
                : props.number == 2
                ? {
                    rotate: rotation,
                    x: x,
                    y: 100,
                    filter: "brightness(0.2)",
                  }
                : {
                    rotate: rotation,
                    x: x,
                    y: 125,
                    filter: "brightness(0.0)",
                  }
            }
            whileHover={
              props.number == 1 && !smallWindow
                ? { x: x + 200, scale: 1.1, rotate: 0, filter: "blur(0px)" }
                : props.number == 2 && !smallWindow
                ? {
                    x: x + 200,
                    scale: 1.1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 75,
                  }
                : props.number === 3 && !smallWindow
                ? {
                    x: x + 200,
                    scale: 1.1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 75,
                  }
                : {}
            }
            transition={{ type: "tween", ease: "easeInOut" }}
            onClick={() => setCardClicked(!cardClicked)}
          >
            <motion.img src={props.image} alt="picture" className="picture" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {cardClicked && (
            <motion.div
              className="show-picture-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onTap={() => setCardClicked(!cardClicked)}
            >
              <div>
                <motion.div
                  className="big-pic-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1>{props.name}</h1>
                  <p id="date">{props.date}</p>
                  <p id="description">{props.description}</p>
                </motion.div>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  /* onTap={() => setCardClicked(false)}
                whileTap={{ scale: 0.9 }}*/
                  className="big-pic"
                  src={props.image}
                  alt={"image number " + props.number}
                />
                <motion.div className="exit-big-picture-container">
                  <button onClick={() => setCardClicked(false)}>
                    <AiOutlineClose />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  if (props.number == 4 || props.number == 5 || props.number == 6) {
    return (
      <div>
        <motion.div className="picture-container">
          <motion.div
            className="picture-card"
            initial={{ rotate: 0, x: 0, y: 75 }}
            animate={
              props.number == 4
                ? {
                    rotate: rotation,
                    x: x,
                    y: 75,
                    filter: "brightness(0.4)",
                  }
                : props.number == 5
                ? {
                    rotate: rotation,
                    x: x,
                    y: 100,
                    filter: "brightness(0.2)",
                  }
                : {
                    rotate: rotation,
                    x: x,
                    y: 125,
                    filter: "brightness(0.0)",
                  }
            }
            whileHover={
              props.number == 4 && !smallWindow
                ? { x: x - 200, scale: 1.1, rotate: 0, filter: "blur(0px)" }
                : props.number == 5 && !smallWindow
                ? {
                    x: x - 200,
                    scale: 1.1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 75,
                  }
                : props.number === 6 && !smallWindow
                ? {
                    x: x - 200,
                    scale: 1.1,
                    rotate: 0,
                    filter: "blur(0px)",
                    y: 75,
                  }
                : {}
            }
            transition={{ type: "tween", ease: "easeInOut" }}
            onClick={() => setCardClicked(!cardClicked)}
          >
            <motion.img src={props.image} alt="picture" className="picture" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {cardClicked && (
            <motion.div
              className="show-picture-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onTap={() => setCardClicked(!cardClicked)}
            >
              <div>
                <motion.div
                  className="big-pic-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1>{props.name}</h1>
                  <p id="date">{props.date}</p>
                  <p id="description">{props.description}</p>
                </motion.div>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  /* onTap={() => setCardClicked(false)}
                whileTap={{ scale: 0.9 }}*/
                  className="big-pic"
                  src={props.image}
                  alt={"image number " + props.number}
                />
                <motion.div className="exit-big-picture-container">
                  <button onClick={() => setCardClicked(false)}>
                    <AiOutlineClose />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
};

export default Pictures;
