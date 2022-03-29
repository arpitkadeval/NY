import React from "react";

const Pageheader = () => {
  return (
    <>
      <header className="page header text-contrast bg-primary" style={{}}>
        <div className="container pb-9">
          <div className="row">
            <div className="col-md-6">
              <h1 className="bold display-md-4 text-contrast mb-4">Contact us</h1>
              <p className="lead text-contrast">
                Get in touch and let us know how we can help. Fill out the form
                and we’ll be in touch as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="position-relative">
        <div className="shape-divider shape-divider-bottom shape-divider-fluid-x text-contrast">
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Pageheader;
