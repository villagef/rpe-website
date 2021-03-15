import React from "react";
import Fade from "react-reveal/Fade";
import T from "../T";

import Mail from '../img/icons/mail.svg';

export default function Contact() {
  const handleSend = () => {
    window.open("mailto:rpe@rp-eng.com?subject=Subject&body=%20");
  };
  return (
    <>
      <section className="contactWrapper section">
        <div className="contact-image-container">
          <div className="puzzles-contact">
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
          </div>
          <p className="vemap-tag"><a href="https://vemaps.com/world/wrld-17">World Map</a> by Vemaps.com</p>
        </div>
        <div className="contact-content-container">
          <Fade bottom>
            <div className="contact-container">
              <div className="contact-address-us row">
                <div className="address-content">
                  <ul>
                    <li className="country-name">United States</li>

                    <li>2701 Cambridge Court</li>
                    <li>Auburn Hills, MI 48326</li>
                    <li>
                      <img src={Mail} style={{width: "18px", marginRight: "5px"}} alt='envelope icon'></img>
                      <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-container row">
                <h1>
                  <i className="fas fa-minus"></i> <T label={"contactTitle"} />{" "}
                  <i className="fas fa-minus"></i>
                </h1>
                <button onClick={handleSend}>
                  <T label={"contactBtn"} />
                </button>
              </div>
              <div className="contact-address-pl row">
                <div className="address-content">
                  <ul>
                    <li className="country-name">Poland</li>
                    <li>Legnicka 55f</li>
                    <li>50-204 Wroclaw</li>
                    <li>
                      <img src={Mail} style={{width: "18px", marginRight: "5px"}} alt='envelope icon'></img>
                      <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
