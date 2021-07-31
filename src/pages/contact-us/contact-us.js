/** @format */

import React, { useState } from "react";

import { contactUs as apiContactUs } from "../../common/api";

const ContactUs = () => {
  const [email, setEmail] = useState("hbarve1592@gmail.com");
  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("description");
  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await apiContactUs({ email, title, description });

    // add response functionality here after successful response
    console.log(res);
  };

  return (
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
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputTitle"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">
                      Describe your issue
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputDescription"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkbox"
                      value={checkbox}
                      onChange={() => setCheckbox(!checkbox)}
                    />
                    <label className="form-check-label" htmlFor="checkbox">
                      I agree to all the terms and conditions.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary col-12"
                    disabled={!checkbox}
                  >
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
};

export default ContactUs;
