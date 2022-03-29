import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

library.add(faMapMarker, faPhone, faEnvelope);
const MainContact = () => {
  return (
    <div className="container-fluid py-3 demo-blocks">
      <section className="section block bg-contrast">
        <div className="container py-4">
          <div className="row gap-y">
            <div className="col-12 col-md-6">
              <div className="section-heading">
                <p className="text-uppercase">Get in touch</p>
                <h2 className="font-md bold">We'd like to hear from you</h2>
              </div>
              <p className="lead mb-5">
                Don't hesitate to get in contact with us no matter your request.
                We are here to help you.
              </p>
              <ul className="list-unstyled list-icon">
                <li style={{ display: "table-row-group" }}>
                  <FontAwesomeIcon
                    icon={"fas fa-map-marker font-l text-primary"}
                    className="text-primary"
                  />
                  <p> 123 Street,City,Country</p>
                </li>
                <li style={{ display: "table" }}>
                  <FontAwesomeIcon
                    icon={"fas fa-phone font-l text-primary"}
                    className="text-primary"
                  />
                  <p>(123) 456-7890</p>
                </li>
                <li style={{ display: "table" }}>
                  <FontAwesomeIcon
                    icon={"fas fa-envelope text-primary"}
                    className="text-primary"
                  />
                  <p>
                    <Link to="/sgsggsgk">support@5studios.net</Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <form
                action="https://5studios.net/themes/dashcore3/srv/contact.php"
                method="post"
                className="form form-contact"
                name="form-contact"
              >
                <div className="mb-4">
                  <label for="contact_email" className="text-dark bold mb-0">
                    Email address
                  </label>
                  <div
                    id="emailHelp"
                    className="small form-text text-secondary mt-0 mb-2 italic"
                  >
                    We'll never share your email with anyone else.
                  </div>
                  <input
                    type="email"
                    name="Contact[email]"
                    id="contact_email"
                    className="form-control bg-contrast"
                    placeholder="Valid Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="contact_email" className="text-dark bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Contact[subject]"
                    id="contact_subject"
                    className="form-control bg-contrast"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="contact_email" className="text-dark bold">
                    Message
                  </label>
                  <textarea
                    name="Contact[message]"
                    id="contact_message"
                    className="form-control bg-contrast"
                    placeholder="What do you want to let us know?"
                    rows="8"
                    required
                  ></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button
                    id="contact-submit"
                    name="submit"
                    type="submit"
                    className="btn btn-primary btn-rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContact;
