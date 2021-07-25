/** @format */

import React, { useState } from "react";

import { LOCATIONS, ACCOUNT_TYPE } from "../../common/contants";
import { createAdmin as apiCreateAdmin } from "../../modules/admin/api";

const CreateAdmin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);

  const [accountType, setAccountType] = useState("");
  // const [textColor, setColor] = useState("#f50808");
  // const [message, setMessage] = useState("");

  // const onMobileSubmit = (e) => {
  //   const phoneNumberStr = (parseInt(e.target.value, 10) || 0).toString();
  //   if (phoneNumberStr.length !== 10) {
  //     setMessage("Please Enter your 10 digit mobile number");
  //   } else {
  //     setPhoneNumber(phoneNumberStr);
  //     setMessage("");
  //   }
  // };

  const onSubmit = async (e) => {
    setLoading(true);
    let data = {
      phoneNumber,
      accountType,
    };

    if (accountType === ACCOUNT_TYPE.manager) {
      data = {
        ...data,
        location,
      };
    }

    const res = await apiCreateAdmin(data);

    console.log(res);
  };

  return (
    <div className="container-flex">
      <form className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="phoneNumberInput" className="form-label">
              Phone Number*
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumberInput"
              aria-describedby="phoneNumberHelp"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div id="phoneNumberHelp" className="form-text">
              {/* This issue type will be used by public to create grievances. */}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="accountTypeInput" className="form-label">
              Account Type*
            </label>
            <select
              className="form-select"
              id="accountTypeInput"
              aria-label="accountType"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="">Select</option>
              <option value={ACCOUNT_TYPE.user}>User</option>
              <option value={ACCOUNT_TYPE.manager}>Manager</option>
              <option value={ACCOUNT_TYPE.admin}>Admin</option>
            </select>
          </div>

          {accountType === ACCOUNT_TYPE.manager ? (
            <div className="mb-3">
              <label htmlFor="locationInput" className="form-label">
                Location*
              </label>
              <select
                className="form-select"
                id="locationInput"
                aria-label="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select</option>
                <option value={LOCATIONS.bangaluru}>Bangaluru</option>
                <option value={LOCATIONS.delhi}>Delhi</option>
                <option value={LOCATIONS.mumbai}>Mumbai</option>
              </select>
            </div>
          ) : null}
          <div id="formHelp" className="form-text">
            Required fields are marked with (*)
          </div>
        </div>

        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary"
            disabled={
              loading || phoneNumber.length !== 10 || accountType.length < 1
            }
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
