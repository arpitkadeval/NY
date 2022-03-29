import React from "react";
import anim from "../../img/smart-business/header/main-shape.svg";
import img2 from "../../img/smart-business/header/anim-1.svg";
import { Fade } from "react-reveal";
import Homecard from "./Homecard";
import DashCore from "./DashCore";
import Deserve from "./Deserve";
import Extend from "./Extend";
import Create from "./Create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTag } from "@fortawesome/free-solid-svg-icons";
library.add(faTag);
const Home = () => {
  return (
    <>
      <header className="section header smart-business-header">
        <div className="shape-wrapper">
          <div className="shape-background shape-top center-xy"></div>
          <div className="shape-background shape-right"></div>
          <div className="background-shape"></div>
        </div>
        <div className="container">
          <div className="row gap-y">
            <div className="col-md-7">
              <p className="regular small text-uppercase text-secondary">
                innovative solutions for the demanding customer
              </p>
              <h1 className="extra-bold display-md-3 font-md">
                DashCore <span className="d-block light">Smart business</span>
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                dolore excepturi explicabo, harum in laudantium nulla officiis
                reprehenderit!
              </p>
              <nav className="nav mt-5">
                <a
                  href="#a"
                  className="me-3 btn btn btn-rounded btn-outline-info bw-2"
                >
                  <FontAwesomeIcon icon="fas fa-tag" className="me-3" />
                  Plans & pricing
                </a>
                <a href="#" className="btn btn-rounded btn-primary bw-2">
                  Start now
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="main-shape-wrapper">
          <Fade right duration={2000}>
            <div className="fade-left" id="300">
              <img
                src={anim}
                className="img-responsive main-shape"
                alt="NO IMG"
              />
              <img src={img2} className="anim anim-1 floating" alt="no img" />
              <img src={img2} className="anim anim-2 floating" alt="" />
              <img src={img2} className="anim anim-3 floating" alt="" />
            </div>
          </Fade>
        </div>
      </header>
      <Homecard />
      <DashCore />
      <Deserve />
      <Extend />
      <Create />
    </>
  );
};

export default Home;
