import React, { useRef, useEffect } from "react";
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

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let x = gsap.timeline({
      trigger: ".homeWrapper-home ",
    });
    x.to(".c-puzzle:nth-of-type(2)", {
      duration: 1,
      transform: "skewX(20deg) translateZ(0)",
    });
    x.to(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 1,
        transform: "skewX(-35deg) translateZ(0)",
      },
      "-=1"
    );
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="homeWrapper-home section">
        <div className="video-container-home">
          <video
            src="https://github.com/rpe-eng/rpe-web-graphic/blob/main/img/video/video3.mp4?raw=true"
            autoPlay="autoPlay"
            loop="loop"
            playsInline="playsInline"
            muted="muted"
            alt='digital video'
          ></video>
        </div>
        <div className="puzzles-home">
          <div className="c-puzzle absolute"></div>
          <div className="c-puzzle absolute"></div>
          <div className="c-puzzle absolute"></div>
          <div className="home-content absolute">
            <p>
              <T label={"homeTitle"} />
            </p>
          </div>
          <div className="home-bottom-line absolute">
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
      </section>
      <section className="homeBanner section fadeIn">
        <p></p>
        <Fade bottom>
          <h3 className="banner-title ">
            <T label={"homeBanner"} />
          </h3>
        </Fade>
        <p></p>
      </section>
      <section ref={sectionRef} className="homeCards section">
        <div className="cards-title fadeIn">
          <Fade bottom>
            <h1>
              <T label={"homeExperienceTitle"} />
            </h1>
          </Fade>
        </div>
        <div className="cards-wrapper">
          <Fade bottom>
            <Link to="/analytics" onClick={handleClick}>
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={analytics} alt='analytics monitor icon'></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>
                      <T label={"homeCard1TitleFL"} />
                    </span>
                    <T label={"homeCard1Title"} />
                  </h1>
                  <p>Business Intelligence, Data Management, AI & ML</p>
                </div>
                <div className="see-button">
                  <span></span>
                  <button>
                    <T label={"homeCardBtn"} />
                  </button>
                </div>
              </div>
            </Link>
          </Fade>
          <Fade bottom>
            <Link to="/operations" onClick={handleClick}>
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={operations} alt='operations icon'></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>
                      <T label={"homeCard2TitleFL"} />
                    </span>
                    <T label={"homeCard2Title"} />
                  </h1>
                  <p>Environment Management, BI Platfrom Operations</p>
                </div>
                <div className="see-button">
                  <span></span>
                  <button>
                    <T label={"homeCardBtn"} />
                  </button>
                </div>
              </div>
            </Link>
          </Fade>
          <Fade bottom>
            <Link to="/digital" onClick={handleClick}>
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={digital} alt='digital transformation icon'></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>
                      <T label={"homeCard3TitleFL"} />
                    </span>
                    <T label={"homeCard3Title1"} />{" "}
                    <span>
                      <T label={"homeCard3TitleSL"} />
                    </span>
                    <T label={"homeCard3Title2"} />
                  </h1>
                  <p>
                    Transformation Strategy & Roadmaps, Analytics Enablement
                  </p>
                </div>
                <div className="see-button">
                  <span></span>
                  <button>
                    <T label={"homeCardBtn"} />
                  </button>
                </div>
              </div>
            </Link>
          </Fade>
        </div>
      </section>

      <section className="brandSection section">
        <Brands />
      </section>
    </>
  );
}
