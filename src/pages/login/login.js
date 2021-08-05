/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Heading } from "../../common/components/Typography/Typography";
import Button from "../../common/components/Buttons/Button";
import Card from "../../common/components/Cards/Card";
import LoginSVG from "../../common/components/svg/loginSignupSvg";
import Row from "../../common/components/Layout/Row";
import PhoneNumberInput from "../../common/components/Form/PhoneNumberInput";
import OTPInput from "../../common/components/Form/OTPInput";

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
        setMessage("Unexpected error occurred. Please try later.");
      }
    } else {
      setMessage("Please insert your 10 digit phone number.");
    }
    setLoading(false);
  };

  async function sendOtp(e) {
    if (otp.length !== 6) {
      setMessage("*Please insert the 6 digit OTP sent to your mobile number");
      return;
    }

    setMessage("");
    setLoading(true);
    try {
      await confirmResult.confirm(otp);

      history.push("/dashboard");
    } catch (e) {
      setMessage("*Unexpected error occurred. Please try again later");
      // console.log(e);
    }
  }

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
                  <PhoneNumberInput
                    setNumber={(num) => setPhoneNumber(num)}
                    disabled={loading}
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
                  *We'll never share your phone number with anyone else.
                </div>
              </div>
            )}

            {isOtpSent && (
              <div className="mb-4">
                <Row className="justify-content-center">
                  <OTPInput
                    setNumber={(num) => setOtp(num)}
                    disabled={loading}
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
                </Row>
                <div id="phoneNumberHelp" className="form-text">
                  *Please insert the 6 digit OTP sent to your mobile number.
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
