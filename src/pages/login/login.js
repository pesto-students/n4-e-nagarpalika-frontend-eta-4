/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Heading } from "../../common/components/Typography/Typography";
import Button from "../../common/components/Buttons/Button";
import Card from "../../common/components/Cards/Card";
import Input from "../../common/components/Form/Input";
import LoginSVG from "../../common/components/svg/loginSignupSvg";

import { logIn } from "../../modules/auth/actionCreators";

import { Container, InnerContainer } from "./styles";

import firebase from "../../common/firebase";

function Login() {
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
      <Card shadow className="p-4">
        <LoginSVG />
        <Heading size={2} className="text-center">
          Log in
        </Heading>
        <InnerContainer className="card-body">
          <form style={{ display: "flex", justifyContent: "center" }}>
            <input id="recaptcha-container" type="hidden" />

            {!isOtpSent && (
              <div className="mb-4">
                <div className="row justify-content-center">
                  <Input
                    type="tel"
                    maxLength="10"
                    required
                    className="form-control mb-3"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                    disabled={loading}
                    // isValid
                    // isInvalid
                  />
                  <Button
                    type="primary"
                    buttonType="button"
                    className=""
                    style={{
                      alignSelf: "center",
                      width: "94%",
                    }}
                    onClick={getOtp}
                    disabled={loading || phoneNumber.length !== 10}
                  >
                    Get OTP
                  </Button>
                </div>
                <div id="phoneNumberHelp" className="form-text">
                  **We'll never share your phone number with anyone else.
                </div>
              </div>
            )}

            {isOtpSent && (
              <div className="mb-4">
                <div className="row justify-content-center">
                  <Input
                    className="form-control mb-3"
                    disabled={loading}
                    id="otpVerification"
                    maxLength="6"
                    onChange={onChangeOTP}
                    placeholder="Verify OTP"
                    required
                    type="text"
                    value={otp}
                  />
                  <Button
                    buttonType="button"
                    type="primary"
                    className=""
                    style={{ width: "94%" }}
                    onClick={sendOtp}
                    disabled={loading || otp.length !== 6}
                  >
                    Verify
                  </Button>
                </div>
                <div id="phoneNumberHelp" className="form-text">
                  **Please insert the 6 digit OTP sent to your mobile number.
                </div>
              </div>
            )}
          </form>
          <p className="form-text text-danger">{message}</p>
        </InnerContainer>
      </Card>
    </Container>
  );
}

const mapDispatchToProps = {
  actionLogin: logIn,
};

export default connect(null, mapDispatchToProps)(Login);
