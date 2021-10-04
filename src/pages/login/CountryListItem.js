/** @format */

import React from "react";

import { Flag } from "./styles";

const CountryListItem = ({ isoCode, handleClick, name, phoneCode }) => (
  <li className="dropdown-item" key={isoCode} onClick={handleClick}>
    {/* <Flag src={`/flags/svg/${isoCode}.svg`} alt={name} />  */}
    {`+${phoneCode}`}
  </li>
);

export default CountryListItem;
