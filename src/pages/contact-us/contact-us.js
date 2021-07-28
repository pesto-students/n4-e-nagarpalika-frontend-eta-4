/** @format */

import React from "react";

const ContactUs = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card shadow-lg mb-3">
          <div className="card-body p-0">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">
                  Please write to us with any issue you’re facing with the app
                  !!!!
                </h1>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputissueTitle"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputDescription"
                    className="form-label"
                  >
                    Describe your issue
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputDescription"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to all the terms and conditions.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary col-12">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
