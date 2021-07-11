/** @format */

import { LOG_IN } from "../constants/actionTypes";

export function logIn({ token }) {
  return {
    type: LOG_IN,
    value: { token },
  };
}
