import React from "react";

const Footer = function () {
  return (
    <div className="container bg-dark py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 text-center text-light">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <p>Audio and Subtitles</p>
              <p>Media Center</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <p>Audio Description</p>
              <p>Investor Relations</p>
              <p>Legal Notices</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <p>Gift Cards</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center py-2">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 text-center">
          <button
            style={{ fontSize: "0.7rem" }}
            type="button"
            className="btn btn-secondary rounded-0 p-1 mb-2"
          >
            Service Code
          </button>
          <p className="text-light" style={{ fontSize: "0.5rem" }}>
            © 1997-2019 Netflix, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
