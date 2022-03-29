import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBars,
  faCookieBite,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";

library.add(faPalette, faWpforms, faBars, faCookieBite, faBan);

const Uicompo = () => {
  return (
    <div className="st-dropdown-section">
      <div className="st-dropdown-content">
        <div className="st-dropdown-content-group">
          <Link className="dropdown-item" to="/components/color">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-dark text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fas fa-palette" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">Colors</h3>
                <p className="m-0 text-secondary">
                  Get to know DashCore color options
                </p>
              </div>
            </div>
          </Link>
          <Link className="dropdown-item" to="/components/form-controls">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-secondary text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fab fa-wpforms" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">Forms</h3>
                <p className="m-0 text-secondary">All forms elements</p>
              </div>
            </div>
          </Link>
          <Link className="dropdown-item" to="/components/accordion">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fas fa-bars" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">Accordion</h3>
                <p className="m-0 text-secondary">Useful accordion elements</p>
              </div>
            </div>
          </Link>
          <Link className="dropdown-item" to="/components/cookie-law">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-info text-contrast icon-md center-flex rounded-circle me-2">
                <FontAwesomeIcon icon="fas fa-cookie-bite" />
              </div>
              <div className="flex-fill">
                <h3 className="link-title m-0">CookieLaw</h3>
                <p className="m-0 text-secondary">
                  Comply with the hideous EU Cookie Law
                </p>
              </div>
            </div>
          </Link>
          <h4 className="text-uppercase regular">Huge components list</h4>
          <div className="row">
            <div className="col me-4">
              <Link className="dropdown-item" to="/components/alert">
                Alerts
              </Link>
              <Link className="dropdown-item" to="/components/badge">
                Badges
              </Link>
              <Link className="dropdown-item" to="/components/button">
                Buttons
              </Link>
            </div>
            <div className="col me-4">
              <Link className="dropdown-item" to="/components/overlay">
                Overlay
              </Link>
              <Link className="dropdown-item" to="/components/progress">
                Progress
              </Link>
              <Link className="dropdown-item" to="/components/lightbox">
                Lightbox
              </Link>
            </div>
            <div className="col me-4">
              <Link className="dropdown-item" to="/components/tab">
                Tabs
              </Link>
              <Link className="dropdown-item" to="/components/tables">
                Tables
              </Link>
              <Link className="dropdown-item" to="/components/typography">
                Typography
              </Link>
            </div>
          </div>
        </div>
        <div
          className="st-dropdown-content-group"
          style={{ background: "#f1f4f8" }}
        >
          <Link className="dropdown-item" to="/components/wizard">
            Wizard
          </Link>
          <span className="dropdown-item d-flex align-items-center text-muted">
            Timeline <FontAwesomeIcon icon="fas fa-ban" className="ms-auto" />
          </span>
          <span className="dropdown-item d-flex align-items-center text-muted">
            Process <FontAwesomeIcon icon="fas fa-ban" className="ms-auto" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Uicompo;
