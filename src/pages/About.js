import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import digital from "../img/icons/digital.svg";
import analytics from "../img/icons/analytics.svg";
import operations from "../img/icons/operations.svg";

import Brands from "../components/Brands";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

import gsap from "gsap";
import T from "../T";

export default function About() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let x = gsap.timeline({
      trigger: ".about-puzzles-home",
    });
    x.to(".c-puzzle:nth-of-type(2)", {
      duration: 1,
      transform: "skewX(25deg) translateZ(0)",
    });
    x.to(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 1,
        transform: "skewX(-25deg) translateZ(0)",
      },
      "-=1"
    );
  }, []);

  return (
    <>
      <section className="aboutWrapper section">
        <div className="about-thumbnail-section">
          <div className="about-puzzles-home">
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
          </div>
          <div className="about-thumbnail-image">
            <img src="https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/img/about-hands.png" alt="Photo by fauxels from Pexels"></img>
          </div>
          <div className="about-thumbnail-content">
            <Fade bottom>
              <h1>
                <span>
                  <T label={"aboutTitleFL"} />
                </span>
                <T label={"aboutTitle"} />
              </h1>
              <p>
                <T label={"aboutSubtitle"} />
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
        {/* ===================WHO WE ARE======================== */}
        <div className="about-content-section">
          <div className="about-who-we-are">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-content">
                <Fade bottom cascade>
                  <div>
                    <h1>
                      <T label={"aboutWWATitle"} />
                    </h1>
                    <p>
                      <T label={"aboutWWAContent"} />
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                    <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt='team picture'></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================WE ARE DIFFERENT======================== */}
        <div className="about-content-section3">
          <div className="about-content-wrapper3">
            <div className="title3">
              <Fade bottom cascade>
                <div>
                  <h1>
                    <T label={"aboutWADTitle"} />
                  </h1>
                  <p>
                    <T label={"aboutWADSubtitle"} />
                  </p>
                </div>
              </Fade>
            </div>
            <div className="cards-wrapper">
              <Fade bottom>
                <Link to="/analytics" onClick={handleClick}>
                  <div className="card fadeIn">
                    <div className="card-icon">
                      <img src={analytics}  alt='monitor icon'></img>
                    </div>
                    <div className="info">
                      <h1 className="title">
                        <span>
                          <T label={"aboutWADCard1TitleFL"} />
                        </span>
                        <T label={"aboutWADCard1Title"} />
                      </h1>
                      <p>Business Intelligence, Data Management, AI & ML</p>
                    </div>
                    <div className="see-button">
                      <span></span>
                      <button>
                        <T label={"aboutWADCardBtn"} />
                      </button>
                    </div>
                  </div>
                </Link>
              </Fade>
              <Fade bottom>
                <Link to="/operations" onClick={handleClick}>
                  <div className="card fadeIn">
                    <div className="card-icon">
                      <img src={operations}  alt='operations icon'></img>
                    </div>
                    <div className="info">
                      <h1 className="title">
                        <span>
                          <T label={"aboutWADCard2TitleFL"} />
                        </span>
                        <T label={"aboutWADCard2Title"} />
                      </h1>
                      <p>Environment Management, BI Platfrom Operations</p>
                    </div>
                    <div className="see-button">
                      <span></span>
                      <button>
                        <T label={"aboutWADCardBtn"} />
                      </button>
                    </div>
                  </div>
                </Link>
              </Fade>
              <Fade bottom>
                <Link to="/digital" onClick={handleClick}>
                  <div className="card fadeIn">
                    <div className="card-icon">
                      <img src={digital} alt='digital icon'></img>
                    </div>
                    <div className="info">
                      <h1 className="title">
                        <span>
                          <T label={"aboutWADCard3TitleFL"} />
                        </span>
                        <T label={"aboutWADCard3Title1"} />{" "}
                        <span>
                          <T label={"aboutWADCard3TitleSL"} />
                        </span>
                        <T label={"aboutWADCard3Title2"} />
                      </h1>
                      <p>
                        Transformation Strategy & Roadmaps, Analytics Enablement
                      </p>
                    </div>
                    <div className="see-button">
                      <span></span>
                      <button>
                        <T label={"aboutWADCardBtn"} />
                      </button>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        {/* ===================ABOUT OUR TEAM======================== */}
        <div className="about-content-section about-team-section">
          <div className="about-who-we-are">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-content">
                <Fade bottom cascade>
                  <div>
                    <h1>
                      <T label={"aboutAOTTitle"} />
                    </h1>
                    <p>
                      <T label={"aboutAOTContent"} />
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                    <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  alt='team photo'></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================KEY INDUSTRIES======================== */}
        <section className="industriesSection section">
          <div className="industries-wrapper">
            <Fade bottom>
              <h1>
                <T label={"aboutKIWSTitle"} />
              </h1>
            </Fade>
            <div className="industry-cards">
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src='https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/manufacturing.png' alt='manufacturing vector'></img>
                      <div>
                        <h3>
                          <T label={"aboutKIWSCard1Title"} />
                        </h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>
                        <T label={"aboutKIWSCard1Title"} />
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src='https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/medical.png' alt='medical vector'></img>
                      <div>
                        <h3>
                          <T label={"aboutKIWSCard2Title"} />
                        </h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>
                        <T label={"aboutKIWSCard2Title"} />
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src='https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/telecomunication.png' alt='telecominication vector'></img>
                      <div>
                        <h3>
                          <T label={"aboutKIWSCard3Title"} />
                        </h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>
                        <T label={"aboutKIWSCard3Title"} />
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        {/* ===================OUR PARTNERS======================== */}
        <div className="about-partners-section">
          <Fade bottom cascade>
            <div className="about-partners-wrapper">
              <h1>
                <T label={"aboutOPTitle"} />
              </h1>
              <p>
                <T label={"aboutOPContent"} />
              </p>
            </div>
          </Fade>
        </div>
        {/* ===================BRANDS======================== */}
        <section className="brandSection section">
          <Brands />
        </section>
      </section>
    </>
  );
}
