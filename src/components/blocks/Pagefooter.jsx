import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
const Pagefooter = () => {
  return (
    <footer className="site-footer section text-center b-t mt-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mx-auto">
            <img src={logo} alt="" className="logo" />
            <h2 className="extra-bold text-dark mb-4">DashCore</h2>
            <p className="mt-2 mb-0 text-secondary small">
              © 2021{" "}
              <Link className="brand bold" target="_blank" to="/5studios.net">
                5studios.net
              </Link>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pagefooter;
