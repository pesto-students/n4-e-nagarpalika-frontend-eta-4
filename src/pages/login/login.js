/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginSVG from "../../common/components/svg/loginSignupSvg";
import firebase from "../../common/firebase";
import { logIn } from "../../modules/auth/actionCreators";
import { Container, InnerContainer } from "./styles";

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
        const result = await confirmResult.confirm(otp);

        const firebaseToken = await result.user.getIdToken();

        await actionLogin({ firebaseToken });
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
        <h2 className="text-center">Log in</h2>
        <InnerContainer className="card-body">
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <>
                <div className="mb-4">
                  <p htmlFor="phoneNumber" className="text-center card-text">
                    Phone number
                  </p>
                  <div className="row">
                    <input
                      type="tel"
                      maxLength="10"
                      required
                      className="form-control"
                      id="phoneNumber"
                      aria-describedby="phoneNumberHelp"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={onChangePhoneNumber}
                      disabled={loading}
                    />
                    <hr />
                    <button
                      type="button"
                      // style={{width:"50%"}}
                      className="btn btn-primary"
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
                      type="tel"
                      maxLength="6"
                      required
                      className="form-control col"
                      id="otpVerification"
                      value={otp}
                      onChange={onChangeOTP}
                      disabled={loading}
                    />
                    <hr />
                    <button
                      type="button"
                      style={{ alignSelf: "flex-end" }}
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
        </InnerContainer>
      </div>
    </Container>
  );
}

const mapDispatchToProps = {
  actionLogin: logIn,
};

export default connect(null, mapDispatchToProps)(Login);
