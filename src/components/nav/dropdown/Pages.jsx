import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBuilding,
  faEnvelope,
  faHandHoldingUsd,
  faQuestionCircle,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
const Pages = () => {
  return (
    <div className="st-dropdown-section">
      <div className="st-dropdown-content">
        <div className="st-dropdown-content-group">
          <div className="mb-4">
            <h3 className="text-darker light text-nowrap">
              <span className="bold regular">Useful pages</span>
              you'll need
            </h3>
            <p className="text-secondary mt-0">Get a complete design stack</p>
          </div>
          <div className="row">
            <div className="col">
              <ul className="me-4">
                <li>
                  <h4 className="text-uppercase regular">Error</h4>
                </li>
                <li>
                  <Link to="/403">403 Error</Link>
                </li>
                <li>
                  <Link to="/404">404 Error</Link>
                </li>
                <li>
                  <Link to="/500">500 Error</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="me-4">
                <li>
                  <h4 className="text-uppercase regular">User</h4>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/forgot">Forgot</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <h4 className="text-uppercase regular">Extra</h4>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="st-dropdown-content-group"
          style={{ background: "#f1f4f8" }}
        >
          <Link className="dropdown-item bold" to="/about">
            <FontAwesomeIcon icon="fas fa-building" className="icon" /> About
          </Link>
          <Link className="dropdown-item bold" to="/contact">
            <FontAwesomeIcon icon="fas fa-envelope" className=" icon" /> Contact
          </Link>
          <Link className="dropdown-item bold" to="/pricing">
            <FontAwesomeIcon icon="fas fa-hand-holding-usd" className="icon" />{" "}
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pages;
