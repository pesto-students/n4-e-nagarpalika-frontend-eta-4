/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import firebase from "../../common/firebase";
import { logIn } from "../../modules/auth/actionCreators";
import { Container } from "./styles";

function Login({ logIn: actionLogin }) {
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

      await firebase
        .auth()
        .signInWithPhoneNumber(`+91${phoneNumber}`, appVerifier)
        .then((confirmResult) => {
          setConfirmResult(confirmResult);
        });
      setMessage("");
      setIsOtpSent(true);
    } else {
      setMessage("**Please insert your 10 digit phone number.");
    }
    setLoading(false);
  };

  async function sendOtp(e) {
    setLoading(true);
    try {
      const result = await confirmResult.confirm(otp);

      const firebaseToken = await result.user.getIdToken();

      await actionLogin({firebaseToken});
    }catch (e){
      console.log(e)
    }

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
      <div className="card mb-4">
        <h5 className="card-header text-center bg-info">Log In</h5>
        <div className="card-body">
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <>
                <div className="mb-4">
                  <p htmlFor="phoneNumber" className="text-center card-text">
                    Phone Number
                  </p>
                  <div className="row">
                    <input
                      type="text"
                      className="form-control col"
                      id="phoneNumber"
                      aria-describedby="phoneNumberHelp"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={onChangePhoneNumber}
                      disabled={loading}
                    />
                    <hr />
                    <button
                      type="button"
                      // style={{width:"50%"}}
                      className="btn btn-primary col"
                      style={{ alignSelf: "flex-end" }}
                      onClick={getOtp}
                      disabled={loading}
                    >
                      Get OTP
                    </button>
                  </div>
                  <div id="phoneNumberHelp" className="form-text">
                    **We'll never share your phone number with anyone else.
                  </div>
                </div>
              </>
            )}

            {isOtpSent && (
              <>
                <div className="mb-4">
                  <p htmlFor="phoneNumber" className="text-center card-text">
                    Verify OTP
                  </p>
                  <div className="row">
                    <input
                      type="text"
                      className="form-control col"
                      id="otpVerification"
                      value={otp}
                      onChange={onChangeOTP}
                      disabled={loading}
                    />
                    <hr />
                      <button
                          type="button"
                          style={{margin:"5px"}}
                          className="btn btn-primary col"
                          onClick={sendOtp}
                          disabled={loading}
                      >
                        Verify
                      </button>
                  </div>
                  <div id="phoneNumberHelp" className="form-text">
                    **Please insert the 6 digit otp sent to your mobile number.
                  </div>
                </div>
              </>
            )}
          </form>
          <p className="form-text text-danger">{message}</p>
        </div>
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  logIn,
};

export default connect(null, mapDispatchToProps)(Login);
