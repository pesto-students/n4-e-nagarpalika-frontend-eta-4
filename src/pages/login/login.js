/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../common/firebase";
import { logIn } from "../../store/actionCreators/auth";
import { Container } from "./styles";

function Login({ logIn: actionLogin }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
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
    setLoading(true);

    const appVerifier = window.recaptchaVerifier;

    await firebase
      .auth()
      .signInWithPhoneNumber(`+91${phoneNumber}`, appVerifier)
      .then((confirmResult) => {
        setConfirmResult(confirmResult);
      });

    setIsOtpSent(true);
    setLoading(false);
  };

  async function sendOtp(e) {
    setLoading(true);

    const result = await confirmResult.confirm(otp);

    const firebaseToken = await result.user.getIdToken();

    await actionLogin({ firebaseToken });

    // setLoading(false);
  }

  const onChangePhoneNumber = (e) => {
    // const phoneNumberStr = (parseInt(e.target.value, 10) || 0).toString();
    // if (phoneNumberStr.length > 0 && phoneNumberStr.length <= 10) {
    //   setPhoneNumber(phoneNumberStr);
    // }
    setPhoneNumber(e.target.value);
  };

  const onChangeOTP = (e) => {
    // const otpStr = parseInt(e.target.value || 0, 10).toString();
    // if (otpStr.length > 0 && otpStr.length <= 6) {
    //   setOtp(otpStr);
    // }
    setOtp(e.target.value);
  };

  return (
    <Container>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Log In</h5>
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                    disabled={loading}
                  />
                  <div id="phoneNumberHelp" className="form-text">
                    We'll never share your phone number with anyone else.
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-end" }}
                  onClick={getOtp}
                  disabled={loading}
                >
                  Get OTP
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
                    value={otp}
                    onChange={onChangeOTP}
                    disabled={loading}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={sendOtp}
                  disabled={loading}
                >
                  Verify
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  logIn,
};

export default connect(null, mapDispatchToProps)(Login);
