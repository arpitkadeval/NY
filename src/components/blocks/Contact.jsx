import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import MainContact from "./MainContact";
import Pagefooter from "./Pagefooter";
import Pageheader from "./Pageheader";
library.add(faDollarSign, faLongArrowAltRight);

const Contact = () => {
  const label = "LifeBuoy";
  const LifeBuoy = Icon[label];
  return (
    <main className="overflow-hidden">
      {/* <!-- ./Page header --> */}
      <Pageheader />
      {/* <!-- ./Contact Us --> */}
      <MainContact />
      {/* <!-- ./Other contact channels --> */}
      <section className="section b-b">
        <div className="container">
          <div className="row gap-y align-items-center text-center text-lg-start">
            <div className="col-12 col-md-6 py-4 px-5 b-md-r">
              <FontAwesomeIcon
                icon="fas fa-dollar-sign"
                className="stroke-darker"
                style={{ width: "36", height: "36",color:"black" }}
              />
             <Link
                to="/javascript"
                className="mt-4 text-darker d-flex align-items-center"
              >
                <h4 className="me-3">Contact Sales</h4>
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-right" />
         </Link>
              <p className="mt-4">
                Looking for a custom quote? need to tell us more about your
                project? or want a demonstration? drop us a line to
               <Link to="/mailto:support@5studios.net">sales@5studios.net
               </Link>
              </p>
            </div>
            <div className="col-12 col-md-6 py-4 px-5">
              <LifeBuoy width="36" height="36" className="stroke-darker" />
             <Link
                to="/javascript"
                className="mt-4 text-darker d-flex align-items-center"
              >
                <h4 className="me-3">Technical Support</h4>
                <FontAwesomeIcon icon="fas fa-long-arrow-alt-right" />
              </Link>
              <p className="mt-4">
                Any question about how to integrate your product?. Don't fret,
                our geek team is ready for you at
               <Link to="/anygmail">support@5studios.net
         </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ./Footer - Simple --> */}
      <Pagefooter />
    </main>
  );
};

export default Contact;
