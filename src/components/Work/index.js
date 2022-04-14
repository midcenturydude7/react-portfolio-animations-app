import React from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

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
          <h1>Some things I&apos;ve built:</h1>
        </div>
        <div className="grid-content-container-right">
          <div className="grid-content-card">Card One - a screenshot image</div>
          <div className="grid-content-card"></div>
          <div className="grid-content-card">A simple login application that allows the user
            to create a profile page and upload an avatar.
          </div>
          <div className="grid-content-card"></div>
        </div>
      </div>

      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Work;
