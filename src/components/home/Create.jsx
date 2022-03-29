import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../img/logo-light.png";

library.add(
  faPaperPlane,
  faHeart,
  faFacebookF,
  faTwitter,
  faYoutube,
  faPinterest
);
const Create = () => {
  return (
    <>
      <section className="section bg-light edge top-left">
        <div className="container pt-5">
          <div className="d-flex align-items-center flex-column flex-md-row">
            <div className="text-center text-md-start">
              <p className="light mb-0 text-primary lead">
                Ready to get started?
              </p>
              <h2 className="mt-0 bold">Create an account now</h2>
            </div>
            <a
              href="register.html"
              className="btn btn-primary btn-rounded mt-3 mt-md-0 ms-md-auto"
            >
              Create DashCore account
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer section bg-darker text-contrast text-center">
        <div className="container">
          <img src={Logo} alt="" className="logo" />
          <p className="lead mt-5">
            Don't wait - <span className="bold">Get DashCore</span> NOW!
          </p>
          <p className="copyright my-5">
            © 2021 DashCore, <em>by</em>
            <a
              className="brand bold"
              href="https://www.5studios.net/"
              target="_blank"
            >
              5Studios.net
            </a>
          </p>
          <hr className="mt-5 bg-secondary op-5" />
          <nav className="nav social-icons justify-content-center mt-4">
            <a
              href="#"
              className="btn text-contrast btn-circle btn-sm brand-facebook me-3"
            >
              <FontAwesomeIcon icon="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="btn text-contrast btn-circle btn-sm brand-twitter me-3"
            >
              <FontAwesomeIcon icon="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="btn text-contrast btn-circle btn-sm brand-youtube me-3"
            >
              <FontAwesomeIcon icon="fab fa-youtube" />
            </a>
            <a
              href="#"
              className="btn text-contrast btn-circle btn-sm brand-pinterest"
            >
              <FontAwesomeIcon icon="fab fa-pinterest" />
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Create;
