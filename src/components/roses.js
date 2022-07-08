import React, { useEffect, useState } from "react";
import "../styles/roses.css";
import petal from "../images/petal.png";
import rosebig from "../images/rose-big.png";
import rosesmall from "../images/rose-smol.png";
const Roses = () => {
  const [roseCount, setRoseCount] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const [timer, setTimer] = useState(500);
  const [rosesToRender, setRosesToRender] = useState([
    { offset: 0, key: 0, image: "", width: 0, blur: 0 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (rosesToRender.length > 50) {
        rosesToRender.shift();
      }
      const width = Math.floor(Math.random() * 5);
      const offset = Math.floor(Math.random() * 100);
      const key = offset + Math.floor(Math.random() * 100000);
      const image = "rose";
      let blur;
      if (width == 5 || width == 4) {
        blur = 0;
      } else if (width == 3) {
        blur = 2;
      } else if (width == 2) {
        blur = 3;
      } else if (width == 1) {
        blur = 5;
      }

      rosesToRender.push({ offset, key, image, width, blur });
      setRosesToRender([...rosesToRender]);
      setRoseCount(roseCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rose-container">
      {rosesToRender.map(({ key, rose, offset, width, blur }) => (
        <div
          style={{ marginLeft: `${offset}%` }}
          className="rose"
          key={key}
          offset={offset}
        >
          <img
            style={{ width: `${width}rem`, filter: `blur(${blur}px)` }}
            id="petal"
            src={petal}
            alt="petal"
          />
        </div>
      ))}
    </div>
  );
};
export default Roses;
