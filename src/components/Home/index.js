/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  const nameArray = ["", "M", "a", "t", "t", "."];
  const jobArray1 = ["I", "", "b", "u", "i", "l", "d", "", "t", "h", "i", "n", "g", "s", "", "f", "o", "r"];
  const jobArray2 = ["t", "h", "e", "", "w", "e", "b", "."];

  React.useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="new-color">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={28}
            />
          </h1>
          <Link to="/work" className="flat-button">LEARN MORE</Link>
        </div>
        <Logo />
      </div>
      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Home;
