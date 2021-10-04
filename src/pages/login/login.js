/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";

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

import countriesList from "../../utils/countriesList";

countriesList.sort(
  (val1, val2) => Object.values(val1)[0][2] - Object.values(val2)[0][2]
);

function Login() {
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const [country, setCountry] = useState({
    name: "India",
    isoCode: "IN",
    code: "91",
  });
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
          .signInWithPhoneNumber(`+${country.code}${phoneNumber}`, appVerifier)
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
                  <div className="input-group mb-3">
                    <div
                      className={classnames("input-group-prepend", {
                        show: dropdown,
                      })}
                    >
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={() => setDropdown(!dropdown)}
                        style={{
                          height: "55px",
                          borderRadius: "12px 0 0 12px",
                          borderColor: "#ced4da",
                        }}
                      >
                        <img
                          src={`/flags/svg/${country.isoCode}.svg`}
                          alt={country.name}
                          style={{
                            width: "25px",
                            height: "auto",
                          }}
                        />
                        {"   "}
                        {`+${country.code}`}
                      </button>
                      {dropdown && (
                        <ul
                          className={classnames("dropdown-menu", {
                            show: dropdown,
                          })}
                          style={{
                            height: "150px",
                            width: "200px",
                            overflowY: "scroll",
                          }}
                        >
                          {countriesList.map((code) => {
                            const [isoCode, , phoneCode, name] =
                              Object.values(code)[0];

                            return (
                              <li
                                className="dropdown-item"
                                key={isoCode}
                                onClick={() => {
                                  setCountry({
                                    name,
                                    isoCode,
                                    code: phoneCode,
                                  });

                                  setDropdown(false);
                                }}
                              >
                                <img
                                  src={`/flags/svg/${isoCode}.svg`}
                                  alt={name}
                                  style={{
                                    width: "25px",
                                    height: "auto",
                                  }}
                                />
                                {"   "}
                                {`+${phoneCode}`}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                    <PhoneNumberInput
                      initialValue=""
                      setNumber={(num) => setPhoneNumber(num)}
                      disabled={loading}
                    />
                  </div>

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
                  * We'll never share your phone number with anyone else.
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
                  * Please insert the 6 digit OTP sent to your mobile number.
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
