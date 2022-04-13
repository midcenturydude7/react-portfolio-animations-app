import React from "react";
import Loader from "react-loaders";
import "./index.scss";

// const logo = document.querySelectorAll("#logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

const Work = () => {
  return (
    <>
      <div className="container work-page">
        <div className="grid-container">
          <div className="grid">
            <span>Grid Item - One Column</span>
          </div>
          <div className="grid">
            <span>Grid Item - Two Column</span>
            <span>Grid Item - Two Column</span>
          </div>
          <div className="grid">
            <span>Grid Item - Three Column</span>
            <span>Grid Item - Three Column</span>
            <span>Grid Item - Three Column</span>
          </div>
          <div className="grid">
            <span>Grid Item - Four Column</span>
            <span>Grid Item - Four Column</span>
            <span>Grid Item - Four Column</span>
            <span>Grid Item - Four Column</span>
          </div>
        </div>

      </div>
      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Work;
