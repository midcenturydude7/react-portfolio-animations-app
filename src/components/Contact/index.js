/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import "./index.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  const refForm = React.useRef();

  React.useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Matt Griffes,
          <br />
          United States,
          <br />
          3418 SE Cora Dr. <br />
          Portland, OR <br />
          <span>mgriffes@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[45.492007573743884, -122.62828181401888]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.492007573743884, -122.62828181401888]}>
              <Popup>Matt lives here! Stop by for a cup of coffee and some lively conversation</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-multiple" color="#777" />
    </>
  );
};

export default Contact;
