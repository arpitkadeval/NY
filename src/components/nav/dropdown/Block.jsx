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
import React from "react";
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

const Block = () => {
  return (
    <div className="st-dropdown-section">
      <div className="st-dropdown-content">
        <div className="st-dropdown-content-group ">
          <div className="row">
            <div className="col me-4">
              <Link className="dropdown-item" to="/blocks/call-to-action">
                Call to actions
              </Link>
              <Link className="dropdown-item" to="/blocks/contact">
                Contact
              </Link>
              <Link className="dropdown-item" to="/blocks/counter">
                Counters
              </Link>
              <Link className="dropdown-item" to="/blocks/faqs">
                FAQs
              </Link>
            </div>
            <div className="col me-4">
              <Link className="dropdown-item" to="/blocks/footer">
                Footers
              </Link>
              <Link className="dropdown-item" to="/blocks/form">
                Forms
              </Link>
              <Link className="dropdown-item" to="/blocks/navbar">
                Navbar
              </Link>
              <Link className="dropdown-item" to="/blocks/navigation">
                Navigation
              </Link>
            </div>
            <div className="col">
              <Link className="dropdown-item" to="/blocks/pricing">
                Pricing
              </Link>
              <Link className="dropdown-item" to="/blocks/slider">
                Sliders
              </Link>
              <Link className="dropdown-item" to="/blocks/team">
                Team
              </Link>
              <Link className="dropdown-item" to="/blocks/testimonial">
                Testimonials
              </Link>
            </div>
          </div>
        </div>
        <div
          className="st-dropdown-content-group"
          style={{ background: "#f1f4f8" }}
        >
          <h3 className="link-title">
            <FontAwesomeIcon
              icon="fas fa-long-arrow-alt-right"
              className="icon"
            />
            Coming soon
          </h3>
          <div className="ms-5">
            <span className="dropdown-item text-secondary">Dividers</span>
            <span className="dropdown-item text-secondary">Gallery</span>
            <span className="dropdown-item text-secondary">Screenshots</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
