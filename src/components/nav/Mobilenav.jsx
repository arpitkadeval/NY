import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Popup from "reactjs-popup";
import {
  faBuilding,
  faEnvelope,
  faHandHoldingUsd,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
library.add(faBuilding, faEnvelope, faQuestionCircle, faHandHoldingUsd);
const Mobilenav = () => {
  return (
    <li className="st-nav-section st-nav-mobile nav-item">
      <Popup
        className="st-popup"
        trigger={
          <button className="st-root-link navbar-toggler" type="button">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        }
        closeOnDocumentClick
        contentStyle={{ padding: "0px", border: "none" }}
        position="bottom right"
        stroke-dasharray={true}
      >
        {(close) => (
          <div className="st-popup">
            <div className="st-popup-container">
              <a className="st-popup-close-button" onClick={close}>
                Close
              </a>
              <div className="st-dropdown-content-group">
                <h4 className="text-uppercase regular">Pages</h4>
                <Link className="regular text-primary" to="/about">
                  <FontAwesomeIcon icon="fas fa-building" className="me-2" />
                  About
                </Link>
                <Link className="regular text-success" to="/contact">
                  <FontAwesomeIcon icon="fas fa-envelope" className="me-2" />
                  Contact
                </Link>
                <Link className="regular text-warning" to="/pricing">
                  <FontAwesomeIcon
                    icon="fas fa-hand-holding-usd"
                    className="me-2"
                  />
                  Pricing
                </Link>
                <Link className="regular text-info" to="/faqs">
                  <FontAwesomeIcon
                    icon="fas fa-question-circle"
                    className="me-2"
                  />
                  FAQs
                </Link>
              </div>
              <div className="st-dropdown-content-group border-top bw-2">
                <h4 className="text-uppercase regular">Components</h4>
                <div className="row">
                  <div className="col me-4">
                    <Link to="/components/alert">Alerts</Link>
                    <Link to="/components/badge">Badges</Link>
                    <Link to="/components/button">Buttons</Link>
                    <Link to="/components/color">Colors</Link>
                    <Link to="/components/accordion">Accordion</Link>
                    <Link to="/components/cookie-law">Cookielaw</Link>
                  </div>
                  <div className="col me-4">
                    <Link to="/components/overlay">Overlay</Link>
                    <Link to="/components/progress">Progress</Link>
                    <Link to="/components/lightbox">Lightbox</Link>
                    <Link to="/components/tab">Tabs</Link>
                    <Link to="/components/tables">Tables</Link>
                    <Link to="/components/typography">Typography</Link>
                  </div>
                </div>
              </div>
              <div className="st-dropdown-content-group bg-light b-t">
                <Link to="/login">
                  Sign in
                  <FontAwesomeIcon icon="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </li>
  );
};

export default Mobilenav;
