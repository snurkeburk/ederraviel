import "./App.css";
import About from "./components/about";
import CurrentSong from "./components/currentSong";
import Name from "./components/name";
import Pictures from "./components/pictures";
import Playlist from "./components/playlist";
import Roses from "./components/roses";
import Social from "./components/social";
import Song from "./components/song";
import img from "./images/image01.png";
import plane from "./images/planee.jpg";
import tea from "./images/tea.jpg";
import food from "./images/food.jpg";
import about from "./images/about.png";
import beer from "./images/beer.jpg";
import train from "./images/train.jpg";
import leaves from "./images/leaves.png";
import jasper from "./images/jasper.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Intro from "./components/intro";
import platform from "platform";

import wingview from "./images/wingview.jpg";
import movies from "./images/movies.jpg";
import skagen from "./images/skagen.jpg";
import teasnur from "./images/teasnur.jpg";
import snurderra from "./images/snurderra.jpg";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
      <Intro />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          platform.name == "Chrome"
            ? { duration: 0.5, delay: 3.2 }
            : { duration: 0.5, delay: 2.8 }
        }
        className="App-header"
      >
        <Roses />
        <div id="bg-blur"></div>

        <Name name="Ederraviel" />
        <motion.div
          whileHover={{ x: 0 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="pic-section"
        >
          <Pictures
            name={"Toast Skagen!"}
            description={"Made with love by Snur <3"}
            date={"2022-07-24"}
            number={3}
            image={skagen}
            hover={hover}
          />
          <Pictures
            name={"Bubble tea!!"}
            description={"Bubble tea with Snur :)"}
            date={"2022-07-24"}
            number={2}
            image={teasnur}
            hover={hover}
          />
          <Pictures
            name={"Fuck Eurowings"}
            description={"Goin back home"}
            date={"2022-07-25"}
            number={1}
            image={wingview}
            hover={hover}
          />
          <Pictures
            name={"Filmstaden Scandinavia"}
            description={"Mmmmmm"}
            date={"2022-07"}
            number={6}
            image={movies}
            hover={hover}
          />
          <Pictures
            name={"Train"}
            description={"Fog wooooow!"}
            date={"2022-05-27"}
            number={5}
            image={train}
            hover={hover}
          />
          <Pictures
            name={"Snurderra <3"}
            description={""}
            date={""}
            number={4}
            image={snurderra}
            hover={hover}
          />
        </motion.div>
        <div className="mid-section">
          {/*
          <CurrentSong />
          <About />
          <Playlist />
           */}

          <Song />
        </div>

        <div className="right-section">
          <Social icon="spotify" />
          <Social icon="discord" />
          <Social icon="steam" />
          <Social icon="instagram" />
        </div>
      </motion.header>
    </div>
  );
}

export default App;
