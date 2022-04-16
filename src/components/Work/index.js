import React from "react";
import Loader from "react-loaders";
import "./index.scss";
// import LoginApp from "../../assets/images/login_app.png";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// const logo = document.querySelectorAll("#logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

const Work = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  const caringArray = ["", "c", "a", "r", "i", "n", "g", "."];

  React.useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "h", "a", "r", "i", "n ", "g", "", "i", "s"]}
              idx={15}
            />
            <span className="new-color">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={caringArray}
                idx={21}
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-header">
          <h1>RECENT PROJECTS</h1>
        </div>
        <div className="grid-content-container-right">
          <div className="grid-content-card">
            [Placeholder for the image]
            {/* <img src={LoginApp} alt="Login App" /> */}
          </div>
          <div className="grid-content-card" id="header">
            <h5>Featured project</h5>
            <h3>LOGIN APPLICATION</h3>
          </div>
          <div className="grid-content-card">
            <span>A simple login application that allows the user
            to create a profile page and upload an avatar.</span>
          </div>
          <div className="grid-content-card">
            <div>
              <span>Next.js</span>
              <span>React</span>
              <span>Chakra-UI</span>
              <span>Supabase</span>
            </div>
            <div className="grid-links">
              <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/midcenturydude7">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </span>
              <span>
                <a target="_blank" rel="noreferrer" href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Work;
