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
import { motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [hover, setHover] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
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
            name={"Onigiris"}
            description={
              "Onigiris is a Japanese anime series that debuted in 2017."
            }
            date={"2022-07-07"}
            number={3}
            image={food}
            hover={hover}
          />
          <Pictures
            name={"Airplaneee!"}
            description={"A plane that flies"}
            date={"2022-06-22"}
            number={2}
            image={plane}
            hover={hover}
          />
          <Pictures
            name={"Bubble tea :)"}
            description={"Bobel tea wif Kev."}
            date={"2022-07-04"}
            number={1}
            image={tea}
            hover={hover}
          />
          <Pictures
            name={"Annisokay :D"}
            description={"Beer is good!"}
            date={"2022-05-27"}
            number={6}
            image={beer}
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
            name={"About me :)"}
            description={""}
            date={""}
            number={4}
            image={about}
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
      </header>
    </div>
  );
}

export default App;
