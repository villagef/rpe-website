import React from "react";

import Management from "../img/icons/management.svg";
import Business from "../img/icons/business.svg";
import IT from "../img/icons/it.svg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

import T from "../T";

export default function Operations() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="operationsWrapper section">
        <div className="operations-thumbnail-section">
          <div className="operations-thumbnail-image">
            <img src='https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/data.png' alt='operations vector graphic'></img>
          </div>
          <div className="operations-thumbnail-content">
            <Fade bottom>
              <h1>
                <span><T label={"operationsTitleFL"} /></span><T label={"operationsTitle"} />
              </h1>
              <p><T label={"operationsSubtitle"} /></p>
            </Fade>
          </div>
          <div className="home-right-line-top absolute">
            <Slide top>
              <span></span>
            </Slide>
          </div>
          <div
            className="home-right-line-middle absolute"
            onClick={handleScroll}
          >
            <span>
              <Jello>
                <i className="fas fa-angle-double-down"></i>
              </Jello>
            </span>
          </div>
          <div className="home-right-line-bottom absolute">
            <Slide bottom>
              <span></span>
            </Slide>
          </div>
        </div>
        <div className="analytics-content-section2">
          <div className="analytics-content-wrapper2">
            <Fade bottom cascade>
              <div className="title2">
                <h1><T label={"operationsSec2Title"} /></h1>
                <p>
                <T label={"operationsSec2Subtitle"} />
                </p>
              </div>
            </Fade>
            <div className="cards2">
              <Fade bottom>
                <div className="card2">
                  <img src={Management}></img>
                  <h3><T label={"operationsSec2Card1Title"} /></h3>
                  <p>
                  <T label={"operationsSec2Card1Content"} />
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card2">
                  <img src={Business}></img>
                  <h3><T label={"operationsSec2Card2Title"} /></h3>
                  <p>
                  <T label={"operationsSec2Card2Content"} />
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card2">
                  <img src={IT}></img>
                  <h3><T label={"operationsSec2Card3Title"} /></h3>
                  <p>
                  <T label={"operationsSec2Card3Content"} />
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
