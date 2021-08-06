/** @format */

import React, { useState } from "react";

import { Heading } from "../../common/components/Typography/Typography";
import Button from "../../common/components/Buttons/Button";
import Card from "../../common/components/Cards/Card";
import Checkbox from "../../common/components/Form/Check";
import Col from "../../common/components/Layout/Col";
import Container from "../../common/components/Layout/Container";
import Input from "../../common/components/Form/Input";
import Row from "../../common/components/Layout/Row";
import Textarea from "../../common/components/Form/Textarea";

import { contactUs as apiContactUs } from "../../common/api";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const res = await apiContactUs({ email, title, description });

    // add response functionality here after successful response
    // console.log(res);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 75px)",
      }}
    >
      <Row className="justify-content-center">
        <Col md={9} lg={8} xl={8} className="">
          <Card shadow className="shadow-lg mb-3">
            <div className="card-body p-0">
              <div className="p-5">
                <Heading size={4} className="text-gray-900 mb-4 text-center">
                  Please write to us with any issue you’re facing with the app
                  !!!!
                </Heading>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    {/* <label htmlFor="inputEmail" className="form-label">
                      Email address
                    </label> */}
                    <Input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="example@gmail.com"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div> */}
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="inputTitle" className="form-label">
                      Title
                    </label> */}
                    <Input
                      type="text"
                      className="form-control"
                      id="inputTitle"
                      placeholder="Let us know about the issue you're facing..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="inputDescription" className="form-label">
                      Describe your issue
                    </label> */}
                    <Textarea
                      type="text"
                      className="form-control"
                      id="inputDescription"
                      placeholder="Write a detailed description..."
                      value={description}
                      rows={6}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
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
                  </div> */}
                  <Checkbox
                    id="checkbox"
                    label={"I agree to all the terms and conditions."}
                    value={checkbox}
                    // disabled={loading}
                    onChange={() => setCheckbox(!checkbox)}
                  />
                  <Button
                    buttonType="submit"
                    type="primary"
                    className="col-12"
                    disabled={!checkbox}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
