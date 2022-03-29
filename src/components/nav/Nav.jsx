/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Popup from "reactjs-popup";
import {
  faArrowRight,
  faBuilding,
  faEnvelope,
  faHandHoldingUsd,
  faQuestionCircle,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Block from "./dropdown/Block";
import Pages from "./dropdown/Pages";
import Uicompo from "./dropdown/Uicompo";
import Blog from "./dropdown/Blog";
import Shop from "./dropdown/Shop";
import Mobilenav from "./Mobilenav";

library.add(
  faSignInAlt,
  faUserPlus,
  faArrowRight,
  faBuilding,
  faEnvelope,
  faQuestionCircle,
  faHandHoldingUsd,
  faBuilding,
  faEnvelope,
  faHandHoldingUsd
);

const Nav = () => {
  const [clss, setClss] = useState(
    "st-nav navbar main-nav navigation fixed-top no-dropdown-transition"
  );
  document.addEventListener("scroll", () => {
    const nav = window.scrollY < 100;
    if (nav !== true) {
      setClss(
        "st-nav navbar main-nav navigation fixed-top no-dropdown-transition navbar-sticky"
      );
    } else if (nav !== false) {
      setClss("st-nav navbar main-nav navigation fixed-top");
    } else {
      setClss("st-nav navbar main-nav navigation fixed-top");
    }
  });

  return (
    <>
      <nav className={clss} id="main-nav">
        <div className="container">
          <ul className="st-nav-menu nav navbar-nav">
            <li className="st-nav-section nav-item">
              <a href="#main" className="navbar-brand">
                <img src={Logo} alt="Dashcore" className="logo logo-sticky" />
              </a>
            </li>
            <li className="st-nav-section st-nav-primary stick-right nav-item">
              <Link className="st-root-link nav-link" to="/">
                Home
              </Link>

              <Popup
                className="st-popup"
                trigger={
                  <a className="st-root-link item-products st-has-dropdown nav-link">
                    Blocks
                  </a>
                }
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={100}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={true}
                position="bottom"
                stroke-dasharray={true}
              >
                <Block />
              </Popup>

              <Popup
                trigger={
                  <a className="st-root-link item-products st-has-dropdown nav-link">
                    Pages
                  </a>
                }
                position="bottom"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={100}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={true}
              >
                <Pages />
              </Popup>
              <Popup
                trigger={
                  <a className="st-root-link item-products st-has-dropdown nav-link">
                    UI Components
                  </a>
                }
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={100}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={true}
                position="bottom"
              >
                <Uicompo />
              </Popup>
              <Popup
                trigger={
                  <a className="st-root-link item-products st-has-dropdown nav-link">
                    Blog
                  </a>
                }
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={100}
                contentStyle={{ zIndex: "2000" }}
                arrow={true}
                position="bottom"
              >
                <Blog />
              </Popup>
              <Popup
                trigger={
                  <a className="st-root-link item-products st-has-dropdown nav-link">
                    Shop
                  </a>
                }
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={100}
                contentStyle={{ zIndex: "999" }}
                arrow={true}
                position="bottom"
              >
                <Shop />
              </Popup>
            </li>
            <li className="st-nav-section st-nav-secondary nav-item">
              <Link
                className="btn btn-rounded btn-outline me-3 px-3"
                to="/login"
              >
                <FontAwesomeIcon
                  icon="fas fa-sign-in-alt"
                  className="d-none d-md-inline me-md-0 me-lg-2"
                />
                <span className="d-md-none d-lg-inline">Login</span>
              </Link>
              <Link className="btn btn-rounded btn-solid px-3" to="/signup">
                <FontAwesomeIcon
                  icon="fas fa-user-plus"
                  className="d-none d-md-inline me-md-0 me-lg-2"
                />
                <span className="d-md-none d-lg-inline">Signup</span>
              </Link>
            </li>
            <Mobilenav />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
