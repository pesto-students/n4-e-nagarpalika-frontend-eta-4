/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useAuth from "../../modules/auth/authContext";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`;

const Form = styled.form`
  padding: 20px;
  border: 1px solid grey;
  width: 400px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  box-shadow: 0 0 10px rgb(0 0 0 / 80%);
  box-sizing: border-box;
`;

const PhoneNumberInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid grey;
  width: 85%;
`;

const Button = styled.button`
  padding: 6px 10px;
  margin: 4px;
  margin-right: 6%;
  border-radius: 4px;
  border: 1px solid grey;
  align-self: flex-end;
`;

function Login() {
  // const { submitPhone, submitOtp } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const history = useHistory();

  useEffect(() => {
    // const ac = new AbortController();
    // // eslint-disable-next-line
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    //   "recaptcha-container",
    //   {
    //     size: "invisible",
    //   }
    // );
    // return () => ac.abort();
  }, []);

  const getOtp = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // // console.log(`+91${phoneNumber}`);
    // const appVerifier = window.recaptchaVerifier;
    // // eslint-disable-next-line
    // await submitPhone(`+91${phoneNumber}`, appVerifier);
    // setIsOtpSent(true);
    // setLoading(false);
  };

  async function sendOtp(e) {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   await submitOtp(otp);
    //   history.push("/dashboard");
    // } catch {
    //   console.log("Unable to Login");
    // }
    // setLoading(false);
  }

  const onChangePhoneNumber = (e) => {
    // const phoneNumberStr = (parseInt(e.target.value, 10) || 0).toString();
    // if (phoneNumberStr.length > 0 && phoneNumberStr.length <= 10) {
    //   setPhoneNumber(phoneNumberStr);
    // }
  };

  const onChangeOTP = (e) => {
    // const otpStr = parseInt(e.target.value || 0, 10).toString();
    // if (otpStr.length > 0 && otpStr.length <= 6) {
    //   setOtp(otpStr);
    // }
  };

  return (
    <Container>
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body ">
          <h5 className="card-title">Log In</h5>
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <>
                <div className="mb-3 ">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    placeholder="Phone Number"
                  />
                  <div id="phoneNumberHelp" className="form-text">
                    We'll never share your phone number with anyone else.
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-end" }}
                >
                  Submit
                </button>
              </>
            )}

            {isOtpSent && (
              <>
                <div className="mb-3">
                  <label htmlFor="otpVerification" className="form-label">
                    Verify OTP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otpVerification"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </>
            )}
          </form>
          {/* <Link href="#" className="btn btn-primary">
            Go somewhere
          </Link> */}
        </div>
      </div>
    </Container>
  );

  return (
    <Container>
      <Form>
        <input id="recaptcha-container" type="hidden" />

        {!isOtpSent ? (
          <PhoneNumberInput
            id="phone"
            type="text"
            placeholder="Enter your 10 digit Mobile Number"
            pattern="[0-9]{10}"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            disabled={loading}
          />
        ) : null}

        {isOtpSent && (
          <PhoneNumberInput
            type="text"
            placeholder="Enter the OTP sent to Mobile Number"
            pattern="[0-9]{6}"
            value={otp}
            onChange={onChangeOTP}
            disabled={loading}
          />
        )}

        <div style={{ flexGrow: 1 }} />

        {!isOtpSent && (
          <Button onClick={getOtp} disabled={loading}>
            Get OTP
          </Button>
        )}

        {isOtpSent && (
          <Button onClick={sendOtp} disabled={loading}>
            Verify OTP
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default Login;
