import React from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./index.scss";
import LoginApp from "../../assets/images/login_app.png";
import SpotifyApp from "../../assets/images/spotify_app.png";
import PortfolioSite from "../../assets/images/portfolio_site.png";
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
      <div className="work">
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
      <div className="wrapper">
        <div className="grid-header">
          <h1>RECENT PROJECTS</h1>
        </div>

        {/* PROJECT #1 -- LOGIN APPLICATION */}
        <div className='grid-container-right'>
          <div className='grid-item-right'>
            <a href="#"><img src={LoginApp} alt="Login App" /></a>
          </div>
          <div className='grid-item-right'>
            <h5>Featured Project</h5>
            <h3>LOGIN APPLICATION</h3>
          </div>
          <div className='grid-item-right'>
            <span>A simple login application that allows the user
            to create a profile page and upload an avatar.</span>
          </div>
          <div className='grid-item-right'>
            <div>
              <span>Next.js</span>
              <span>React</span>
              <span>Chakra-UI</span>
              <span>Supabase</span>
            </div>
            <div className="grid-links">
              <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/midcenturydude7/next-login-chakra-ui-prototype">
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
          <div className='grid-item-right'>
            <div className="grid-button">
              <Link to="#" className="button">CASE STUDY</Link>
            </div>
          </div>
        </div>

        {/* PROJECT #2 -- SPOTIFY API APPLICATION */}
        <div className='grid-container-left'>
          <div className='grid-item-left'>
            <h5>Featured Project</h5>
            <h3>SPOTIFY API APPLICATION</h3>
          </div>
          <div className='grid-item-left'>
            <div className='grid-item-right'>
              <a href="#"><img src={SpotifyApp} alt="Login App" /></a>
            </div>
          </div>
          <div className='grid-item-left'>
            <span>Web application that grabs personalized Spotify data with the help of Node.js, Express, React, Styled Components, and the Spotify API.</span>
          </div>
          <div className='grid-item-left'>
            <div>
              <span>Node.js</span>
              <span>Express</span>
              <span>React</span>
              <span>CSS</span>
              <span>Heroku</span>
            </div>
            <div className="grid-links">
              <span>
                <a target="_blank" rel="noreferrer" href="#">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </span>
              <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/midcenturydude7/nodejs-react-spotify-app">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </span>
            </div>
          </div>
          <div className='grid-item-left'>
            <div className="grid-button">
              <Link to="#" className="button">CASE STUDY</Link>
            </div>
          </div>
        </div>

        {/* PROJECT #3 -- PORTFOLIO WEBSITE */}
        <div className='grid-container-right'>
          <div className='grid-item-right'>
            <a href="#"><img src={PortfolioSite} alt="Login App" /></a>
          </div>
          <div className='grid-item-right'>
            <h5>Featured Project</h5>
            <h3>PORTFOLIO WEBSITE</h3>
          </div>
          <div className='grid-item-right'>
            <span>Click on the &apos;Case Study&apos; button below for a detailed overview of the technologies used and obstacles I overcame to build this sucker. It remains a work in progress!</span>
          </div>
          <div className='grid-item-right'>
            <div>
              <span>React</span>
              <span>SASS</span>
              <span>Netlify</span>
              <span></span>
            </div>
            <div className="grid-links">
              <span>
                <a target="_blank" rel="noreferrer" href="https://github.com/midcenturydude7/react-portfolio-animations-app">
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
          <div className='grid-item-right'>
            <div className="grid-button">
              <Link to="#" className="button">CASE STUDY</Link>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Work;
