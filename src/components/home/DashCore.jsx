import React from "react";
import { Fade } from "react-reveal";
import CountUp from "react-countup";
import * as Icon from "react-feather";
const box = "Box";
const Box = Icon[box];
const sliders = "Sliders";
const Sliders = Icon[sliders];
const award = "Award";
const Award = Icon[award];
const downloadcloud = "DownloadCloud";
const DownloadCloud = Icon[downloadcloud];

const DashCore = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-md-6">
            <div className="section-heading">
              <p className="text-primary bold small text-uppercase">
                some reasons
              </p>
              <h2 className="bold">Why Choose DashCore?</h2>
            </div>
            <p className="regular">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              adipisci, architecto asperiores dignissimos doloribus dolorum eos
              esse eum laborum minima molestias, natus nostrum odio quia
              recusandae rem sequi similique velit.
            </p>
            <a
              href="javascript"
              className="btn btn-outline-primary btn-rounded bw-2 mt-4"
            >
              Read More
            </a>
          </div>
          <div className="col-md-6">
            <div className="animate-bars">
              <ul className="progress-bars whyus-progress-bars progress-horizontal">
                <li>
                  <p>
                    Implementation <span>73%</span>
                  </p>
                  <div
                    className="progress progress-xs"
                    style={{ width: "100%" }}
                  >
                    <Fade left duration={2000}>
                      <div
                        className="progress-bar"
                        style={{ width: "73%" }}
                      ></div>
                    </Fade>
                  </div>
                </li>
                <li>
                  <p>
                    Design <span>91%</span>
                  </p>
                  <div
                    className="progress progress-xs"
                    style={{ width: "100%" }}
                  >
                    <Fade left duration={2000}>
                      <div
                        className="progress-bar"
                        style={{ width: "91%" }}
                      ></div>
                    </Fade>
                  </div>
                </li>
                <li>
                  <p>
                    Beauty <span>97%</span>
                  </p>
                  <div
                    className="progress progress-xs"
                    style={{ width: "100%" }}
                  >
                    <Fade left duration={2000}>
                      <div
                        className="progress-bar"
                        style={{ width: "97%" }}
                      ></div>
                    </Fade>
                  </div>
                </li>
                <li>
                  <p>
                    Branding <span>61%</span>
                  </p>
                  <div
                    className="progress progress-xs"
                    style={{ width: "100%" }}
                  >
                    <Fade left duration={2000}>
                      <div
                        className="progress-bar"
                        style={{ width: "61%" }}
                      ></div>
                    </Fade>
                  </div>
                </li>
                <li>
                  <p>
                    Responsiveness <span>100%</span>
                  </p>

                  <div
                    className="progress progress-xs"
                    style={{ width: "100%" }}
                  >
                    <Fade left duration={2000}>
                      <div
                        className="progress-bar"
                        style={{ width: "100%" }}
                      ></div>
                    </Fade>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row gap-y pt-5">
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <Box width="36" height="36" className="stroke-primary me-2" />
              <CountUp
                className="counter bold text-darker font-md"
                end={273}
                duration={3}
                onEnd={({ pauseResume, reset, start, update }) => pauseResume()}
              />
            </div>
            <p className="text-secondary m-0">Components</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <DownloadCloud
                width="36"
                height="36"
                className="stroke-primary me-2"
              />

              <CountUp
                className="counter bold text-darker font-md"
                end={654}
                duration={3}
                onEnd={({ pauseResume, reset, start, update }) => pauseResume()}
              />
            </div>
            <p className="text-secondary m-0">Downloads</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <Sliders width="36" height="36" className="stroke-primary me-2" />
              <CountUp
                className="counter bold text-darker font-md"
                end={7941}
                duration={3}
                onEnd={({ pauseResume, reset, start, update }) => pauseResume()}
              />
            </div>
            <p className="text-secondary m-0">Followers</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <Award width="36" height="36" className="stroke-primary me-2" />

              <CountUp
                className="counter bold text-darker font-md"
                end={654}
                duration={3}
                onEnd={({ pauseResume, reset, start, update }) => pauseResume()}
              />
            </div>
            <p className="text-secondary m-0">New users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashCore;
