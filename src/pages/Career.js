import React, { useState, useEffect } from "react";
import Advert from "../components/Advert";
import Popup from "../components/Popup";

import Fade from "react-reveal/Fade";

import Pin from '../img/icons/pin.svg';
import Clock from '../img/icons/clock.svg';
import Monitor from '../img/icons/monitor-small.svg';

import T from "../T";

export default function Career() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [oneAdvert, setOneAdvert] = useState();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const url = 'https://raw.githubusercontent.com/rpe-eng/rpe-website-ads/main/data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    };
    fetchData();
  }, []);


  const handleClick = (id) => {
    data.map((d) => {
      if (id === d.id && d.isActive === true) {
        setActive(false);
        setOneAdvert(d);
        setShow(true);
      }
      if (id === d.id && d.isActive === false) {
        setShow(false);
        setActive(true);
      }
    });
  };

  return (
    <>
      <section className="careerWrapper section">
        <div className="career-content-section">
          <div className="career-wrapper">
            <div className="career-content">
              <div className="career-col left">
                <h1 className="career-title">
                  <T label={"careerTitle"} />
                </h1>
                <br />
                <p>
                  <T label={"careerContent"} />
                </p>
                <div className="career-adverts">
                {isLoaded === false && <div className='section' style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>No data found...</div>}
                  {data.map((d, i) => (
                    <Fade bottom>
                      <div
                        className="advert"
                        key={i}
                        id={d.id}
                        onClick={() => handleClick(d.id)}
                      >
                        <div className="advert-col-left"></div>
                        <div className="advert-col-right">
                          <ul>
                            <li id="first">
                              <h1
                                style={{
                                  color:
                                    d.isActive === true ? "#1e2f3b" : "#bbb",
                                }}
                              >
                                {d.title}
                              </h1>
                              <h2
                                style={{
                                  color:
                                    d.isActive === true
                                      ? "rgb(1, 122, 1)"
                                      : "#bbb",
                                }}
                              >
                                {d.isActive ? "Active" : "Not Active"}
                              </h2>
                            </li>
                            <li id="second">
                              <p>
                                <img src={Pin} style={{width: "16px", marginRight: "5px", marginBottom: "5px"}} alt='location pin icon'></img>
                                {d.location}
                              </p>
                              <p>
                                <img src={Monitor} style={{width: "16px", marginRight: "5px", marginBottom: "5px"}} alt='monitor icon'></img>
                                Technologies
                              </p>
                              <p>
                                <img src={Clock} style={{width: "16px", marginRight: "5px", marginBottom: "5px"}} alt='clock icon'></img>
                                Full-Time
                              </p>
                            </li>
                            <li id="third">
                              <button
                                onClick={() => handleClick(d.id)}
                                style={{
                                  color:
                                    d.isActive === true ? "#d42028" : "#bbb",
                                }}
                              >
                                <T label={"careerADDBtn"} />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
              <div className="career-col right">
                <div className="career-col-img">
                  <img src="https://raw.githubusercontent.com/rpe-eng/rpe-web-graphic/main/RPE_Analytics/RPE_Analytics_freepik/career.png" alt='career photo'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show ? <Advert data={oneAdvert} show={show} setShow={setShow} /> : ""}
        {active ? <Popup active={active} setActive={setActive} /> : ""}
      </section>
    </>
  );
}
