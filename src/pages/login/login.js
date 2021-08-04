/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import LoginSVG from "../../common/components/svg/loginSignupSvg";
import firebase from "../../common/firebase";
import { logIn } from "../../modules/auth/actionCreators";
import { Container, InnerContainer, Form } from "./styles";

function Login({ actionLogin }) {
  const history = useHistory();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }, []);

  const getOtp = async (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setLoading(true);

      const appVerifier = window.recaptchaVerifier;
      try {
        await firebase
          .auth()
          .signInWithPhoneNumber(`+91${phoneNumber}`, appVerifier)
          .then((confirmResult) => {
            setConfirmResult(confirmResult);
          });
        setMessage("");
        setIsOtpSent(true);
      } catch (e) {
        setMessage("**Unexpected error occurred. Please try later.");
      }
    } else {
      setMessage("**Please insert your 10 digit phone number.");
    }
    setLoading(false);
  };

  async function sendOtp(e) {
    if (otp.length === 6) {
      setMessage("");
      setLoading(true);
      try {
        await confirmResult.confirm(otp);

        history.push("/dashboard");
      } catch (e) {
        setMessage("**Unexpected error occurred. Please try again later");
        // console.log(e);
      }
    } else {
      setMessage("**Please insert the 6 digit OTP sent to your mobile number");
    }
    // setLoading(false);
  }

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeOTP = (e) => {
    setOtp(e.target.value);
  };

  return (
    <Container>
      <div className="card mb-4">
        <LoginSVG />
        <h2 className="text-center">{!isOtpSent && `Log in`}</h2>
        <InnerContainer className="card-body">
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <div
                className="mb-4 row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form
                  data-tip="We'll never share your phone number with anyone else."
                  data-for="toolTip1"
                  data-place="right"
                >
                  <input
                    type="tel"
                    maxLength="10"
                    className="form-control"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                    disabled={loading}
                  />
                  <div style={{ width: "50px" }}>
                    <ReactTooltip backgroundColor="gray" id="toolTip1" />
                  </div>
                </Form>
                <button
                  type="button"
                  style={{ width: "90%" }}
                  className="btn btn-primary float-end"
                  onClick={getOtp}
                  disabled={loading || phoneNumber.length < 10}
                >
                  Get OTP
                </button>
              </div>
            )}

            {isOtpSent && (
              <div
                className="mb-4 row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Form
                  data-tip="Please insert the 6 digit OTP sent to your mobile number"
                  data-for="toolTip1"
                  data-place="right"
                >
                  <input
                    type="tel"
                    maxLength="6"
                    className="form-control col"
                    id="otpVerification"
                    value={otp}
                    placeholder="Verify OTP"
                    onChange={onChangeOTP}
                    disabled={loading}
                  />
                  <div style={{ width: "50px" }}>
                    <ReactTooltip backgroundColor="gray" id="toolTip1" />
                  </div>
                </Form>
                <button
                  type="button"
                  style={{ width: "90%" }}
                  className="btn btn-primary float-end"
                  onClick={sendOtp}
                  disabled={loading || otp.length < 5}
                >
                  Verify
                </button>
              </div>
            )}
          </form>
          <p className="form-text text-danger">{message}</p>
        </InnerContainer>
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  actionLogin: logIn,
};

export default connect(null, mapDispatchToProps)(Login);
