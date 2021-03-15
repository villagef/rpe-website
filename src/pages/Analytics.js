import React from "react";

import Dashboard from "../img/icons/visualization.svg";
import DataComplexity from "../img/icons/transformation.svg";
import Data from "../img/icons/extraction.svg";
import Management from "../img/icons/management.svg";
import Business from "../img/icons/business.svg";
import IT from "../img/icons/it.svg";
import Strategy from "../img/icons/strategy.svg";
import Report from "../img/icons/report.svg";
import DataManagement from "../img/icons/data-management.svg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

import T from "../T";


export default function Analytics() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="analyticsWrapper section">
        <div className="analytics-thumbnail-section">
          <div className="analytics-thumbnail-image">
            <img src='https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/laptop.png' alt='digital laptop'></img>
          </div>
          <div className="analytics-thumbnail-content">
            <Fade bottom>
              <h1>
                <span>
                  <T label={"analTitleFL"} />
                </span>
                <T label={"analTitle"} />
              </h1>
              <p>
                <T label={"analSubtitle"} />
              </p>
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
        {/* ====================================CARDS======================================= */}
        <div className="analytics-content-section2">
          <div className="analytics-content-wrapper2">
            <Fade bottom cascade>
              <div className="title2">
                <h1>
                  <T label={"analsec2Title"} />
                </h1>
                <p>
                  <T label={"analsec2Subtitle"} />
                </p>
              </div>
            </Fade>
            <div className="cards2">
              <Fade bottom>
                <div className="card2">
                  <img src={Management} alt='management icon'></img>
                  <h3>
                    <T label={"analsec2Card1Title"} />
                  </h3>
                  <p>
                    <T label={"analsec2Card1Content"} />
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card2">
                  <img src={Business} alt='business icon'></img>
                  <h3>
                    {" "}
                    <T label={"analsec2Card2Title"} />
                  </h3>
                  <p>
                    <T label={"analsec2Card2Content"} />
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card2">
                  <img src={IT}  alt='laptop icon'></img>
                  <h3>
                    {" "}
                    <T label={"analsec2Card3Title"} />
                  </h3>
                  <p>
                    <T label={"analsec2Card3Content"} />
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {/* ============================OUR SERVICES============================ */}
        <div className="analytics-services-section">
          <div className="analytics-services-content">
            <Fade bottom>
              <h1>
                <T label={"analsec3Title"} />
              </h1>
              <p>
                <T label={"analsec3Subtitle"} />
              </p>
            </Fade>
          </div>
          <div className="analytics-services-cards-section">
            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img className="services-card-img" src={Strategy} alt='strategy icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    <T label={"analsec3Row1Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row1Content"} />
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Data}  alt='data extraction icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    {" "}
                    <T label={"analsec3Row2Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row2Content"} />
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={DataComplexity} alt='data complexity icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    <T label={"analsec3Row3Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row3Content"} />
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Dashboard}  alt='dashboard icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    <T label={"analsec3Row4Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row4Content"} />
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Report} alt='report icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    <T label={"analsec3Row5Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row5Content"} />
                  </p>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={DataManagement} alt='data management icon'></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>
                    <T label={"analsec3Row6Title"} />
                  </h1>
                  <p>
                    <T label={"analsec3Row6Content"} />
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* //==============================INDUSTRY EXPERTISE====================== */}
        <div className="analytics-content-section">
          <div className="analytics-industry-expertise">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                  <img src="https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/industry-expertise.png" alt='industry expertise vector'></img>
                  </Fade>
                </div>
              </div>
              <div className="wwa-col">
                <Fade bottom>
                  <div>
                    <h1>
                      <T label={"analsec4Title"} />
                    </h1>
                    <br />
                    <p>
                      <T label={"analsec4Content1"} />
                    </p>
                    <p>
                      <T label={"analsec4Content2"} />
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* ====================================ROI============================== */}
        <div className="analytics-roi-section">
          <div className="analytics-roi-wrapper">
            <div className="arw-content">
              <div className="arw-col">
                <Fade bottom>
                  <div>
                    <h1>
                      <T label={"analsec5Title"} />
                    </h1>
                    <br />
                    <p>
                      <T label={"analsec5Content1"} />
                    </p>
                    <p>
                      <T label={"analsec5Content2"} />
                    </p>
                    <p>
                      <T label={"analsec5Content2"} />
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="arw-col arw-col-img-wrapper">
                <div className="arw-col-img">
                  <Fade bottom>
                    <img src="https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/roi.png" alt='roi vector'></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
